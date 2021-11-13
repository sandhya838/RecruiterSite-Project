import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonService } from "src/app/services/common.service";
import { SigninService } from "src/app/signin.service";
import { User } from "src/app/user";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  alert: boolean = false;
  signIn: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
    rememberMe: [false],
  });
  isPassword = false;

  constructor(
    public formBuilder: FormBuilder,
    private signService: SigninService,
    private commonService: CommonService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  get getControl() {
    return this.signIn.controls;
  }

  loginSubmit() {
    if (this.signIn.valid) {
      this.signService
        .login({
          email: this.signIn.value.email,
          password: this.commonService.encrypt(this.signIn.value.password),
        })
        .subscribe(
          (response: any) => {
            if (response.status === 200) {
              localStorage.clear();
              sessionStorage.clear();
              if (this.signIn.value.rememberMe) {
                localStorage.setItem("rememberMe", "true");
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", JSON.stringify(response.user));
              } else {
                sessionStorage.setItem("token", response.token);
                sessionStorage.setItem("user", JSON.stringify(response.user));
              }
              this.router.navigate(["/dashboard"]);
            } else if (response.status === 400) {
              this.commonService.alert("error", response.message);
            } else {
              this.commonService.alert("error", response.message);
            }
          },
          (err) => {
            this.commonService.alert("error", err.statusText);
          }
        );
    } else {
      this.signIn.markAllAsTouched();
    }
  }

  closeAlert() {
    this.alert = false;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }
}
