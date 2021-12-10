import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-inner-header",
  templateUrl: "./inner-header.component.html",
  styleUrls: ["./inner-header.component.scss"],
})
export class InnerHeaderComponent implements OnInit {
  user: any;
  menu = [
    {
      name: "Jobs",
      url: "/jobs",
      icon: "fa fa-suitcase",
      isForCandidate: "candidate",
    },
    {
      name: "Post job",
      url: "/job-post",
      icon: "fa fa-suitcase",
      isForCandidate: "orgnization",
    },
  ];
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
}
