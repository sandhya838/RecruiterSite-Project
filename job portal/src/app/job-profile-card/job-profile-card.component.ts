import { Component, OnInit } from "@angular/core";
import { JobsService } from "../services/jobs.service";

@Component({
  selector: "app-job-profile-card",
  templateUrl: "./job-profile-card.component.html",
  styleUrls: ["./job-profile-card.component.scss"],
})
export class JobProfileCardComponent implements OnInit {
   recommendedJobs$ :any;
  //= this.jobsService.getRecommendedJobs({
  //   jobType: "contract",
  //   skills: ["HTML5", "CSS3", "JavaScript", "angular"],
  //   location: ["pune"],
  //   experience: "5 years",
  //   salary: "16lpa",
  //   roles: "consultant",
  // });
  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    // this.jobsService.getRecommendedJobs({
    //   jobType: "contract",
    //   skills: ["HTML5", "CSS3", "JavaScript", "angular"],
    //   location: ["pune"],
    //   experience: "5 years",
    //   salary: "16lpa",
    //   roles: "consultant",
    // }).subscribe(result=>{
    //   console.log(result);
    // });
  }
}
