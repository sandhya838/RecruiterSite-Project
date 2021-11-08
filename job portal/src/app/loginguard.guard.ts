import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from './signin.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor( private router: Router, private signInService: SigninService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.signInService.isLoggedOut()){
        return true;
      }
      this.router.navigate(['/dashboard'])
        return false;
    }  
  
}
