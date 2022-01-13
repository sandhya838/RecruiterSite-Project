import { Component, OnInit, ViewChild } from "@angular/core";
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
  ratingDisplay: number | undefined;
  headElements = ["Candidate name", " ", "Interviwer name", " "];
  feedBackForm!: FormGroup;
  userProfile: any;
  profile: any;
  fullName: any;

  primarySkill1Rating: string | undefined;
  ratingnum3: number;
  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private router: Router,
    private userprofileService: UserprofileService,
    private fb: FormBuilder
  ) {
    this.ratingnum3 = 0;
  }

  ngOnInit(): void {
    const userProifleData = JSON.parse(sessionStorage.getItem("user") as any);
    this.feedBackForm = this.formBuilder.group({
      primarySkillRating1: ["", [Validators.required]],
      primarySkillRating2: ["", [Validators.required]],
      primarySkillRating3: ["", [Validators.required]],
      primarySkillRating4: ["", [Validators.required]],
      secondarySkillRating1: ["", [Validators.required]],
      secondarySkillRating2: ["", [Validators.required]],
      secondarySkillRating3: ["", [Validators.required]],
      secondarySkillRating4: ["", [Validators.required]],
      consultantRating: ["", [Validators.required]],
      techLeadRating: ["", [Validators.required]],
      architectRating: ["", [Validators.required]],
      communicationSkillRating: ["", [Validators.required]],
      presentationSkillRating: ["", [Validators.required]],
      motivationSkillRating: ["", [Validators.required]],
      flexibilitySkillRating: ["", [Validators.required]],
      professionalSkillRating: ["", [Validators.required]],
      candidateName: ["", [Validators.required]],
      interviewerName: ["", [Validators.required]],
      candidateID: ["", [Validators.required]],
      priamrySkillComments: [""],
      secondarySkillComments: [""],
      primarySkill1: [""],
      secondarySkill1: [""],
      secondarySkill2: [""],
      secondarySkill3: [""],
      secondarySkill4: [""],
      primarySkill4: [""],
      primarySkill2: [""],
      primarySkill3: [""],
      summary: [""],
      management: [""],
      technical: [""],
      functional: [""],
    });
    this.profile = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );

    this.feedBackForm.patchValue(this.profile);
    console.log("bindedData", this.profile);

    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userprofileService
      .getUserDetails(userData?._id)
      .subscribe((result) => {
        if (result.profile.length) {
          this.userProfile = result.profile;
        }
        console.log(result);
        this.fullName = this.profile.firstName + " " + this.profile.lastName;
      });
  }

  makeActiveTill(event: any) {
    this.primarySkill1Rating = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }
  makeSelected(value: number) {
    return value <= 5;
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      console.log("Feedback value:", formValue);
    } else {
      this.feedBackForm.markAllAsTouched();
      this.feedBackForm.updateValueAndValidity();
    }
  }
}
