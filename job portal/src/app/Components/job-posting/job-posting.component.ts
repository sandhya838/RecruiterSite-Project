import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfigService } from 'src/app/config.service';
import { NotificationService } from 'src/app/notification.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {

  userForm!: FormGroup;
  allData: any;
  alert: boolean = false;
  dropdownSettings = {};
  jobType: { id: number; name: string }[] = [];
  viewPort: any;
  roleProfile!: { id: number; name: string; }[];

  constructor(
    public formBuilder: FormBuilder,
    private jobs: JobsService,
    //private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      companyName: ["", [Validators.required]],
      companyIntro: ["", [Validators.required]],
      typeOfJob: ["", [Validators.required]],
      role: ["", [Validators.required]],
      management: ["", [Validators.required]],
      technical: ["", [Validators.required]],
      functional: ["", [Validators.required]],
      locpref: ["", [Validators.required]],
      skills: ["", [Validators.required]],
    });
   
    this.jobType = [
      { id: 1, name: "contract" },
      { id: 2, name: "Permanant" },
      { id: 3, name: "Freelance" },
      
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "name",
      textField: "name",
      itemsShowLimit: this.viewPort ? 3: 2,
      limitSelection: 3,
      allowSearchFilter: true,
    };
    
    this.roleProfile= [
      { id: 1, name: "management" },
      { id: 2, name: "technical" },
      { id: 3, name: "functional" },
     
    ];
  }
  get getControl() {
    return this.userForm.controls;
  }
  onClick(formValue: any, isValid: boolean) {
    console.log(this.userForm.value)
    if (isValid) {
      const companyName = [];
      const tempFormatedData = {
        compname: "",
        compintro: "",
        typeofjob: "",
        rol:"",
        loc:"",
        skill:""
      };
      tempFormatedData.compname = formValue.companyName;
      tempFormatedData.compintro = formValue.companyIntro;
      tempFormatedData.typeofjob = formValue.typeOfJob;
      tempFormatedData.rol = formValue. roleProfile;
      tempFormatedData.loc = formValue.locpref;
      tempFormatedData. skill = formValue.skills;

      companyName.push(tempFormatedData);
      const finalData = {
        jobpsting: companyName,
      };
      this.jobs
        .createJobs(finalData)
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