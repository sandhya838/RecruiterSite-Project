import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
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
  allFields: boolean = false;
  onlyManagement: boolean = false;
  onlyTechnical: boolean = false;
  onlyFunctional: boolean = false;
  disabledSubmit: any;

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
        leadConsultant: [""],
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
    this.getTotalofFields();
    if (userData?.roleManagement?.isManagement) {
      this.userForm.get("roleManagement.isManagement")?.setValue(true);
      this.onManagementChange(
        (
          Number(userData?.roleManagement?.portfolio) +
          Number(userData?.roleManagement?.account) +
          Number(userData?.roleManagement?.project)
        ).toString(),
        "management"
      );
      this.userForm.get("roleManagement")?.updateValueAndValidity();
    } else if (userData?.roleTechnical?.isTechnical) {
      this.userForm.get("roleTechnical.isTechnical")?.setValue(true);
      this.onManagementChange(
        (
          Number(userData?.roleTechnical?.architect) +
          Number(userData?.roleTechnical?.techLead) +
          Number(userData?.roleTechnical?.developer)
        ).toString(),
        "technical"
      );
      this.userForm.get("roleTechnical")?.updateValueAndValidity();
    } else if (userData?.roleFunctional?.isFunctional) {
      this.userForm.get("roleFunctional.isFunctional")?.setValue(true);
      this.onManagementChange(
        (
          Number(userData?.roleFunctional?.sme) +
          Number(userData?.roleFunctional?.leadConsultant) +
          Number(userData?.roleFunctional?.consultant)
        ).toString(),
        "functional"
      );

      this.userForm.get("roleFunctional")?.updateValueAndValidity();
    }
    this.onChecked();
  }

  onChecked() {
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
        .get("roleFunctional.leadConsultant")
        ?.setValidators([Validators.required]);
      this.userForm
        .get("roleFunctional.consultant")
        ?.setValidators([Validators.required]);
      this.userForm.get("roleFunctional")!.updateValueAndValidity();
    } else {
      this.userForm.get("roleFunctional.functional")?.reset();
      this.userForm.get("roleFunctional.sme")?.reset();
      this.userForm.get("roleFunctional.leadConsultant")?.reset();
      this.userForm.get("roleFunctional.consultant")?.reset();
      this.userForm.get("roleFunctional")!.updateValueAndValidity();
    }
  }

  onSubFieldTotal(type: string, value: string) {
    switch (type) {
      case "portfolio":
        if (value === "100") {
          this.userForm.get("roleManagement.account")?.disable();
          this.userForm.get("roleManagement.project")?.disable();
          this.userForm.get("roleManagement.account")?.setValue(0);
          this.userForm.get("roleManagement.project")?.setValue(0);
        } else {
          this.userForm.get("roleManagement.account")?.enable();
          this.userForm.get("roleManagement.project")?.enable();
        }
        this.userForm.get("roleManagement")!.updateValueAndValidity();

        break;
      case "account":
        if (value === "100") {
          this.userForm.get("roleManagement.portfolio")?.disable();
          this.userForm.get("roleManagement.project")?.disable();
          this.userForm.get("roleManagement.portfolio")?.setValue(0);
          this.userForm.get("roleManagement.project")?.setValue(0);
        } else {
          this.userForm.get("roleManagement.portfolio")?.enable();
          this.userForm.get("roleManagement.project")?.enable();
        }
        this.userForm.get("roleManagement")!.updateValueAndValidity();

        break;
      case "project":
        if (value === "100") {
          this.userForm.get("roleManagement.portfolio")?.disable();
          this.userForm.get("roleManagement.account")?.disable();
          this.userForm.get("roleManagement.portfolio")?.setValue(0);
          this.userForm.get("roleManagement.account")?.setValue(0);
        } else {
          this.userForm.get("roleManagement.portfolio")?.enable();
          this.userForm.get("roleManagement.account")?.enable();
        }
        this.userForm.get("roleManagement")!.updateValueAndValidity();
        break;
      case "architect":
        if (value === "100") {
          this.userForm.get("roleTechnical.techLead")?.setValue(0);
          this.userForm.get("roleTechnical.developer")?.setValue(0);
          this.userForm.get("roleTechnical.techLead")?.disable();
          this.userForm.get("roleTechnical.developer")?.disable();
        } else {
          this.userForm.get("roleTechnical.techLead")?.enable();
          this.userForm.get("roleTechnical.developer")?.enable();
        }
        this.userForm.get("roleTechnical")!.updateValueAndValidity();
        break;
      case "techLead":
        if (value === "100") {
          this.userForm.get("roleTechnical.architect")?.setValue(0);
          this.userForm.get("roleTechnical.developer")?.setValue(0);
          this.userForm.get("roleTechnical.architect")?.disable();
          this.userForm.get("roleTechnical.developer")?.disable();
        } else {
          this.userForm.get("roleTechnical.architect")?.enable();
          this.userForm.get("roleTechnical.developer")?.enable();
        }
        this.userForm.get("roleTechnical")!.updateValueAndValidity();
        break;
      case "developer":
        if (value === "100") {
          this.userForm.get("roleTechnical.architect")?.setValue(0);
          this.userForm.get("roleTechnical.techLead")?.setValue(0);
          this.userForm.get("roleTechnical.architect")?.disable();
          this.userForm.get("roleTechnical.techLead")?.disable();
        } else {
          this.userForm.get("roleTechnical.architect")?.enable();
          this.userForm.get("roleTechnical.techLead")?.enable();
        }
        this.userForm.get("roleTechnical")!.updateValueAndValidity();
        break;
      case "sme":
        if (value === "100") {
          this.userForm.get("roleFunctional.leadConsultant")?.setValue(0);
          this.userForm.get("roleFunctional.consultant")?.setValue(0);
          this.userForm.get("roleFunctional.leadConsultant")?.disable();
          this.userForm.get("roleFunctional.consultant")?.disable();
        } else {
          this.userForm.get("roleFunctional.leadConsultant")?.enable();
          this.userForm.get("roleFunctional.consultant")?.enable();
        }
        this.userForm.get("roleFunctional")!.updateValueAndValidity();
        break;
      case "leadConsultant":
        if (value === "100") {
          this.userForm.get("roleFunctional.sme")?.setValue(0);
          this.userForm.get("roleFunctional.consultant")?.setValue(0);
          this.userForm.get("roleFunctional.sme")?.disable();
          this.userForm.get("roleFunctional.consultant")?.disable();
        } else {
          this.userForm.get("roleFunctional.sme")?.enable();
          this.userForm.get("roleFunctional.consultant")?.enable();
        }
        this.userForm.get("roleFunctional")!.updateValueAndValidity();
        break;
      case "consultant":
        if (value === "100") {
          this.userForm.get("roleFunctional.sme")?.setValue(0);
          this.userForm.get("roleFunctional.leadConsultant")?.setValue(0);
          this.userForm.get("roleFunctional.sme")?.disable();
          this.userForm.get("roleFunctional.leadConsultant")?.disable();
        } else {
          this.userForm.get("roleFunctional.sme")?.enable();
          this.userForm.get("roleFunctional.leadConsultant")?.enable();
        }
        this.userForm.get("roleFunctional")!.updateValueAndValidity();
        break;

      default:
        break;
    }
  }

  onManagementChange(value: string, type: string) {
    if (type === "management") {
      this.userForm.get("roleManagement.isManagement")?.setValue(true);
      this.userForm.get("roleTechnical.isTechnical")?.setValue(false);
      if (value === "100") {
        this.userForm.get("roleTechnical")?.disable();
        this.userForm.get("roleFunctional")?.disable();
      } else {
        this.userForm.get("roleTechnical")?.enable();
        this.userForm.get("roleFunctional")?.enable();
      }
      this.userForm
        .get("roleManagement.isManagement")
        ?.updateValueAndValidity();
      this.userForm.get("roleTechnical")?.updateValueAndValidity();
      this.userForm.get("roleFunctional")?.updateValueAndValidity();
    }

    if (type === "technical") {
      this.userForm.get("roleTechnical.isTechnical")?.setValue(true);
      if (value === "100") {
        this.userForm.get("roleManagement")?.disable();
        this.userForm.get("roleFunctional")?.disable();
      } else {
        this.userForm.get("roleManagement")?.enable();
        this.userForm.get("roleFunctional")?.enable();
      }
      this.userForm.get("roleTechnical.isTechnical")?.updateValueAndValidity();
      this.userForm.get("roleManagement")?.updateValueAndValidity();
      this.userForm.get("roleFunctional")?.updateValueAndValidity();
    }
    if (type === "functional") {
      this.userForm.get("roleFunctional.isFuncational")!.setValue(true);
      if (value === "100") {
        this.userForm.get("roleTechnical")?.disable();
        this.userForm.get("roleManagement")?.disable();
      } else {
        this.userForm.get("roleTechnical")?.enable();
        this.userForm.get("roleManagement")?.enable();
      }
      this.userForm
        .get("roleFunctional.isFuncational")
        ?.updateValueAndValidity();
      this.userForm.get("roleTechnical")?.updateValueAndValidity();
      this.userForm.get("roleManagement")?.updateValueAndValidity();
    }
    this.onChecked();
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
  getTotalofFields() {
    this.onlyManagement = false;
    this.onlyTechnical = false;
    this.onlyFunctional = false;
    this.allFields = false;
    if (Number(this.userForm.get("roleManagement.management")!.value) == 100) {
      this.onlyManagement = true;
      this.allFields = false;
    } else if (
      Number(this.userForm.get("roleFunctional.functional")!.value) == 100
    ) {
      this.onlyFunctional = true;
      this.allFields = false;
    } else if (
      Number(this.userForm.get("roleTechnical.technical")!.value) == 100
    ) {
      this.onlyTechnical = true;
      this.allFields = false;
    } else if (
      Number(this.userForm.get("roleManagement.management")!.value) +
        Number(this.userForm.get("roleTechnical.technical")!.value) ==
      100
    ) {
      this.onlyManagement = true;
      this.onlyTechnical = true;
    } else if (
      Number(this.userForm.get("roleManagement.management")!.value) +
        Number(this.userForm.get("roleFunctional.functional")!.value) ==
      100
    ) {
      this.onlyManagement = true;
      this.onlyFunctional = true;
    } else if (
      Number(this.userForm.get("roleTechnical.technical")!.value) +
        Number(this.userForm.get("roleFunctional.functional")!.value) ==
      100
    ) {
      this.onlyTechnical = true;
      this.onlyFunctional = true;
    } else if (
      Number(this.userForm.get("roleManagement.management")!.value) +
        Number(this.userForm.get("roleTechnical.technical")!.value) +
        Number(this.userForm.get("roleFunctional.functional")!.value) >=
      100
    ) {
      this.allFields = true;
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
        Number(this.userForm.get("roleFunctional.leadConsultant")!.value) +
        Number(this.userForm.get("roleFunctional.consultant")!.value) >
      100
    ) {
      return true;
    } else {
      return false;
    }
  }

  getDisabled() {
    return (
      this.getTotalOfFuncaional() ||
      this.getTotalOfTechnical() ||
      this.getTotalOfManagement() ||
      this.getTotalPercentage()
    );
  }

  disabledField(type: string) {
    if (type === "management") {
      if (
        Number(this.userForm.get("roleManagement.portfolio")?.value) +
          Number(this.userForm.get("roleManagement.account")?.value) ===
        100
      ) {
        this.userForm.get("roleManagement.project")?.disable();
        this.userForm.get("roleManagement.project")?.setValue(0);
      } else if (
        Number(this.userForm.get("roleManagement.portfolio")?.value) +
          Number(this.userForm.get("roleManagement.project")?.value) ===
        100
      ) {
        this.userForm.get("roleManagement.account")?.disable();
        this.userForm.get("roleManagement.account")?.setValue(0);
      } else if (
        Number(this.userForm.get("roleManagement.account")?.value) +
          Number(this.userForm.get("roleManagement.project")?.value) ===
        100
      ) {
        this.userForm.get("roleManagement.portfolio")?.disable();
        this.userForm.get("roleManagement.portfolio")?.setValue(0);
      }
      this.userForm.get("roleManagement")!.updateValueAndValidity();
    } else if (type === "technical") {
      if (
        Number(this.userForm.get("roleTechnical.architect")?.value) +
          Number(this.userForm.get("roleTechnical.techLead")?.value) ===
        100
      ) {
        this.userForm.get("roleTechnical.developer")?.disable();
        this.userForm.get("roleTechnical.developer")?.setValue(0);
      } else if (
        Number(this.userForm.get("roleTechnical.architect")?.value) +
          Number(this.userForm.get("roleTechnical.developer")?.value) ===
        100
      ) {
        this.userForm.get("roleTechnical.techLead")?.disable();
        this.userForm.get("roleTechnical.techLead")?.setValue(0);
      } else if (
        Number(this.userForm.get("roleTechnical.techLead")?.value) +
          Number(this.userForm.get("roleTechnical.developer")?.value) ===
        100
      ) {
        this.userForm.get("roleTechnical.architect")?.disable();
        this.userForm.get("roleTechnical.architect")?.setValue(0);
      }
      this.userForm.get("roleTechnical")!.updateValueAndValidity();
    } else if (type === "functional") {
      if (
        Number(this.userForm.get("roleFunctional.sme")?.value) +
          Number(this.userForm.get("roleFunctional.leadConsultant")?.value) ===
        100
      ) {
        this.userForm.get("roleFunctional.consultant")?.disable();
        this.userForm.get("roleFunctional.consultant")?.setValue(0);
      } else if (
        Number(this.userForm.get("roleFunctional.sme")?.value) +
          Number(this.userForm.get("roleFunctional.consultant")?.value) ===
        100
      ) {
        this.userForm.get("roleFunctional.leadConsultant")?.disable();
        this.userForm.get("roleFunctional.leadConsultant")?.setValue(0);
      } else if (
        Number(this.userForm.get("roleFunctional.leadConsultant")?.value) +
          Number(this.userForm.get("roleFunctional.consultant")?.value) ===
        100
      ) {
        this.userForm.get("roleFunctional.sme")?.disable();
        this.userForm.get("roleFunctional.sme")?.setValue(0);
      }
      this.userForm.get("roleFunctional")!.updateValueAndValidity();
    }
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      if (
        !this.getTotalOfManagement() ||
        !this.getTotalOfTechnical() ||
        !this.getTotalOfFuncaional()
      ) {
        this.disabledSubmit = null;
        (formValue.createdBy = this.userId),
          console.log("finalData", formValue);
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
        this.disabledSubmit = true;
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
