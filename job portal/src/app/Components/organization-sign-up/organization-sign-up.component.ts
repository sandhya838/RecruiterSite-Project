import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationSignInService } from 'src/app/services/organization-sign-in.service';


@Component({
  selector: 'app-organization-sign-up',
  templateUrl: './organization-sign-up.component.html',
  styleUrls: ['./organization-sign-up.component.scss']
})
export class OrganizationSignUpComponent implements OnInit {

  alert: boolean = false;
  signUp: FormGroup = this.formBuilder.group({
    organizationName: ["", [Validators.required]],
    contactPerson: ["", [Validators.required]],
    email: ["", [Validators.required]],
    contactNumber: ["", [Validators.required]],
  });
  

  constructor(
    public formBuilder: FormBuilder,
    private organizationSignInService: OrganizationSignInService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get getControl() {
    return this.signUp.controls;
  }


  onSubmitForm(isValid: boolean, formValue: any) {
    if (isValid) {
      let fd = new FormData();
      fd.append("organizationName", formValue.organizationName);
      fd.append("contactPerson", formValue.contactPerson);
      fd.append("email", formValue.email);
      fd.append("contactNumber", formValue.contactNumber);
      console.log("formValue", fd);
      this.organizationSignInService.register(fd).subscribe(
        (response: any) => {
          if (response.status === 200) {
            this.router.navigate(["/company-details"]);
          } else {
          }
        },
        (err) => {
          console.log(err.message);
        }
      );
    } else {
      this.signUp.markAllAsTouched();
    }
  }

  closeAlert() {
    this.alert = false;
  }
}

