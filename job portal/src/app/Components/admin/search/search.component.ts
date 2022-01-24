import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(private jobsService: JobsService,
    private router: Router,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.searchKeyWords= this.route.snapshot.queryParamMap.get('query') as string;
    this.onSearch();
  }
  onSearch() {
    this.router.navigate([], {
      queryParams: {
        query: this.searchKeyWords
      },
      queryParamsHandling: 'merge',
    });
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
