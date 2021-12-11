import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-experiance",
  templateUrl: "./experiance.component.html",
  styleUrls: ["./experiance.component.scss"],
})
export class ExperianceComponent implements OnInit {
  userForm!: FormGroup;
  userId: string | undefined;
  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}
  pattern = "^[ a-zA-Z;;]*$";
  mixpattern = "^[ a-z0-9_-]*$";
  numberpattern = "^[0-9]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      totalYearsOfExperience: ["", [Validators.required]],
      teamSize: ["", [Validators.required]],
      volumeOfBusinessManged: [ "", [Validators.required, Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],
      ],
      noticePeriod: ["", [Validators.required]],
      salary: ["", [Validators.required]],
      baseSalary: ["", [Validators.required]],
      variableSalary: ["", [Validators.required]],
      otherComponent: ["", [Validators.required]],
      industryServed: ["", [Validators.required]],
    });
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userId = userData._id;
    this.userForm.patchValue(userData);
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      formValue.createdBy = this.userId;
      this.configService
        .updateUser(this.userId, formValue)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.profile))
              : sessionStorage.setItem("user", JSON.stringify(data.profile));
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile/roles");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }
}
