import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../Services/Auth/authservice.service';
import { BookingService } from 'src/app/Services/Booking/booking.service';
import { StarRatingService } from 'src/app/Services/StarRatingSvc/star-rating.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
  id:any;
  user:any={};
  booking:any={};
  receivedRating?: any;
  constructor(private svc:AuthserviceService,private srvc:BookingService,private service:StarRatingService){}

  ngOnInit()
  {
    this.id=this.svc.getEmail();
     this.svc.GetUser(this.id).subscribe((data:any)=>
     {
       this.user=data;
       console.log(data);
     });
    this.srvc.getByUserId(this.id).subscribe((data:any)=>
    {
      this.booking=data;
      console.log(data);
    });
  }

  handleRatingChange(data: {bookingId: string, userId: string, packageId: number, rating: number }) {
    const { bookingId, userId, packageId, rating } = data;
    this.service.postRating(bookingId, userId, packageId, rating).subscribe((da:any) => 
    console.log(da));
  }
  existingRating(data : any){
    this.service.getRating(data).subscribe((d : any) =>{
      this.receivedRating = d;
    });
  }
}