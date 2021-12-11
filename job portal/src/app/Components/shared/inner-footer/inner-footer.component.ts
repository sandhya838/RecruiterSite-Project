import { Component, OnInit } from "@angular/core";
import { CONSTANTS } from "src/app/helper/constants";

@Component({
  selector: "app-inner-footer",
  templateUrl: "./inner-footer.component.html",
  styleUrls: ["./inner-footer.component.scss"],
})
export class InnerFooterComponent implements OnInit {
  menu = CONSTANTS.MENUS;
  user = JSON.parse(
    localStorage.getItem("rememberMe") === "true"
      ? localStorage.getItem("user")
      : (sessionStorage.getItem("user") as any)
  );
  viewPort = window.innerWidth <=768 ? true : false;
  constructor() {}

  ngOnInit(): void {}
}
