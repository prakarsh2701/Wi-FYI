import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckPlansComponent } from '../compare-plans/check-plans.component';
import { Package } from 'src/app/Models/Package';
import { PackageService } from 'src/app/Services/Package/package.service';

@Component({
  selector: 'app-list-card-dialog',
  templateUrl: './list-card-dialog.component.html',
  styleUrls: ['./list-card-dialog.component.css']
})
export class ListCardDialogComponent {
  constructor(public dialogRef: MatDialogRef<CheckPlansComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private svc:PackageService) {}
  pack !: Package[];
  ngOnInit(){
    this.svc.getallpackage().subscribe(
      (response : any) => {
        this.pack=response;
         console.log(response);
      },
      (error : Error) => {
        console.error('Error Creating Razorpay Order:', error);
      }
    );
  }
   
    setCard(card: any): void {
    console.log(card);
    this.dialogRef.close(card);
  }
}
