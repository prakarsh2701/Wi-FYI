import { Component,  ViewChild} from '@angular/core';
import { AuthserviceService } from '../../Services/Auth/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(private svc :AuthserviceService, private router: Router) { }
  isSidenavOpen = false;
  showFiller = false;
  email : any = this.svc.getEmail();
  role : any = this.svc.getRole();
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  Title(){
    this.router.navigate(['/title']);
  }

  // @ViewChild(MatDrawer) drawer!: MatDrawer;
  // toggleSidenav() {
  //   this.drawer.toggle();
  // }
  logout(){
    this.svc.signOut();
  } 
}