import { CanActivateFn,Router } from '@angular/router';
import { AuthserviceService } from '../Services/Auth/authservice.service';
import { inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthserviceService)
  const router = inject(Router)
  
  const role = service.getRole();
  const allowedRoles = route.data['roles'];
  if(service.isLoggedIn() === true && allowedRoles.includes(role)){
    return true;
  }else{
    console.log("Not a user, back to login");
    router.navigate(['login'])
    return false;
  }
};
