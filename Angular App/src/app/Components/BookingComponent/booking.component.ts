import { Component, NgZone, OnInit } from '@angular/core';
import { PaymentService } from "../../Services/PaymentService/payment.service";
import { WindowRefService } from '../../Services/windows-ref/window-ref.service';
import { PackageService } from 'src/app/Services/Package/package.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/Models/Package';
import { BookingService } from 'src/app/Services/Booking/booking.service';
import { AuthserviceService } from 'src/app/Services/Auth/authservice.service';
import { EmailService } from 'src/app/Services/Email/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [WindowRefService]
})

export class BookingComponent {
  dat: any;
  id: any;
  bookingDate ?: Date ;
  totalPrice: number | undefined;
  bookingDat: any;
  bookingResponse: any;

  constructor(private payment:PaymentService, private winRef: WindowRefService, private srvc:PackageService,
    private route: ActivatedRoute, private booking: BookingService, private router: Router, private ngZone: NgZone, 
    private auth: AuthserviceService, private email:EmailService, private snackbar: MatSnackBar) { }

  userDat : any={userId:"", email:"", firstName:"", lastName:"", phone : ""};
  packageDat!: Package;
  ngOnInit()
   {
      this.route.params.subscribe(params => {
      this.dat = params['dat'];
      });
      this.id = this.auth.getEmail();
      console.log(this.id);
      this.auth.GetUser(this.id).subscribe((data:any)=>
      {
        this.userDat=data;
      });
      this.srvc.getpackagebyId(this.dat).subscribe((data:any)=>
      {
        this.packageDat=data;
      });
    }
   
  returnedData : any;
  orderData:any;
  res:any;
  Order()
  {
    this.totalPrice =this.packageDat.price + this.packageDat.installationFee;
    this.orderData = {
      "amount" : this.totalPrice * 100, 
      "orderId" : `order_${this.userDat.email}_${this.packageDat.packageId}`,
      "userId" : this.userDat.email,
      "packageId" : this.packageDat.packageId,
      "payerName" : this.userDat.userFirstName + " " + this.userDat.userLastName,
      "payerEmail" : this.userDat.email,
      "payerPhone" : this.userDat.phoneNumber,
      "bookingDate" : this.bookingDate ,
      "dateTimeOfPurchase" : new Date(),
      "razorpay_payment_id" : "0",
      "razorpay_order_id" : "0",
      "razorpay_signature" : "0"
    };

    this.payment.createOrder(this.orderData).subscribe(
      (response : any) => {
        this.returnedData=response;
        console.log(response);
      },
      (error : Error) => {
        console.error('Error Creating Razorpay Order:', error);
      }
    );
  }
  Paynow()
  {
    this.res  =this.payWithRazor(this.returnedData.Attributes.id);
  }

  payWithRazor(val: any)
  {
    const options: any = {
      key: 'rzp_test_ac9sBPe3T5dDRe',
      amount: this.returnedData.Attributes.amount,
      currency: 'INR',
      name: 'Wi-FYI',
      description: `Purchasing Broadband plan of id${this.packageDat.packageId}`,
      image: '/src/assets/images/logo.png', 
      order_id: val,
      modal: {
        escape: false,
      },
      notes: {
      },
      theme: {
        color: '#f86e63'
      }
    };
    options.handler = ((response: any, error: any) => {
      this.payment.validatePayment(response).subscribe();
      options.response = response;
      console.log(response);
      console.log(options);
      
    if(response.razorpay_payment_id !== "0")
    {
      this.bookingDat={
        "bookingId": response.razorpay_order_id,
        "paymentId": response.razorpay_payment_id,
        "user": {
          "userID": this.userDat.email,
          "userFirstName": this.userDat.userFirstName,
          "userLastName": this.userDat.userLastName,
          "email": this.userDat.email,
          "userPassword": this.userDat.password,
          "phoneNumber": this.userDat.phoneNumber
        },
        "pack": {
          "packageId": this.packageDat.packageId,
          "packageName": this.packageDat.packageName,
          "speed": this.packageDat.speed,
          "price": this.packageDat.price,
          "duration": this.packageDat.duration,
          "installationFee": this.packageDat.installationFee
        },
        "installationDate": this.bookingDate
      }
      this.makeBooking(this.bookingDat);
    }
    else
    {
      alert("Payment Failed");
    }
    });
    options.modal.ondismiss = (() => {
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    
    rzp.open();
  }

  makeBooking(data: any){
    console.log(data);
    this.booking.createBooking(data).subscribe((response : any) => {
      this.bookingResponse=response;
      console.log(this.bookingResponse);
      this.snackbar.open('Booking Successful & Email has been Sent! Back to Home page we go!🙂', 'Close', { duration: 3000 });
    },
    (error : Error) => {
      console.error('Error Creating Booking:', error);
    })
    this.email.bookingConfirmed(this.orderData);
    this.email.bookingAlert(this.bookingDat);
    this.ngZone.run(() => {
      this.router.navigate(['/home']);
    });

  }
}