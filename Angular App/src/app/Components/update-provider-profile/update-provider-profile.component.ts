import { Component } from '@angular/core';
import { AuthserviceService } from '../../Services/Auth/authservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/Services/Email/email.service';


@Component({
  selector: 'app-update-provider-profile',
  templateUrl: './update-provider-profile.component.html',
  styleUrls: ['./update-provider-profile.component.css']
})
export class UpdateProviderProfileComponent {
  companyDetails = {
    CompanyName: '',
    ContactPersonName: '',
    Email: '',
    PhoneNumber: '',
    OfficeAddress: '',
    GstNumber: ''
  };
  constructor(private svc: AuthserviceService,private snackbar: MatSnackBar,private router: Router, private email: EmailService)
  {}
  ngOnInit(){
    const emailParam = this.svc.getEmail();
    this.companyDetails.Email = emailParam !== null ? emailParam : '';
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Handle file upload logic here
  }

  updateCompany() {
   this.svc.ProviderUpdate(this.companyDetails).subscribe({ next: (response) => {
      //this.ngForm.resetForm();
      this.snackbar.open(response.message, 'Close', {duration: 3000 });
      console.log('Response from backend:', response);
      this.email.profileUpdated(this.companyDetails);
      this.router.navigate(['home'])
    },
    error: (err) => {
      this.snackbar.open("ERROR",'Close', {duration: 3000 });
      console.log(err);
    },
    });
  }
}
