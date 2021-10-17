import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";

@Component({
  selector: "app-work-experiance",
  templateUrl: "./work-experiance.component.html",
  styleUrls: ["./work-experiance.component.scss"],
})
export class WorkExperianceComponent implements OnInit {
  userForm!: FormGroup;
  alert: boolean = false;
  allData: any;

  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      designation: ["", [Validators.required]],
      joinmonth: ["", [Validators.required]],
      joinyear: ["", [Validators.required]],
      jointomonth: ["", [Validators.required]],
      jointoyear: ["", [Validators.required]],
      skill1: ["", [Validators.required]],
      skill2: ["", [Validators.required]],
      skill3: ["", [Validators.required]],
      skill4: ["", [Validators.required]],
      role: ["", [Validators.required]],
      deliverables: ["", [Validators.required]],
    });
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const skills: string[] = [];
      const workExperiences={
        //company: formValue.,
        from: formValue.joinmonth+ '/'+ formValue.joinyear,
        to: formValue.jointomonth+ '/'+ formValue.jointoyear,
        desgination: formValue.designation,
        deliverables: formValue.deliverables,
        role: formValue.role,
        skills: skills
      };
      workExperiences.skills = [];
      workExperiences.skills.push(formValue.skill1);
      workExperiences.skills.push(formValue.skill2);
      workExperiences.skills.push(formValue.skill3);
      workExperiences.skills.push(formValue.skill4);

      const tempData=[];
      tempData.push(workExperiences);
      const finalData = {
        workExperiences: tempData
      };

      console.log("finalData", finalData);
      this.configService
        .updateUser(localStorage.getItem("ID"), finalData)
        .subscribe(
          (data: any) => {
            console.log(data);
            if (data.status === 200) {
              this.notifyService.showSuccess(data.message);
              this.router.navigateByUrl("/education-details");
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
