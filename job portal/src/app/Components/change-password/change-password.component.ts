import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { valHooks } from "jquery";
import { CommonService } from "src/app/services/common.service";
import { SigninService } from "src/app/signin.service";

export interface ChangePassword {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup = this.fb.group({
    currentPassword: ["", Validators.compose([Validators.required])],
    password: ["", Validators.compose([Validators.required])],
    confirmPassword: ["", Validators.compose([Validators.required])],
  });
  constructor(
    private fb: FormBuilder,
    private signInService: SigninService,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmitForm(isValid: boolean, value: ChangePassword) {
    if (isValid) {
      const id =
        localStorage.getItem("rememberMe") === "true"
          ? JSON.parse(localStorage.getItem("user") as any)._id
          : JSON.parse(sessionStorage.getItem("user") as any)._id;
      const request = {
        currentPassword: this.commonService.encrypt(value.currentPassword),
        password: this.commonService.encrypt(value.password),
      };
      this.signInService.changePassword(id, request).subscribe((response) => {
        if (response) {
          this.commonService.alert("success", response.message);
          sessionStorage.clear();
          localStorage.clear();
          this.router.navigate([""], { replaceUrl: true });
        }
      });
    } else {
      this.changePasswordForm.markAllAsTouched();
    }
  }
}
