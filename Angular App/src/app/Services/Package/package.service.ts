import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Package } from 'src/app/Models/Package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private srvc:HttpClient) { }

  getallpackage()
  {
    return this.srvc.get("http://localhost:5239/GetAllPackages");
  }
  getpackagebyId(id:number)
  {
    return this.srvc.get(`http://localhost:5239/GetPackageById?pack_id=${id}`);
  }
  getpackagebyCompany(cname:string)
  {
    return this.srvc.get(`http://localhost:5239/GetPackageByCompany?cname=${cname}`);
  }
  createPackage(pack : Package)
  {
    return this.srvc.post(`http://localhost:5239/AddPackage`, pack);
  }
  updatePackage(pack : Package)
  {
    return this.srvc.put(`http://localhost:5239/UpdatePackage`, pack);
  }
  deletePackage(id: number)
  {
    return this.srvc.delete(`http://localhost:5239/UpdatePackage?id=${id}`);
  }
}
