import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { CommonService } from "src/app/services/common.service";
@Component({
  selector: "app-edu-details",
  templateUrl: "./edu-details.component.html",
  styleUrls: ["./edu-details.component.scss"],
})
export class EduDetailsComponent implements OnInit {
  userForm!: FormGroup;

  years = ([] = this.generateArrayOfYears());
  months = ([] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  userId: string | undefined;
  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {
    this.userForm = this.formBuilder.group({
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
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userForm.patchValue(userData.educationalDetails[0]);
  }

  get f() {
    return this.userForm.controls["educationalDetails"] as FormGroup;
  }

  ngOnInit(): void {
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userId = userData._id;
    this.userForm.patchValue(userData);
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const educationDetails = [];
      educationDetails.push(formValue);
      const finalData = {
        educationalDetails: educationDetails,
        createdBy: this.userId,
      };
      this.configService
        .updateUser(this.userId, finalData)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.profile))
              : sessionStorage.setItem("user", JSON.stringify(data.profile));
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile/certificates");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
  generateArrayOfYears() {
    const max = new Date().getFullYear();
    const min = 1900;
    const years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }
}
