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
export class OrgGuard implements CanActivate {
  constructor(private signinService: SigninService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    if (this.signinService.isLoggedIn() && userData.role === "orgnization") {
      return true;
    }
    this.router.navigate([""]);
    return false;
  }
}
