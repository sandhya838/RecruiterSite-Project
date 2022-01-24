import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { data } from "jquery";
import { Subscription } from "rxjs";
import { CONSTANTS } from "src/app/helper/constants";
import { CommonService } from "src/app/services/common.service";
import { CompanyDetailService } from "src/app/services/company-detail.service";
import { JobsService } from "src/app/services/jobs.service";

@Component({
  selector: "app-job-view",
  templateUrl: "./job-view.component.html",
  styleUrls: ["./job-view.component.scss"],
})
export class JobViewComponent implements OnInit, OnDestroy {
  APIURL = CONSTANTS.BASEURL;
  jobdata: any;
  userData: any;
  apiSubscription = new Subscription();

  constructor(
    private jobservice: JobsService,
    private companyDetailService: CompanyDetailService,
    private commonService: CommonService,
    private router: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.apiSubscription.add(
      this.companyDetailService
        .getJobDetails(this.router.snapshot.params["job_id"])
        .subscribe((data: any) => {
          if (data) {
            this.jobdata = data.jobs;
          }
        })
    );
  }
  makeJobActiveOrInActive(jobId: string, status: { isActive: boolean }) {
    this.apiSubscription.add(
      this.jobservice
        .makeJobActiveOrInActive(jobId, status)
        .subscribe((result) => {
          if (result.jobs) {
            this.jobdata = result.jobs;
            this.commonService.alert('success',result.message);
          }
        })
    );
  }
}
