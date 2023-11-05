import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../Services/Auth/authservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = { email: '', password: '', role: '' };
  roles={email:'', role:''}
  user ={
    UserFirstName: '',
    UserLastName: '',
    phoneNumber: '',
    address: '',
    email: '',
    password: '',
  };
  
  provider={
    companyName: '',
    contactPerson: '',
    email: '',
    phoneNumber: '',
    officeAddress: '',
    gstNumber: ''
  };
  
  

  @ViewChild('LoginForm') ngForm: any; // Add a ViewChild reference to my form

  constructor(private svc: AuthserviceService, private snackbar: MatSnackBar, private fb: FormBuilder, private router: Router) { }


//checking for null values in mongodb
  hasNullValues(obj: any): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === null) {
        return true;
      }
    }
    return false;
  }

  onsubmit(){
    this.svc.GetRole(this.loginForm.email)
      .subscribe((res: any) => {
        this.roles = res;
        console.log(res);
        console.log(this.roles.role)


        if(this.roles.role=='Provider'){
          console.log("provider called")
      //getting all details of user
      this.svc.GetProvider(this.loginForm.email)
        .subscribe((providerdata: any) => {
          this.provider = providerdata;
          console.log(providerdata);
          this.onLogin();
        });
      }
      else{
        this.svc.GetUser(this.loginForm.email)
        .subscribe((userdata: any) => {
          this.user = userdata;
          console.log(userdata);
          this.onLogin();
        });
      }
      });
      
  }

  onLogin() {
    if (this.loginForm.email && this.loginForm.password) {
       
      this.svc.login(this.loginForm).subscribe({
        next: (response) => {
          //this.ngForm.resetForm();
          this.snackbar.open(response.message, 'Close', { duration: 3000 });
          const jsonObject = JSON.parse(response.token);
          const tokenValue = jsonObject.token;
          this.svc.storeToken(tokenValue);

          // const tokenPayload = this.svc.decodedToken();
          // this.svcc.setEmailForStore(tokenPayload.emailaddress);
          // this.svcc.setRoleForStore(tokenPayload.role);

          this.svc.storeEmail(this.loginForm.email);
          this.svc.storeRole(this.roles.role);
          console.log('Response from backend:', response);

          console.log(this.roles.role,this.provider);
          if(this.roles.role=='Provider'){
          // Check if any field in the user object is null
          if (this.hasNullValues(this.provider)) {
            // If any field is null, route to "updateUser" page
            this.snackbar.open('Please update your user profile.', 'Close', { duration: 3000 });
            this.router.navigate(['updateProvider']);
          }
          else {
            this.router.navigate(['home'])
          }
        }
        else{
          if (this.hasNullValues(this.user)) {
            // If any field is null, route to "updateUser" page
            this.snackbar.open('Please update your user profile.', 'Close', { duration: 3000 });
            this.router.navigate(['updateUser']);
          }
          else {
            this.router.navigate(['home']);
          }
        }
        },
        error: (err) => {
          this.snackbar.open("ERROR", "Something when wrong!");
          console.log(err);
        },
      });
    }
  }
}