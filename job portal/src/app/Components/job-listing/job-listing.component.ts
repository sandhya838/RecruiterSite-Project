import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent implements OnInit {
  createjob: any;

  constructor(private jobservice:JobsService) { }

  ngOnInit(): void {
    const createJobs= JSON.parse(sessionStorage.getItem("user") as any);
    const requestHeader ={
      companyName:createJobs?.companyName,
      location:createJobs?.location,
      primary:createJobs?. primary,
     secondary:createJobs?.secondary,
     experiance:createJobs?.secondary,
     role:createJobs?.secondary,
    };

   
      

  }
 

}
function requestHeader(requestHeader: any) {
  throw new Error('Function not implemented.');
}

function id(id: any) {
  throw new Error('Function not implemented.');
}

