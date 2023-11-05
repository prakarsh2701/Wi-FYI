import { Component } from '@angular/core';
import { AuthserviceService } from '../../Services/Auth/authservice.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EmailService } from 'src/app/Services/Email/email.service';


@Component({
  selector: 'app-providerregistration',
  templateUrl: './providerregistration.component.html',
  styleUrls: ['./providerregistration.component.css']
})
export class ProviderregistrationComponent {
  provider={email:'', password:'',confirmPassword:''};

  constructor(private svc: AuthserviceService,private snackbar: MatSnackBar,private router: Router, private email: EmailService) { }

   onProviderRegistration() {
    if (this.provider.email && this.provider.password) {
      this.svc.ProviderRegistration(this.provider).subscribe({ next: (response) => {
        //this.ngForm.resetForm();
        this.snackbar.open(response.message, 'Close', {duration: 3000 });
        this.email.welcome(this.provider.email, `Welcome to i-FYI, your login id and password are: ${this.provider.email} & ${this.provider.password}. Hope you'll be back `);
        this.router.navigate(['login'])
      },
      error: (err) => {
        this.snackbar.open("ERROR","Something when wrong!");
      },
      });
      console.log('Logged in with email:', this.provider.email);
      console.log(this.provider);
    }
  }
}
