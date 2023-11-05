import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/Auth/authservice.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class SvcProfileViewComponent {
constructor(private auth: AuthserviceService, private router: Router){}
id : any;
userDat : any;
packageDat : any
ngOnInit()
   {
      this.id = this.auth.getEmail();
      console.log(this.id);
      this.auth.GetProvider(this.id).subscribe((data:any)=>
      {
        this.userDat=data;
        console.log(data);
      });
    }
    Home(){
      this.router.navigate(['', ]);
    }
}
