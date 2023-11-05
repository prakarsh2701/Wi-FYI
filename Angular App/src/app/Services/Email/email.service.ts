import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthserviceService } from '../Auth/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http : HttpClient, private auth: AuthserviceService) {}
  emailDat: any;
  bookingConfirmed(orderDat : any){
    const emailData = {
     To: orderDat.payerEmail, 
     Subject: "Booking Details",
     Body: JSON.stringify(orderDat),
   };    
   console.log("Email Service accessed after Booking Complete");
  return this.http.post("http://localhost:5239/SendEmail",emailData);
 }
 bookingAlert(bookingDat : any){
  const emailData = {
    To: bookingDat.user.email, // Use user's email as the recipient
    Subject: "Booking Details",
    Body: JSON.stringify(bookingDat),
  };
  console.log("Email has been initiated to Provider after Booking");
  return this.http.post("http://localhost:5239/SendEmail", emailData);
 }
  profileUpdated(userDat: any){
    const id=this.auth.getEmail();
    this.emailDat = {To : id, Subject : "Profile Updated",  Body : JSON.stringify(userDat)}
    return this.http.post("http://localhost:5239/SendEmail",this.emailDat);
  }
  welcome(id: string, body: string){
    this.emailDat = {To : id, Subject : "Profile Updated",  Body : body}
    return this.http.post("http://localhost:5239/SendEmail",this.emailDat);
  }

}

