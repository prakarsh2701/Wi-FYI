import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/app/Models/Package';
import { AuthserviceService } from 'src/app/Services/Auth/authservice.service';
import { PackageService } from 'src/app/Services/Package/package.service';

@Component({
  selector: 'app-packages-crud',
  templateUrl: './packages-crud.component.html',
  styleUrls: ['./packages-crud.component.css']
})
export class PackagesCrudComponent {
  create= true;
  constructor(private svc:PackageService, private auth: AuthserviceService, private router: Router){}
  id : any;
  userDat : any;
  val:any;
  packageDat ={
    "packageId": 0  ,
    "companyName": ""  ,
    "packageName": "",
    "speed": 0,
    "price" : 0,
    "duration": 0,
    "installationFee": 0,
    "description" : "",
    "subscriptions": {
      "subscriptionName": "string"
    }
};
  ngOnInit(){
    this.id = this.auth.getEmail();
      console.log(this.id);
      this.auth.GetProvider(this.id).subscribe((data:any)=>
      {
        this.userDat=data;
        console.log(data);
      });
  }
  toggle(){
    this.create =!this.create
  }
  createPackage() {
    this.packageDat.companyName=this.userDat.companyName;
    this.packageDat.speed.toString();
    console.log(this.packageDat);
    this.svc.createPackage(this.packageDat).subscribe((data:any)=> console.log("Package Created", data));
    this.router.navigate(['listcomponents']);
  }
  updatePackage(){
    this.packageDat.companyName=this.userDat.companyName;
    this.packageDat.speed.toString();
    console.log(this.packageDat);
    this.svc.updatePackage(this.packageDat).subscribe((data:any)=> console.log("Package Updated", data));
    this.router.navigate(['listcomponents']);
  }
}
