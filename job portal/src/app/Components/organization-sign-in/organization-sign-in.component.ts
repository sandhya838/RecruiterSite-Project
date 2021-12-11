import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { CommonService } from 'src/app/services/common.service';
import { OrganizationSignInService } from 'src/app/services/organization-sign-in.service';

@Component({
  selector: 'app-organization-sign-in',
  templateUrl: './organization-sign-in.component.html',
  styleUrls: ['./organization-sign-in.component.scss']
})
export class OrganizationSignInComponent implements OnInit {
 

  alert: boolean = false;
  orgsignIn: FormGroup = this.formBuilder.group({
    email:  [null, [Validators.required]],
    password: ["", [Validators.required]],
    rememberMe: [false],
  });
  


  isPassword = false;

 

  constructor(
    public formBuilder: FormBuilder,
    private organizationSignInService: OrganizationSignInService,
    private router: Router,
    private commonService: CommonService
  ) {}
  ngOnInit(): void {}

  get getControl() {
    return this.orgsignIn.controls;
  }

  loginSubmit() {
    if (this.orgsignIn.valid) {
      this.organizationSignInService
        .login({
          email: this.orgsignIn.value.email,
          password: this.commonService.encrypt(this.orgsignIn.value.password),
        })
        .subscribe((response: any) => {
          if (response.status === 200) {
            localStorage.clear();
            sessionStorage.clear();
            if (this.orgsignIn.value.rememberMe) {
              localStorage.setItem("rememberMe", "true");
              localStorage.setItem("token", response.token);
              localStorage.setItem("user", JSON.stringify(response.user));
            } else {
              sessionStorage.setItem("token", response.token);
              sessionStorage.setItem("user", JSON.stringify(response.user));
            }
            this.router.navigate(["/company-details"]);
          } else if (response.status === 400) {
            this.commonService.alert("error", response.message);
          } else {
            this.commonService.alert("error", response.message);
          }
        });
    } else {
      this.orgsignIn.markAllAsTouched();
    }
    console.log(this.orgsignIn.valid);
  }

  closeAlert() {
    this.alert = false;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }
  forgotpassword(){
    this.router.navigate(['forgot-password']);
  }
}