import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  private userPayload:{
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress":string,
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string,

  };
  // emailaddress = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken();
   }
  login(loginobj: any): Observable<any> {
    return this.http.post(`http://localhost:5092/api/Auth/Login`, loginobj);
  }
  GetUser(obj: string): Observable<any> {
    return this.http.get(`http://localhost:5239/GetUserById?email=${obj}`);
  }
  UserUpdate(userobj: any): Observable<any> {
    return this.http.put(`http://localhost:5239/UpdateUser`, userobj);
  }
  GetRole(obj: string): Observable<any> {
    return this.http.get(`http://localhost:5239/GetRole?email=${obj}`);
  }
  UserRegistration(userobj: any): Observable<any> {
    return this.http.post(`http://localhost:5239/CreateUser`, userobj);
  }
  GetProvider(obj: string): Observable<any> {
    return this.http.get(`http://localhost:5239/GetServiceProvider?email=${obj}`);
  }
  ProviderRegistration(userobj: any): Observable<any> {
    return this.http.post(`http://localhost:5239/RegisterServiceProvider`, userobj);
  }
  ProviderUpdate(userobj: any): Observable<any> {
    return this.http.put(`http://localhost:5239/UpdateServiceProvider`, userobj);
  }
  

  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue);
  }
  storeEmail(email: string) {
    localStorage.setItem('useremail',email);
  }
  storeRole(role: string) {
    localStorage.setItem('role',role);
  }
  getEmail()  {
    return localStorage.getItem('useremail');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getRole()  {
    return localStorage.getItem('role');
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  isLoggedIn(): boolean{
    if(localStorage.getItem('token')== null){
    return false;}
    else{
      return true;
    }
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getemailFromToken(){
    if(this.userPayload)
    console.log(this.userPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']);
    return this.userPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
  }

  getRoleFromToken(){
    if(this.userPayload)
    console.log(this.userPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'])
    return this.userPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }
}