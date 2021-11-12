import { Component, OnInit } from "@angular/core";
import { JobsService } from "../services/jobs.service";

@Component({
  selector: "app-job-profile-card",
  templateUrl: "./job-profile-card.component.html",
  styleUrls: ["./job-profile-card.component.scss"],
})
export class JobProfileCardComponent implements OnInit {
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
      console.log(result);
    });
  }
}
