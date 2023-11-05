import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 
  constructor(private http:HttpClient) { }
 

createOrder(orderData: any): any {
  const apiUrl  = 'http://localhost:5239/CreateOrder';
    return this.http.post(apiUrl, orderData);
  }

validatePayment(orderData1: any): any {
  const apiUrl  = 'http://localhost:5239/VerifyPayment';
  return this.http.post(apiUrl, orderData1);
}
}
