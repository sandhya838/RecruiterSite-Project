import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  userForm!: FormGroup;
  allData: any;
  alert: boolean = false;

  constructor( public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router) { 
   
  }
  pattern = "^[ a-zA-Z/]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      IT: ["",[Validators.required, Validators.pattern(this.pattern)]],
      filmModelling: ["",[Validators.required, Validators.pattern(this.pattern)]],
      pharma: ["",[Validators.required, Validators.pattern(this.pattern)]]
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
            this.router.navigateByUrl("/dashboard");
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
