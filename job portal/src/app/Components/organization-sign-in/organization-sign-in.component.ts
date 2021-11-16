import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { OrganizationSignInService } from 'src/app/services/organization-sign-in.service';

@Component({
  selector: 'app-organization-sign-in',
  templateUrl: './organization-sign-in.component.html',
  styleUrls: ['./organization-sign-in.component.scss']
})
export class OrganizationSignInComponent implements OnInit {

  alert: boolean = false;
  orgsignIn: FormGroup = this.formBuilder.group({
    organizationname: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });
  allData: any;
  credentials: any = {};
  msg = "";
  isPassword = false;
  OrganizationSignInService: any;

  constructor(
    public formBuilder: FormBuilder,
    private organizationSignInService: OrganizationSignInService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  get getControl() {
    return this.orgsignIn.controls;
  }

  loginSubmit() {
    if (this.orgsignIn.valid) {
      this.organizationSignInService.login(this.orgsignIn.value).subscribe(
        (response: any) => {
          if (response.status === 200) {
            sessionStorage.setItem("token", response.token);
            sessionStorage.setItem("user", JSON.stringify(response.user));
            this.router.navigate(["/company-details"]);
          } else {
          }
        },
        (err: { message: any; }) => {
          console.log(err.message);
        }
      );
    } else {
      this.orgsignIn.markAllAsTouched();
    }
    // console.log(this.orgsignIn.value);
    
  }

  closeAlert() {
    this.alert = false;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }
}