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
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  step6 = false;
  step7 = false;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const curentUrl = this.router.url.split("/").pop();
        console.log("curentUrl", curentUrl);
        switch (curentUrl) {
          case "about-you":
            this.step1 = true;
            this.step2 = false;
            this.step3 = false;
            this.step4 = false;
            this.step5 = false;
            this.step6 = false;
            this.step7 = false;
            break;
          case "experience":
            this.step1 = true;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
            this.step5 = false;
            this.step6 = false;
            this.step7 = false;
            break;
          case "roles":
            this.step1 = true;
            this.step2 = true;
            this.step3 = true;
            this.step4 = false;
            this.step5 = false;
            this.step6 = false;
            this.step7 = false;
            break;
          case "skills":
            this.step1 = true;
            this.step2 = true;
            this.step3 = true;
            this.step4 = true;
            this.step5 = false;
            this.step6 = false;
            this.step7 = false;
            break;
          case "work-experience":
            this.step1 = true;
            this.step2 = true;
            this.step3 = true;
            this.step4 = true;
            this.step5 = true;
            this.step6 = false;
            this.step7 = false;
            break;
          case "education-details":
            this.step1 = true;
            this.step2 = true;
            this.step3 = true;
            this.step4 = true;
            this.step5 = true;
            this.step6 = true;
            this.step7 = false;
            break;
          case "certificates":
            this.step1 = true;
            this.step2 = true;
            this.step3 = true;
            this.step4 = true;
            this.step5 = true;
            this.step6 = true;
            this.step7 = true;
            break;

          default:
            break;
        }
      }
    });
  }

  ngOnInit(): void {}
}
