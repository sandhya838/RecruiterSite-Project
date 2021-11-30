import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      companyName: ["", [Validators.required]],
      companyIntro: ["", [Validators.required]],
      typeOfJob: ["", [Validators.required]],
      role: ["", [Validators.required]],
      locationpreference: ["", [Validators.required]],
      skills: ["", [Validators.required]],
      management: ["", [Validators.required]],
      technical: ["", [Validators.required]],
      functional: ["", [Validators.required]],


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
      itemsShowLimit: this.viewPort ? 3 : 2,
      limitSelection: 3,
      allowSearchFilter: true,
    };



  }
  get getControl() {
    return this.userForm.controls;
  }
  onClick(formValue: any, isValid: boolean) {

    if (isValid) {
      const tempFormattedData = {
        companyName: "",
        companyIntro: "",
        roleProfile: { management: "", technical: "", functional: "" },
        typeOfJob: "",
        role: "",
        locationpreference: "",
        skills: "",
        orgnizationId: "",
        createdBy: "",

      }
      tempFormattedData.companyName = formValue.companyName;
      tempFormattedData.companyIntro = formValue.companyIntro;
      tempFormattedData.typeOfJob = formValue.typeOfJob;
      tempFormattedData.role = formValue.role;
      tempFormattedData.locationpreference = formValue.locationpreference;
      tempFormattedData.skills = formValue.skills;
      tempFormattedData.roleProfile.management = formValue.management;
      tempFormattedData.roleProfile.technical = formValue.technical;
      tempFormattedData.roleProfile.functional = formValue.functional;

      const userData = JSON.parse(
        localStorage.getItem("rememberMe") === "true"
          ? localStorage.getItem("user")
          : (sessionStorage.getItem("user") as any)
      );
      tempFormattedData.orgnizationId = userData._id;
      tempFormattedData.createdBy = userData._id;
      this.jobs.createJobs(tempFormattedData)
        .subscribe(
          (data: any) => {
            if (data.status === 200) {
              this.notifyService.showSuccess(data.message);
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