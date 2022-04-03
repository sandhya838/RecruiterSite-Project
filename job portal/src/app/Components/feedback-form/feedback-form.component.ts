import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
import { CommonService } from "src/app/services/common.service";
import { UserprofileService } from "src/app/services/userprofile.service";

@Component({
  selector: "app-feedback-form",
  templateUrl: "./feedback-form.component.html",
  styleUrls: ["./feedback-form.component.scss"],
})
export class FeedbackFormComponent implements OnInit {
  ratingDisplay: number | undefined;
  feedBackForm: FormGroup = this.formBuilder.group({
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
    interviewerID: ["", [Validators.required]],
    priamrySkillComments: [""],
    secondarySkillComments: [""],
    summary: [""],
    management: [""],
    technical: [""],
    functional: [""],
  });
  userProfile: any;
  fullName: any;

  constructor(
    public formBuilder: FormBuilder,
    private userprofileService: UserprofileService,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}

  getSkillsAndRating(userProfile: any) {
    if (userProfile) {
      userProfile?.skillTechnical.forEach((element: any, index: number) => {
        (this.feedBackForm as FormGroup).addControl(
          "primarySkillRating" + (index + 1),
          new FormControl("", Validators.required)
        );

        this.feedBackForm.addControl(
          "primarySkill" + (index + 1),
          new FormControl(element.name, Validators.required)
        );
      });
      userProfile?.skillFunctional.forEach((element: any, index: number) => {
        (this.feedBackForm as FormGroup).addControl(
          "secondarySkillRating" + (index + 1),
          new FormControl("", Validators.required)
        );
        this.feedBackForm.addControl(
          "secondarySkill" + (index + 1),
          new FormControl(element.name, Validators.required)
        );
      });
    }
  }

  ngOnInit(): void {
    this.userprofileService
      .getUserDetails(this.router.url.split("/").pop() as string)
      .subscribe((result) => {
        if (result.profile) {
          this.userProfile = result.profile;
          this.getSkillsAndRating(this.userProfile);
          this.fullName =
            this.userProfile.firstName + " " + this.userProfile.lastName;
          this.feedBackForm.get("candidateName")?.setValue(this.fullName);
          this.feedBackForm.get("candidateName")?.updateValueAndValidity();
          this.feedBackForm
            .get("candidateID")
            ?.setValue(this.userProfile?.candidateId);
          this.feedBackForm.get("candidateID")?.updateValueAndValidity();
        }
      });
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      this.configService
        .sendFeedback(formValue)
        .subscribe((data: any) => {
          if (data.status === 200) {
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile-summary");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.feedBackForm.markAllAsTouched();
    }
  }
  getControlName(controlName: string, index: number) {
    return controlName + (index + 1);
  }
}
