import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { CONSTANTS } from "src/app/constants";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-work-experiance",
  templateUrl: "./work-experiance.component.html",
  styleUrls: ["./work-experiance.component.scss"],
})
export class WorkExperianceComponent implements OnInit {
  userForm!: FormGroup;
  years = ([] = this.generateArrayOfYears());
  viewPort = true;
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
  dropdownSettings = {};
  skills = CONSTANTS.SKILLS;
  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.viewPort = window.innerWidth > 991 ? true : false;
    this.userForm = this.formBuilder.group({
      workExperiences: this.formBuilder.array([this.inililzeForm()]),
    });
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userId = userData._id;
    this.updateValueInForm(userData);
    this.dropdownSettings = {
      singleSelection: false,
      idField: "name",
      textField: "name",
      itemsShowLimit: this.viewPort ? 4 : 1,
      limitSelection: 4,
      allowSearchFilter: true,
    };
  }

  updateValueInForm(userData: any) {
    console.log("adfdsfsdfs", userData);
    for (const item of userData.workExperiences) {
      item.joinmonth = item?.from?.split("/")[0].trim();
      item.joinyear = item?.from?.split("/")[1].trim();
      item.jointomonth = item?.to?.split("/")[0].trim();
      item.jointoyear = item?.to?.split("/")[1].trim();
      this.addMore();
    }
    this.remoreForm(userData.workExperiences);
    this.userForm.patchValue(userData);
  }

  inililzeForm() {
    return this.formBuilder.group({
      isCurrentCompany: [""],
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
  }
  get workExperiencesFormArray() {
    return this.userForm.get("workExperiences") as FormArray;
  }
  getValidity(index: number) {
    return (<FormArray>this.userForm.get("workExperiences")).controls[
      index
    ] as FormControl;
  }
  addMore() {
    const formarr = this.userForm.get("workExperiences") as FormArray;
    formarr.push(this.inililzeForm());
  }
  remoreForm(index: number) {
    const formarr = this.userForm.get("workExperiences") as FormArray;
    formarr.removeAt(index);
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      for (const item of formValue?.workExperiences) {
        item["to"] = item.jointomonth + " / " + item.jointoyear;
        item["from"] = item.joinmonth + " / " + item.joinyear;
      }
      const finalData = {
        workExperiences: formValue?.workExperiences,
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
