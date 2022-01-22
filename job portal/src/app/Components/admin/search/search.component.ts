import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CONSTANTS } from "src/app/helper/constants";
import { JobsService } from "src/app/services/jobs.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchKeyWords: string | undefined;
  apiSubscription = new Subscription();
  jobs: any;
  APIURL = CONSTANTS.BASEURL;
  userData = JSON.parse(
    localStorage.getItem("rememberMe") === "true"
      ? localStorage.getItem("user")
      : (sessionStorage.getItem("user") as any)
  );

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {}
  onSearch() {
    this.apiSubscription.add(
      this.jobsService
        .searchJobs({ search: this.searchKeyWords })
        .subscribe((result: any) => {
          if (result?.jobs?.length) {
            this.jobs = result?.jobs;
          }
        })
    );
  }
}
