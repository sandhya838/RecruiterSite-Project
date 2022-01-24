import { Component, OnInit } from "@angular/core";
import { CONSTANTS } from "src/app/helper/constants";
import { JobsService } from "src/app/services/jobs.service";

@Component({
  selector: "app-job-listing",
  templateUrl: "./job-listing.component.html",
  styleUrls: ["./job-listing.component.scss"],
})
export class JobListingComponent implements OnInit {
  jobs:any;
  APIURL= CONSTANTS.BASEURL;
  userData = JSON.parse(
    localStorage.getItem("rememberMe") === "true"
      ? localStorage.getItem("user")
      : (sessionStorage.getItem("user") as any)
  );

  constructor(private jobservice: JobsService) {}

  ngOnInit(): void {
    this.jobservice
      .getJObsPostedByorgnization(this.userData._id)
      .subscribe((result) => {
        if (result.jobs.length) {
          this.jobs = result.jobs;
        }
      });
  }
}
function requestHeader(requestHeader: any) {
  throw new Error("Function not implemented.");
}
