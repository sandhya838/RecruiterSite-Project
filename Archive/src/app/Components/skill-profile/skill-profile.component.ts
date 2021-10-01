import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";

@Component({
  selector: "app-skill-profile",
  templateUrl: "./skill-profile.component.html",
  styleUrls: ["./skill-profile.component.scss"],
})
export class SkillProfileComponent implements OnInit {
  userForm!: FormGroup;
  alert: boolean = false;
  allData: any;
  multiselect: any;
  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      tech3: ["", [Validators.required]],
      tech: ["", [Validators.required]],
      tech1: ["", [Validators.required]],
      tech2: ["", [Validators.required]],
      functional: ["", [Validators.required]],
      functional1: ["", [Validators.required]],
      functional2: ["", [Validators.required]],
      functional3: ["", [Validators.required]],
      sys: ["", [Validators.required]],
      sys1: ["", [Validators.required]],
      sys2: ["", [Validators.required]],
      sys3: ["", [Validators.required]],
    });
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    console.log(this.userForm.value);

    if (isValid) {
      const skillSysAdministration = {
        sys: formValue.sys,
        sys1: formValue.sys1,
        sys2: formValue.sys2,
        sys3: formValue.sys3,
      };
      const skillTechnical = {
        tech3: formValue.tech3,
        tech1: formValue.tech1,
        tech2: formValue.tech2,
        tech: formValue.tech,
      };
      const skillFunctional = {
        functional: formValue.functional,
        functional1: formValue.functional1,
        functiona2: formValue.functiona2,
        functional3: formValue.functional3,
      };
      const finalData = {
        skillSysAdministration: skillSysAdministration,
        skillTechnical: skillTechnical,
        skillFunctional: skillFunctional,
      };
      console.log("finalData", finalData);
      this.configService
        .updateUser(localStorage.getItem("ID"), finalData)
        .subscribe(
          (data: any) => {
            console.log(data);
            if (data.status === 200) {
              this.notifyService.showSuccess(data.message);
              this.router.navigateByUrl("/work-experience");
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
