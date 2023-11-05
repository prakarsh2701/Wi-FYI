import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private emailaddress$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");
  constructor() { }

  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.role$.next(role);
  }

  public getEmailFromStore(){
    return this.emailaddress$.asObservable();
  }

  public setEmailForStore(emailaddress:string){
    this.emailaddress$.next(emailaddress)
  }
}
