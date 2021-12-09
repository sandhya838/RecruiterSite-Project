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
  viewPort: any;
  location!: { id: number; name: string; }[];
  primarySkills: { id: number; name: string }[] = [];
  secondarySkills: { id: number; name: string }[] = [];

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
      typeOfJob: this.formBuilder.group({
        contract: [false],
        permanant: [true, [Validators.required]],
        freelance: [false],
      }),
      role: ["", [Validators.required]],
      location: ["", [Validators.required]],
      primary: ["", [Validators.required]],
      secondary: ["", [Validators.required]],
      roleDescription: ["", [Validators.required]],
      roleProfile: this.formBuilder.group({
        management:["", [Validators.required]],
        technical: ["", [Validators.required]],
        functional:["", [Validators.required]],
      }),
 });


   
    this.location = [
      { id: 1, name: "Mumbai" },
      { id: 2, name: "Pune" },
      { id: 3, name: "Dubai" },
      { id: 4, name: "America" },
      { id: 5, name: "Bangalore " },
      { id: 6, name: "Hyderabad " },
      { id: 7, name: " Delhi - NCR" },
      { id: 8, name: "Chennai " },
      { id: 9, name: "gurgoan" },
      { id: 10, name: "Kolkata" },
    ];
    this.primarySkills = [
      { id: 1, name: "Data analysis" },
      { id: 2, name: "Project management" },
      { id: 3, name: "Software proficiency" },
      { id: 4, name: "Common operating systems" },
      { id: 5, name: "Programming languages" },
      { id: 6, name: "Digital design" },
      { id: 7, name: "Marketing Strategy" },
      { id: 8, name: "Copywriting" },
      { id: 9, name: "Computer Programs & Software" },
      { id: 10, name: "Accounting" },
      { id: 11, name: "Data Analysis" },
      { id: 12, name: "Medicine & Healthcare" },
      { id: 13, name: "Management" },
      { id: 14, name: " Productivity Software to Learn" },
      { id: 15, name: "Medicine & Healthcare" },
      { id: 16, name: "Medicine & Healthcare" },
      { id: 17, name: "Medicine & Healthcare" },
      { id: 18, name: "Medicine & Healthcare" },
    ];
    this.secondarySkills = [
      { id: 1, name: "Data analysis" },
      { id: 2, name: "Project management" },
      { id: 3, name: "Software proficiency" },
      { id: 4, name: "Common operating systems" },
      { id: 5, name: "Programming languages" },
      { id: 6, name: "Digital design" },
      { id: 7, name: "Marketing Strategy" },
      { id: 8, name: "Copywriting" },
      { id: 9, name: "Computer Programs & Software" },
      { id: 10, name: "Accounting" },
      { id: 11, name: "Data Analysis" },
      { id: 12, name: "Medicine & Healthcare" },
      { id: 13, name: "Management" },
      { id: 14, name: " Productivity Software to Learn" },
      { id: 15, name: "Medicine & Healthcare" },
      { id: 16, name: "Medicine & Healthcare" },
      { id: 17, name: "Medicine & Healthcare" },
      { id: 18, name: "Medicine & Healthcare" },
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
    console.log(formValue);
    
    if (isValid) {
     
     
      
     
      const userData = JSON.parse(
        localStorage.getItem("rememberMe") === "true"
          ? localStorage.getItem("user")
          : (sessionStorage.getItem("user") as any)
      );
      formValue.orgnizationId = userData._id;
      formValue.createdBy = userData._id;
      this.jobs.createJobs(formValue)
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
    console.log();
  }

  closeAlert() {
    this.alert = false;
  }
}