import { Component} from '@angular/core';
import {MatDialog,  MatDialogRef } from '@angular/material/dialog';
import { ListCardDialogComponent } from '../list-card-dialog/list-card-dialog.component';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/Auth/authservice.service';

@Component({
  selector: 'app-compare-plans',
  templateUrl: './check-plans.component.html',
  styleUrls: ['./check-plans.component.css']
})
export class CheckPlansComponent {

  constructor(private dialog: MatDialog, private router: Router, private auth : AuthserviceService) {}
  selectedItem1: any | null = null;
  selectedItem2: any | null = null;
  dialogRef1 ?:  MatDialogRef<any>;
  dialogRef2 ?:  MatDialogRef<any>;

  role = this.auth.getRole();

  openDialog1(card: any): void {
    this.dialogRef1 = this.dialog.open(ListCardDialogComponent, {
      // width: '2000px',
      // height:'600px',
      data: { card }
    });

    this.dialogRef1.afterClosed().subscribe((result: any | null) => {
      if (result) {
        this.selectedItem1 = result;
      }
    });
  }

  openDialog2(card: string): void {
    this.dialogRef2 = this.dialog.open(ListCardDialogComponent, {
      // width: '2000px',
      // height:'600px',
      data: { card }
    });

    this.dialogRef2.afterClosed().subscribe((result: any | null) => {
      if (result) {
        this.selectedItem2 = result;
      }
    });
  }

  buy(dat: any) {
    // Close the dialogs before navigating
    if (this.dialogRef1) {
      this.dialogRef1.close();
    }
    if (this.dialogRef2) {
      this.dialogRef2.close();
    }
      this.router.navigate(['/planbooking', dat]);
  }
}
