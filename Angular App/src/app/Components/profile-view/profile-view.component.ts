import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/Auth/authservice.service';
import { BookingService } from 'src/app/Services/Booking/booking.service';
import { PackageService } from 'src/app/Services/Package/package.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
constructor(private booking: BookingService, private auth: AuthserviceService, private book : BookingService , private router: Router){}
id : any;
userDat : any;
packageDat : any
ngOnInit()
   {
      this.id = this.auth.getEmail();
      console.log(this.id);
      this.auth.GetUser(this.id).subscribe((data:any)=>
      {
        this.userDat=data;
      });
      this.book.getByUserId(this.id).subscribe((data:any)=>
      {
        this.packageDat=data;
        console.log(this.packageDat);
      });
    }
    Home(){
      this.router.navigate(['', ]);
    }
}
