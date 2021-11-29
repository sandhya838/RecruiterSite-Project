import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationSignInService } from 'src/app/services/organization-sign-in.service';
import {CommonService} from 'src/app/services/common.service';

@Component({
  selector: 'app-organization-sign-up',
  templateUrl: './organization-sign-up.component.html',
  styleUrls: ['./organization-sign-up.component.scss']
})
export class OrganizationSignUpComponent implements OnInit {

  alert: boolean = false;
  signUp: FormGroup = this.formBuilder.group({
    organizationName: ["", [Validators.required]],
    firstname: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    contactNumber: ["", [Validators.required]],
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });
 
  isPassword:boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private organizationSignInService: OrganizationSignInService,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get getControl() {
    return this.signUp.controls;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }

  onSubmitForm(isValid: boolean, formValue: any) {
    if (isValid) {
      let fd = new FormData();
      fd.append("organizationName", formValue.organizationName);
      fd.append("firstname", formValue.firstname);
      fd.append("lastname", formValue.lastname);
      fd.append("contactNumber", formValue.contactNumber);
      fd.append("email", formValue.email);
      fd.append("password", this.commonService.encrypt(formValue.password));
     
      console.log("formValue", fd);
      this.organizationSignInService.register(fd).subscribe(
        (response: any) => {
          if (response.status === 200) {
            this.router.navigate(["/organization-sign-in"]);
            this.commonService.alert("success", response.message);
          } else {
            this.commonService.alert("error", response.message);
          }
        },error=> {
          console.log(error);
        }
      );
    } else {
      this.signUp.markAllAsTouched();
    }
  }
 

  
  
}


