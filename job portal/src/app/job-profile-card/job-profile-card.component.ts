import { Component, OnInit } from "@angular/core";
import { JobsService } from "../services/jobs.service";

@Component({
  selector: "app-job-profile-card",
  templateUrl: "./job-profile-card.component.html",
  styleUrls: ["./job-profile-card.component.scss"],
})
export class JobProfileCardComponent implements OnInit {
  recommendedJobs$ = this.jobsService.getRecommendedJobs();
  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {}
}
