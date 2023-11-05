import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './Components/BookingComponent/booking.component';
import { ViewPlansComponent } from './Components/view-plans/view-plans.component';
import { CheckPlansComponent } from './Components/compare-plans/check-plans.component';
import { HomeComponent } from './Components/home/home.component';
import { BookinghistoryComponent } from './Components/bookinghistory/bookinghistory.component';
import { LoginComponent } from './Components/login/login.component';
import { UserregistrationComponent } from './Components/userregistration/userregistration.component';
import { ProviderregistrationComponent } from './Components/providerregistration/providerregistration.component';
import { authguardGuard } from './guards/authguard.guard';
import { UpdateUserProfileComponent } from './Components/update-user-profile/update-user-profile.component';
import { UpdateProviderProfileComponent } from './Components/update-provider-profile/update-provider-profile.component';
import { ProfileViewComponent } from './Components/profile-view/profile-view.component';
import { TitleComponent } from './Components/title/title.component';
import { SvcProfileViewComponent } from './Components/profile-view copy/profile-view.component';
import { PackagesCrudComponent } from './Components/packages-crud/packages-crud.component';



const routes: Routes = [
  
  { path: '', redirectTo:'homepage', pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'homepage', component:TitleComponent},
  { path: 'userRegistration', component:UserregistrationComponent},
  { path: 'providerRegistration', component:ProviderregistrationComponent},

  { path: 'updateUser', component:UpdateUserProfileComponent, canActivate:[authguardGuard], data: { roles: ['User']}},
  { path: 'updateProvider', component:UpdateProviderProfileComponent, canActivate:[authguardGuard], data: { roles: ['Provider']}},

  { path: 'home', component: HomeComponent},
  
  { path: 'packages', component: PackagesCrudComponent, canActivate:[authguardGuard], data: { roles: ['Provider']}},
  { path: 'comparecomponents', component: CheckPlansComponent, canActivate:[authguardGuard], data: { roles: ['User']}},
  { path: 'listcomponents', component: ViewPlansComponent, canActivate:[authguardGuard], data: { roles: ['User','Provider']}},
  { path: 'planbooking/:dat', component: BookingComponent, canActivate:[authguardGuard], data: { roles: ['User']}},
  { path: 'viewplans', component: ViewPlansComponent, canActivate:[authguardGuard], data: { roles: ['User','Provider']}},
  { path: 'viewuserprofile', component: ProfileViewComponent, canActivate:[authguardGuard], data: { roles: ['User']}},
  { path: 'viewproviderprofile', component: SvcProfileViewComponent, canActivate:[authguardGuard], data: { roles: ['Provider']}},
  { path: 'comparepackages', component: CheckPlansComponent, canActivate:[authguardGuard, authguardGuard], data: { roles: ['User']}},
  { path: 'bookinghistory', component: BookinghistoryComponent, canActivate:[authguardGuard], data: { roles: ['User']}},
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
