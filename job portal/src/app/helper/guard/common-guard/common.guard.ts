import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { SigninService } from "src/app/signin.service";

@Injectable({
  providedIn: "root",
})
export class CommonGuard implements CanActivate {
  constructor(private signinService: SigninService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.signinService.isLoggedIn()) {
      return true;
    }
    this.router.navigate([""]);
    return false;
  }
}
