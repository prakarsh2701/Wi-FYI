import { Component } from '@angular/core';
import { AuthserviceService } from '../../Services/Auth/authservice.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EmailService } from 'src/app/Services/Email/email.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  user={email:'', password:'',confirmPassword:''};

  constructor(private svc: AuthserviceService,private snackbar: MatSnackBar,private router: Router, private email: EmailService) { }

   onUserRegistration() {
    if (this.user.email && this.user.password) {
      const loginData = {
        email: this.user.email,
        password: this.user.password
      };
      this.svc.UserRegistration(loginData).subscribe({ next: (response : any) => {
        this.snackbar.open(response.message, 'Close', {duration: 3000 });
        console.log('Response from backend:', response);
        this.email.welcome(this.user.email, `Welcome to i-FYI, your login id and password are: ${this.user.email} & ${this.user.password}. Hope you'll be back `);
        this.router.navigate(['login'])
      },
      error: (err: any) => {
        this.snackbar.open("ERROR","Something when wrong!");
        console.log(err);
      },
      }
      );
      console.log('Logged in with email:', this.user.email);
    }
  }
}
