import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/Auth/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private auth: AuthserviceService) {}
  role = this.auth.getRole();
  navigateToViewPlansComponent(){
    this.router.navigate(['/listcomponents']);
  }
  navigateToCheckPlansComponent(){
    this.router.navigate(['/comparecomponents']);
  }
}
