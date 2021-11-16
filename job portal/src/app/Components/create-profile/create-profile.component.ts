import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-create-profile",
  templateUrl: "./create-profile.component.html",
  styleUrls: ["./create-profile.component.scss"],
})
export class CreateProfileComponent implements OnInit {
  activeStep = false;
  done = false;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const curentUrl = this.router.url.split("/").pop();
        console.log("curentUrl", curentUrl);
        switch (curentUrl) {
          case "about-you":
            this.activeStep = true;
            this.done = false;

            break;
            case "experience":
              this.activeStep = true;
              this.done = true;
  
              break;

          default:
            break;
        }
      }
    });
  }

  ngOnInit(): void {}
}
