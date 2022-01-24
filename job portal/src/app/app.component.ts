import { ChangeDetectorRef, Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { CONSTANTS } from "./helper/constants";
import { CommonService } from "./services/common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Recruiter";
  public loggedIn = false;
  userData = JSON.parse(
    localStorage.getItem("rememberMe") === "true"
      ? localStorage.getItem("user")
      : (sessionStorage.getItem("user") as any)
  );

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private commonService: CommonService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const filteredMenus = CONSTANTS.MENUS.filter(
          (menu) =>
            menu.url === this.router.url &&
            menu.isForCandidate === this.userData.role
        );
        // if (filteredMenus.length <= 0) {
        //   window.history.back();
        //   this.commonService.alert(
        //     "error",
        //     this.router.url + " is not a valid url"
        //   );
        // }
      }
    });
  }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.router.navigate(["/candidateDashboard"]);
    }
    this.loggedIn =
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("token")
          ? true
          : false
        : sessionStorage.getItem("token")
        ? true
        : false;
    this.cd.detectChanges();
  }

  onClick(){
    this.router.navigate(['organization-signin'])
  }
}
