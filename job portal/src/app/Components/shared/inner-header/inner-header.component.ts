import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-inner-header",
  templateUrl: "./inner-header.component.html",
  styleUrls: ["./inner-header.component.scss"],
})
export class InnerHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogOut() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate([""], { replaceUrl: true });
  }
}
