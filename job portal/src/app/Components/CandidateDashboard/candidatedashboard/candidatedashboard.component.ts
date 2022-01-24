import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/helper/constants';
import { UserprofileService } from 'src/app/services/userprofile.service';

@Component({
  selector: 'app-candidatedashboard',
  templateUrl: './candidatedashboard.component.html',
  styleUrls: ['./candidatedashboard.component.scss']
})
export class CandidatedashboardComponent implements OnInit {
  APIURL= CONSTANTS.BASEURL;
  userProfile:any;
  profile:any;
  constructor(private userprofileService: UserprofileService) { }

  ngOnInit(): void {
    const userProifleData = JSON.parse(sessionStorage.getItem("user") as any);
    console.log("userProifleData", requestHeader);
    this.profile=userProifleData;
    console.log("bindedData",this.profile);
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userprofileService. getUserDetails(userData?._id).subscribe((result) => {
      if (result.profile.length) {
        this.userProfile = result.profile;
 
      }
      console.log(result);
    });
  }

}
function requestHeader(arg0: string, requestHeader: any) {
  throw new Error('Function not implemented.');
}

