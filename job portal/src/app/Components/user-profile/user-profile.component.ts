import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
// import { getDiffieHellman } from 'crypto';
import { data } from "jquery";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  alert: boolean = false;
  userForm!: FormGroup;
  allData: any;
  currentUserData = null;
  userId: string | undefined;
  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}

  pattern = "^[ a-zA-Z]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      firstName: ["", [Validators.required, Validators.pattern(this.pattern)]],
      middleName: [""],
      lastName: ["", [Validators.required, Validators.pattern(this.pattern)]],
      countryOfLiving: ["", [Validators.required]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      nationality: ["", [Validators.required]],
      currentNationality: ["", [Validators.required]],
      previousNationality: ["", [Validators.required]],
    });
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
      formValue.createdBy= this.userId;
      this.configService
        .updateUser(this.userId, formValue)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.profile))
              : sessionStorage.setItem("user", JSON.stringify(data.profile));
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile/experience");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }

  closeAlert() {
    this.alert = false;
  }
}
