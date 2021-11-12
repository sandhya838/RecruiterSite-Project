import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
@Component({
  selector: "app-rollprofile",
  templateUrl: "./rollprofile.component.html",
  styleUrls: ["./rollprofile.component.scss"],
})
export class RollprofileComponent implements OnInit {
  sh: any;
  isChecked: boolean = true;
  userForm!: FormGroup;
  allData: any;
  alert: boolean = false;
  

  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router
  ) {}
  numberPattern = "^[ %0-9_-]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      managment: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      PortfolioManagement: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      AccountManagement: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      ProjectManagement: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      technical: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      Architect: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      TechLead: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      developer: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      functional: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      sme: ["", [Validators.required, Validators.pattern(this.numberPattern)]],
      leadcon: ["",[Validators.required, Validators.pattern(this.numberPattern)]],
      consultant: ["",[Validators.required, Validators.pattern(this.numberPattern)]]
    });
  }
  get getControl() {
    return this.userForm.controls;
  }



  onClick(formValue: any, isValid: boolean) {
    console.log(this.userForm.value);

    // this.allData = JSON.parse(JSON.stringify(this.userForm.value));
    // this.alert = true;

    if (isValid) {
      const roleManagement = {
        management: formValue.managment,
        portfolio: formValue.PortfolioManagement,
        account: formValue.AccountManagement,
        project: formValue.ProjectManagement,
      };
      const roleTechnical = {
        technical: formValue.technical,
        architect: formValue.Architect,
        techLead: formValue.TechLead,
        developer: formValue.developer,
      };
      const roleFunctional = {
        functional: formValue.functional,
        sme: formValue.sme,
        leadCon: formValue.leadcon,
        consultant: formValue.consultant,
      };
      const finalData = {
        roleManagement: roleManagement,
        roleTechnical: roleTechnical,
        roleFunctional: roleFunctional,
      };
      console.log('finalData',finalData)
      this.configService.updateUser(localStorage.getItem("ID"), finalData).subscribe(
        (data: any) => {
          console.log(data);
          if (data.status === 200) {
            this.notifyService.showSuccess(data.message);
            this.router.navigateByUrl("/skills");
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
    // this.userForm.reset({});
  }

  closeAlert() {
    this.alert = false;
  }
  
}
