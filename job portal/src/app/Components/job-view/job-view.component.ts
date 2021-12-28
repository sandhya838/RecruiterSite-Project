import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { CONSTANTS } from 'src/app/helper/constants';
import { CommonService } from 'src/app/services/common.service';
import { CompanyDetailService } from 'src/app/services/company-detail.service';
import { JobsService } from 'src/app/services/jobs.service';



@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.scss']
})
export class JobViewComponent implements OnInit {
  jobview:any;
  APIURL= CONSTANTS.BASEURL;
  jobdata: any;
  userData: any;
  userForm: any;

  constructor(private jobservice: JobsService
    , private companyDetailService:CompanyDetailService,private commonService: CommonService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.jobservice
    .getJObsPostedByorgnization(userData._id)
    .subscribe((result) => {
      if (result.jobs.length) {
        this.jobview = result.jobs;

      }
      console.log(this.jobview)
    });
    this.companyDetailService.
    getJobDetails(this.router.snapshot.params['job_id']).subscribe((data:any) => {
      if (data) {
        this.jobdata = data.jobs;
      }
      console.log(this.jobdata)
         });
         this.userData = JSON.parse(
          localStorage.getItem("rememberMe") === "true"
            ? localStorage.getItem("user")
            : (sessionStorage.getItem("user") as any)
           
        );
        // this.userForm.patchValue(this.userData);
  }
}


