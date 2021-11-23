import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
import { CommonService } from "src/app/services/common.service";
@Component({
  selector: "app-rollprofile",
  templateUrl: "./rollprofile.component.html",
  styleUrls: ["./rollprofile.component.scss"],
})
export class RollprofileComponent implements OnInit {
  userForm!: FormGroup;
  percentageList = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  userId: string | undefined;

  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      roleManagement: this.formBuilder.group({
        isManagement: ["", Validators.required],
        management: [""],
        portfolio: [""],
        account: [""],
        project: [""],
      }),

      roleTechnical: this.formBuilder.group({
        isTechnical: ["", Validators.required],
        technical: [""],
        architect: [""],
        techLead: [""],
        developer: [""],
      }),

      roleFunctional: this.formBuilder.group({
        isFuncational: ["", Validators.required],
        functional: [""],
        sme: [""],
        leadCon: [""],
        consultant: [""],
      }),
    });
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userId = userData._id;
    this.userForm.patchValue(userData);
  }

  onChecked(type: string) {
    if (this.userForm.get("roleManagement.isManagement")!.value) {
      this.userForm
        .get("roleManagement.management")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleManagement.portfolio")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleManagement.account")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleManagement.project")
        ?.setValidators([Validators.required]);
      this.userForm.get("roleManagement")!.updateValueAndValidity();
    } else {
      this.userForm.get("roleManagement.management")?.reset();
      this.userForm.get("roleManagement.portfolio")?.reset();
      this.userForm.get("roleManagement.account")?.reset();
      this.userForm.get("roleManagement.project")?.reset();
      this.userForm.get("roleManagement")!.updateValueAndValidity();
    }
    if (this.userForm.get("roleTechnical.isTechnical")!.value) {
      this.userForm
        .get("roleTechnical.technical")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleTechnical.architect")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleTechnical.techLead")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleTechnical.developer")
        ?.setValidators([Validators.required]);
      this.userForm.get("roleTechnical")!.updateValueAndValidity();
    } else {
      this.userForm.get("roleTechnical.technical")?.reset();
      this.userForm.get("roleTechnical.architect")?.reset();
      this.userForm.get("roleTechnical.techLead")?.reset();
      this.userForm.get("roleTechnical.developer")?.reset();
      this.userForm.get("roleTechnical")!.updateValueAndValidity();
    }
    if (this.userForm.get("roleFunctional.isFuncational")!.value) {
      this.userForm
        .get("roleFunctional.functional")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleFunctional.sme")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleFunctional.leadCon")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleFunctional.consultant")
        ?.setValidators([Validators.required]);
      this.userForm.get("roleFunctional")!.updateValueAndValidity();
    } else {
      this.userForm.get("roleFunctional.functional")?.reset();
      this.userForm.get("roleFunctional.sme")?.reset();
      this.userForm.get("roleFunctional.leadCon")?.reset();
      this.userForm.get("roleFunctional.consultant")?.reset();
      this.userForm.get("roleFunctional")!.updateValueAndValidity();
    }
    this.userForm.get("roleTechnical")?.enable();
    this.userForm.get("roleFunctional")?.enable();
    this.userForm.get("roleManagement")?.enable();
  }
  onManagementChnage(value: string, type: string) {
    if (type === "management") {
      if (value === "100") {
        this.userForm.get("roleTechnical")?.disable();
        this.userForm.get("roleFunctional")?.disable();
      } else {
        this.userForm.get("roleTechnical")?.enable();
        this.userForm.get("roleFunctional")?.enable();
      }
      this.userForm.get("roleTechnical")?.updateValueAndValidity();
      this.userForm.get("roleFunctional")?.updateValueAndValidity();
    }

    if (type === "technical") {
      if (value === "100") {
        this.userForm.get("roleManagement")?.disable();
        this.userForm.get("roleFunctional")?.disable();
      } else {
        this.userForm.get("roleManagement")?.enable();
        this.userForm.get("roleFunctional")?.enable();
      }
      this.userForm.get("roleManagement")?.updateValueAndValidity();
      this.userForm.get("roleFunctional")?.updateValueAndValidity();
    }
    if (type === "functional") {
      if (value === "100") {
        this.userForm.get("roleTechnical")?.disable();
        this.userForm.get("roleManagement")?.disable();
      } else {
        this.userForm.get("roleTechnical")?.enable();
        this.userForm.get("roleManagement")?.enable();
      }
      this.userForm.get("roleTechnical")?.updateValueAndValidity();
      this.userForm.get("roleManagement")?.updateValueAndValidity();
    }
  }

  getTotalPercentage() {
    if (
      Number(this.userForm.get("roleManagement.management")!.value) +
        Number(this.userForm.get("roleTechnical.technical")!.value) >
        100 ||
      Number(this.userForm.get("roleManagement.management")!.value) +
        Number(this.userForm.get("roleFunctional.functional")!.value) >
        100 ||
      Number(this.userForm.get("roleTechnical.technical")!.value) +
        Number(this.userForm.get("roleFunctional.functional")!.value) >
        100
    ) {
      return true;
    } else {
      return false;
    }
  }

  getTotalOfManagement() {
    if (
      Number(this.userForm.get("roleManagement.portfolio")!.value) +
        Number(this.userForm.get("roleManagement.account")!.value) +
        Number(this.userForm.get("roleManagement.project")!.value) >
      100
    ) {
      return true;
    } else {
      return false;
    }
  }
  getTotalOfTechnical() {
    if (
      Number(this.userForm.get("roleTechnical.architect")!.value) +
        Number(this.userForm.get("roleTechnical.techLead")!.value) +
        Number(this.userForm.get("roleTechnical.developer")!.value) >
      100
    ) {
      return true;
    } else {
      return false;
    }
  }
  getTotalOfFuncaional() {
    if (
      Number(this.userForm.get("roleFunctional.sme")!.value) +
        Number(this.userForm.get("roleFunctional.leadCon")!.value) +
        Number(this.userForm.get("roleFunctional.consultant")!.value) >
      100
    ) {
      return true;
    } else {
      return false;
    }
  }

  getDisabled() {
    console.log()
    return (
      this.getTotalOfFuncaional() ||
      this.getTotalOfTechnical() ||
      this.getTotalOfManagement() ||
      this.getTotalPercentage()
    );
  }

  onClick(formValue: any, isValid: boolean) {
    console.log(this.userForm.value);
    if (isValid) {
      // const roleManagement = {
      //   management: formValue.managment,
      //   portfolio: formValue.PortfolioManagement,
      //   account: formValue.AccountManagement,
      //   project: formValue.ProjectManagement,
      // };
      // const roleTechnical = {
      //   technical: formValue.technical,
      //   architect: formValue.Architect,
      //   techLead: formValue.TechLead,
      //   developer: formValue.developer,
      // };
      // const roleFunctional = {
      //   functional: formValue.functional,
      //   sme: formValue.sme,
      //   leadCon: formValue.leadcon,
      //   consultant: formValue.consultant,
      // };
      // const finalData = {
      //   roleManagement: roleManagement,
      //   roleTechnical: roleTechnical,
      //   roleFunctional: roleFunctional,
      // };
      (formValue.createdBy = this.userId), console.log("finalData", formValue);
      this.configService
        .updateUser(this.userId, formValue)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.profile))
              : sessionStorage.setItem("user", JSON.stringify(data.profile));
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile/skills");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
