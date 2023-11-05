import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../../Services/Auth/authservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/Services/Email/email.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent {
  user = {
    UserFirstName: '',
    UserLastName: '',
    phoneNumber: '',
    address: '',
    email:''
  };
  constructor(private route: ActivatedRoute,private svc: AuthserviceService,private snackbar: MatSnackBar,private router: Router, private email: EmailService)
  {}
  
  ngOnInit(){
    const emailParam = this.svc.getEmail();
    this.user.email = emailParam !== null ? emailParam : '';
  }
  

  phonePatternCheck() {
    return /^\d{10}$/.test(this.user.phoneNumber);
  }
  onSubmit() {
    console.log(this.user);
    this.svc.UserUpdate(this.user).subscribe({ next: (response) => {
      //this.ngForm.resetForm();
      this.snackbar.open(response.message, 'Close', {duration: 3000 });
      console.log('Response from backend:', response);
      this.email.profileUpdated(this.user);
      this.router.navigate(['home'])
    },
    error: (err) => {
      this.snackbar.open("ERROR",'Close', {duration: 3000 });
      console.log(err);
    },
    });
  }
}
