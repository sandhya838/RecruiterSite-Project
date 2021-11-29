import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/constants';
import { UserprofileService } from 'src/app/services/userprofile.service';

@Component({
  selector: 'app-candidate-profile-summary',
  templateUrl: './candidate-profile-summary.component.html',
  styleUrls: ['./candidate-profile-summary.component.scss']
})
export class CandidateProfileSummaryComponent implements OnInit {
  APIURL= CONSTANTS.BASEURL;
  userProfile:any;
  profile:any;
  constructor(private userprofileService: UserprofileService) { }

  ngOnInit(): void {
    const userProifleData = JSON.parse(sessionStorage.getItem("user") as any);
    const requestHeader ={
      title:userProifleData?.title,
      location:userProifleData?.location,
      skills:userProifleData?.skills,
      email:userProifleData?.email,
      mobileNumber:userProifleData?.mobileNumber,
      resume:userProifleData?.resume,
      firstName:userProifleData?.firstName,
      lastName:userProifleData?.lastName,
      middleName:userProifleData?.middleName,
    };

    console.log("userProifleData", requestHeader);
    this.profile=userProifleData;
    console.log("bindedData",this.profile);
    // console.log(userProifleData.firstName,userProifleData.lastName,userProifleData.middleName );
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
