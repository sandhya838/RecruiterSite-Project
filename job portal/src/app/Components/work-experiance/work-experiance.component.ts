import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { CONSTANTS } from "src/app/constants";
import { NotificationService } from "src/app/notification.service";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-work-experiance",
  templateUrl: "./work-experiance.component.html",
  styleUrls: ["./work-experiance.component.scss"],
})
export class WorkExperianceComponent implements OnInit {
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
  dropdownSettings = {
    singleSelection: false,
    idField: "name",
    textField: "name",
    itemsShowLimit: 2,
    limitSelection: 4,
    allowSearchFilter: true,
  };
  skills = CONSTANTS.SKILLS;
  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      companyName: [
        "",
        [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)],
      ],
      designation: [
        "",
        [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)],
      ],
      joinmonth: ["", [Validators.required]],
      joinyear: ["", [Validators.required]],
      jointomonth: ["", [Validators.required]],
      jointoyear: ["", [Validators.required]],
      skills: ["", [Validators.required]],
      role: ["", [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      deliverables: ["", [Validators.required]],
    });
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userId = userData._id;
    const experianceData = userData.workExperiences[0];
    experianceData.joinmonth = experianceData.from.split("/")[0].trim();
    experianceData.joinyear = experianceData.from.split("/")[1].trim();
    experianceData.jointomonth = experianceData.from.split("/")[0].trim();
    experianceData.jointoyear = experianceData.from.split("/")[1].trim();
    this.userForm.patchValue(experianceData);
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const workExperiences = {
        from: formValue.joinmonth + " / " + formValue.joinyear,
        to: formValue.jointomonth + " / " + formValue.jointoyear,
        desgination: formValue.designation,
        deliverables: formValue.deliverables,
        role: formValue.role,
        skills: formValue.skills,
        companyName: formValue.companyName,
      };
      const tempData = [];
      tempData.push(workExperiences);
      const finalData = {
        workExperiences: tempData,
        updatedBy: this.userId,
      };

      this.configService
        .updateUser(this.userId, finalData)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.profile))
              : sessionStorage.setItem("user", JSON.stringify(data.profile));
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile/education-details");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
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
