import { ChangeDetectorRef, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Recruiter";
  public loggedIn = false;

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.router.navigate(["/dashboard"]);
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
}
