import { Component, OnInit } from "@angular/core";
import { CONSTANTS } from "../constants";
import { JobsService } from "../services/jobs.service";

@Component({
  selector: "app-job-profile-card",
  templateUrl: "./job-profile-card.component.html",
  styleUrls: ["./job-profile-card.component.scss"],
})
export class JobProfileCardComponent implements OnInit {
  APIURL= CONSTANTS.BASEURL;
  recommendedJobs: any;
  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    const userProifleData = JSON.parse(sessionStorage.getItem("user") as any);
    const requestHeader = {
      jobType: userProifleData.jobType,
      skills: userProifleData.skills,
      location: userProifleData.location,
      experience: userProifleData.experience,
      salary: userProifleData.salary,
      roles: userProifleData.roles,
    };

    console.log("userProifleData", requestHeader);
    this.jobsService.getRecommendedJobs(requestHeader).subscribe((result) => {
      if (result.matchedJobs.length) {
        this.recommendedJobs = result.matchedJobs;
      }
      console.log(result);
    });
  }
}
