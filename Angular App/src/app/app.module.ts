import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvgratingComponent } from './Components/avgrating/avgrating.component';
import { BookingComponent } from './Components/BookingComponent/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CheckPlansComponent } from "./Components/compare-plans/check-plans.component";
import { CommonModule } from '@angular/common';
import { DialogComponent } from './Components/ViewCardDialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./Components/header/header.component";
import { HomeComponent} from "./Components/home/home.component"
import { ListCardDialogComponent } from './Components/list-card-dialog/list-card-dialog.component';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatLegacyButtonModule as MatButtonModule1} from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule1} from "@angular/material/legacy-dialog";
import { MatLegacyCardModule as MatCardModule1} from "@angular/material/legacy-card";
// import { MatButtonModule} from '@angular/material/button';
// import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SliderComponent } from "./Components/slider/slider.component";
import { StarRatingComponent } from './Components/star-rating/star-rating.component';
import { ViewPlansComponent } from "./Components/view-plans/view-plans.component";
import { BookinghistoryComponent } from './Components/bookinghistory/bookinghistory.component';
import { UpdateProviderProfileComponent } from './Components/update-provider-profile/update-provider-profile.component';
import { UpdateUserProfileComponent } from './Components/update-user-profile/update-user-profile.component';
import { UserregistrationComponent } from './Components/userregistration/userregistration.component';
import { ProviderregistrationComponent } from './Components/providerregistration/providerregistration.component';
import { MatLegacySnackBarModule as MatSnackBarModule1 } from '@angular/material/legacy-snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from "@angular/material/dialog";
import { MatCardModule} from "@angular/material/card";
import { MatInputModule} from "@angular/material/input"
import { MatFormFieldModule} from "@angular/material/form-field"
import { LoginComponent } from './Components/login/login.component';
import { ProfileViewComponent } from './Components/profile-view/profile-view.component';
import { TitleComponent } from './Components/title/title.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SvcProfileViewComponent } from './Components/profile-view copy/profile-view.component';
import { PackagesCrudComponent } from './Components/packages-crud/packages-crud.component';


@NgModule({
  declarations: [
    AppComponent, BookingComponent, CheckPlansComponent, 
    HeaderComponent, HomeComponent, SliderComponent, SvcProfileViewComponent,
    ViewPlansComponent, DialogComponent, ListCardDialogComponent, TitleComponent,
    AvgratingComponent, StarRatingComponent,BookinghistoryComponent, NavbarComponent,
    UpdateProviderProfileComponent, UpdateUserProfileComponent, ProfileViewComponent, PackagesCrudComponent,
    UserregistrationComponent, ProviderregistrationComponent, LoginComponent, TitleComponent, PackagesCrudComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, HttpClientModule, MatExpansionModule,
    MatDividerModule, BrowserAnimationsModule, MatFormFieldModule,
    FormsModule, CommonModule, MatSnackBarModule, MatInputModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatCardModule, 
    MatToolbarModule, MatMenuModule, MatSidenavModule, MatDialogModule, 
    MatButtonModule, 
      // MatCardModule1, MatSnackBarModule1, MatButtonModule1, MatDialogModule1,
    // MatLegacyButtonModule, MatLegacyDialogModule, MatLegacyCardModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }