import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CONSTANTS } from "src/app/helper/constants";

@Component({
  selector: "app-inner-header",
  templateUrl: "./inner-header.component.html",
  styleUrls: ["./inner-header.component.scss"],
})
export class InnerHeaderComponent implements OnInit {
  user: any;
  menu = CONSTANTS.MENUS;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.user = userData;
  }

  onLogOut() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate([""], { replaceUrl: true });
  }
  makeActive(url: string) {
    return this.router.url.split("/").pop() === url.split("/").pop();
  }
}
