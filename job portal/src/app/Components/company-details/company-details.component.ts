import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfigService } from 'src/app/config.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  userForm!: FormGroup;
  allData: any;
  alert: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    //private router: Router,
    private notifyService: NotificationService
  ) {}
  numberpattern = "^[0-9]*$";

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Organization: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      middleName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      location: ["", [Validators.required]],
      employees: ["", [Validators.required]],
      Description: ["", [Validators.required]],
      Country:["", [Validators.required]],
      turnover: [ "", [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      employee:[ "", [Validators.required, Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)]]
    });
  }
  get getControl() {
    return this.userForm.controls;
  }
  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const companyDetails = [];
      const tempFormatedData = {
        details: "",
        desc: "",
        noOfEmp: "",
        loc:""
      };
      tempFormatedData.details = formValue.companyDetails;
      tempFormatedData.desc = formValue.descOfCompany
      tempFormatedData.noOfEmp = formValue.noOfEmployees;
      tempFormatedData.loc = formValue.location;

      companyDetails.push(tempFormatedData);
      const finalData = {
        companyDetail: companyDetails,
      };
      this.configService
        .updateUser(localStorage.getItem("ID"), finalData)
        .subscribe(
          (data: any) => {
            console.log(data);
            if (data.status === 200) {
              this.notifyService.showSuccess(data.message);
              //this.router.navigateByUrl("/certificate");
              this.userForm.reset();
            } else {
              this.notifyService.showError(data.message);
            }
          },
          (error) => {
            this.notifyService.showError(error.message);
          }
        );
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }
  closeAlert() {
    this.alert = false;
  }
}

