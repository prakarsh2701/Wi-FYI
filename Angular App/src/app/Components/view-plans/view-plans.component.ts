import { Component } from '@angular/core';
import { Package } from 'src/app/Models/Package';
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from '../ViewCardDialog/dialog.component';
import { PackageService } from 'src/app/Services/Package/package.service';
@Component({
  selector: 'app-view-plans',
  templateUrl: './view-plans.component.html',
  styleUrls: ['./view-plans.component.css']
})
export class ViewPlansComponent {
  constructor(public dialog: MatDialog, private svc: PackageService) {}
  pack!: Package[];
  len: any;
  ngOnInit()
  {
    this.svc.getallpackage().subscribe(
    (response : any) => {
      this.pack=response;
      this.len=this.pack.length;
    },
    (error : Error) => {
      console.error('Error in Getting all packages:', error);
    });
  }
  openDialog(item: any): void {
    if (item && item.packageId) {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '400px',
            data: item.packageId,
        });
    } else {
        console.error('Invalid item or item.packageId');
    }
  }
}