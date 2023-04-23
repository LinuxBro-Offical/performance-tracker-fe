import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'app/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:LoginComponent , private router: Router) { }
  canActivate(){
    if(this.auth.loggedIn()){
      return true
    }else{
      this.router.navigate(['login'])
    }
  }
}

