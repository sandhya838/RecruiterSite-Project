import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfigService } from 'src/app/config.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {

  userForm!: FormGroup;
  allData: any;
  alert: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    //private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      companyName: ["", [Validators.required]],
      companyIntro: ["", [Validators.required]],
      typeOfJob: ["", [Validators.required]],
      role: ["", [Validators.required]],
      locpref: ["", [Validators.required]],
    });
  }
  get getControl() {
    return this.userForm.controls;
  }
  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const companyName = [];
      const tempFormatedData = {
        compname: "",
        compintro: "",
        typeofjob: "",
        rol:"",
        loc:""
      };
      tempFormatedData.compname = formValue.companyName;
      tempFormatedData.compintro = formValue.companyIntro;
      tempFormatedData.typeofjob = formValue.typeOfJob;
      tempFormatedData.typeofjob = formValue. role;
      tempFormatedData.loc = formValue.locpref;

      companyName.push(tempFormatedData);
      const finalData = {
        jobpsting: companyName,
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