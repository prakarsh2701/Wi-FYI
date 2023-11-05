import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  bookingDat: any;
  createBooking(booking : any){
    return this.http.post("http://localhost:5239/CreateBooking",booking);
  }
  getByUserId(id : string){
    return this.http.get(`http://localhost:5239/GetBookingByUserId?id=${id}`);
  }
  getByPackageId(id : number){
    return this.http.get(`http://localhost:5239/GetBookingByPackageId?id=${id}`);
  }
  getAllBookings(){
    return this.http.get("http://localhost:5239/GetAllBookings");
  }
  getBookingById(id : number){
    return this.http.get(`http://localhost:5239/GetBookingById?id=${id}`);
  }
}
