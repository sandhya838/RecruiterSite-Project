import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/notification.service";
import { UserprofileService } from "src/app/services/userprofile.service";

@Component({
  selector: "app-feedback-form",
  templateUrl: "./feedback-form.component.html",
  styleUrls: ["./feedback-form.component.scss"],
})
export class FeedbackFormComponent implements OnInit {
  headElements = ["Candidate name", " ", "Interviwer name", " "];
  feedBackForm!: FormGroup;
  userProfile: any;
  profile: any;
  primarySkill1Rating: string | undefined;
  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private router: Router,
    private userprofileService: UserprofileService
  ) {}

  ngOnInit(): void {
    const userProifleData = JSON.parse(sessionStorage.getItem("user") as any);
    

    this.feedBackForm = this.formBuilder.group({
      candidateName: ["", [Validators.required]],
      interviewerName: ["", [Validators.required]],
      candidateID: ["", [Validators.required]],
      priamrySkillComments: [""],
      secondarySkillComments: [""],
      primarySkill: ["", [Validators.required]],
      secondarySkill: ["", [Validators.required]],
      primaryskill1:[""],
      primaryskill2:[],
      primaryskill3:[],
      // roleProfile: this.formBuilder.group({
      //   management: ["", [Validators.required]],
      //   technical: ["", [Validators.required]],
      //   functional: ["", [Validators.required]],
      // }),
    });
     this.profile = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );

    this.feedBackForm.patchValue(this.profile);
    console.log("bindedData", this.profile);
  }
  makeActiveTill(event:any){
    this.primarySkill1Rating=(<HTMLInputElement>event.target).value;
console.log((<HTMLInputElement>event.target).value);

  }
  makeSelected(value:number){
    return value<=5;
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      console.log("Feedback value:", formValue);
    }
    else {
      this.feedBackForm.markAllAsTouched();
      this.feedBackForm.updateValueAndValidity();
    }
  }
}
