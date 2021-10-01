import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { data } from "jquery";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
import { User } from "src/app/user";
@Component({
  selector: "app-edu-details",
  templateUrl: "./edu-details.component.html",
  styleUrls: ["./edu-details.component.scss"],
})
export class EduDetailsComponent implements OnInit {
  userForm!: FormGroup;
  alert: boolean = false;
  allData: any;
  currentTutorial = null;

  // selectedPolicy: User = {
  //   _id:null,
  //   first_Name: null,
  //   first_Name:null,
  //   middle_Name:null,
  //   lastName:null,
  //   Country:  null,
  //   State:null,
  //     City:null,
  //     Nation:null,
  //     currentNationality:null,
  //     previousNationality:null
  // }

  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
    private notifyService: NotificationService
  ) {}

  pattern = "^[ a-zA-Z]*$";
  mixpattern = "^[ a-z0-9_-]*$";
  numberPattern = "^[ %0-9_-]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      degree: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(this.pattern),
        ],
      ],
      institute: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(this.pattern),
        ],
      ],
      Country: ["", [Validators.required, Validators.pattern(this.pattern)]],
      grade: [
        "",
        [Validators.required, Validators.pattern(this.numberPattern)],
      ],
      month: ["", [Validators.required, Validators.pattern(this.pattern)]],
      year: ["", [Validators.required, Validators.pattern(this.numberPattern)]],
    });
    this.configService.getPost().subscribe((res) => {
      console.log(res);
    });
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    if (this.userForm.valid) {
      const educationDetails = [];
      const tempFormatedData = {
        degree: "",
        Country: "",
        institute: "",
        grade: "",
        yearofPassing: {
          month: "",
          year: "",
        },
      };
      tempFormatedData.degree = formValue.degree;
      tempFormatedData.Country = formValue.Country;
      tempFormatedData.institute = formValue.institute;
      tempFormatedData.grade = formValue.grade;
      tempFormatedData.yearofPassing.month = formValue.month;
      tempFormatedData.yearofPassing.year = formValue.year;
      educationDetails.push(tempFormatedData);
      const finalData = {
        educationalDetails: educationDetails,
      };
      this.configService
        .updateUser(localStorage.getItem("ID"), finalData)
        .subscribe(
          (data: any) => {
            console.log(data);
            if (data.status === 200) {
              this.notifyService.showSuccess(data.message);
              this.router.navigateByUrl("/certificate");
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
    this.userForm.reset({});
  }

  closeAlert() {
    this.alert = false;
  }
}
