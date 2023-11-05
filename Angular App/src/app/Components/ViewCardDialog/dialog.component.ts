import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Package } from 'src/app/Models/Package';
import { PackageService } from 'src/app/Services/Package/package.service';
import { ViewPlansComponent } from '../view-plans/view-plans.component';
import { AuthserviceService } from 'src/app/Services/Auth/authservice.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private router: Router, private svc: PackageService, 
  public dialogRef: MatDialogRef<ViewPlansComponent>, private auth : AuthserviceService) {}
  packDat!:Package;
  role: any = this.auth.getRole();

  ngOnInit(){
    this.svc.getpackagebyId(this.data).subscribe((response : any) => {
        this.packDat=response;
      },
      (error : Error) => {
        console.error('Error in Getting all packages:', error);
      }
    );
  }
  buy(dat: any) {
    this.closeDialog();
    this.router.navigate(['/planbooking', dat]);
  }
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  
}
