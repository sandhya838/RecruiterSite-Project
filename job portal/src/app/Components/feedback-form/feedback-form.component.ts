import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
    private activeRoute: ActivatedRoute
  ) {
    this.ratingnum3 = 0;
  }

  getSkillsAndRating() {
    console.log("this.userProfile", this.userProfile);
    if (this.userProfile) {
      this.userProfile?.skills?.primary.forEach(
        (element: any, index: number) => {
          console.log("element", element, index);
        }
      );
    }
    return this.formBuilder.group({
      degree: ["", [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      institute: [
        "",
        [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)],
      ],
      country: ["", [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      grade: ["", [Validators.required]],
      yearofPassing: this.formBuilder.group({
        month: ["", [Validators.required]],
        year: ["", [Validators.required]],
      }),
    });
  }

  ngOnInit(): void {
    this.userprofileService
      .getUserDetails(this.router.url.split('/').pop() as string)
      .subscribe((result) => {
        if (result.profile) {
          this.userProfile = result.profile;
          console.log('result.profile',result.profile);
          this.fullName =
            this.userProfile.firstName + " " + this.userProfile.lastName;
        }
      });
    this.feedBackForm = this.formBuilder.group({
      skillsAndRating: this.getSkillsAndRating(),
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
      candidateName: ['', [Validators.required]],
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
    this.feedBackForm.get('candidateName')?.setValue(this.fullName);
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
