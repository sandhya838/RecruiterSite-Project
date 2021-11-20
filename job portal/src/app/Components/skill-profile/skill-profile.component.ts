import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-skill-profile",
  templateUrl: "./skill-profile.component.html",
  styleUrls: ["./skill-profile.component.scss"],
})
export class SkillProfileComponent implements OnInit {
  userForm!: FormGroup;

  dropdownSettings = {};
  technicalSkills: { id: number; name: string }[] = [];
  functionalSkills: { id: number; name: string }[] = [];
  user: any;
  viewPort = true;
  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.viewPort = window.innerWidth > 991 ? true : false;
    this.userForm = this.formBuilder.group({
      technical: ["", [Validators.required]],
      system: ["", [Validators.required]],
      functional: ["", [Validators.required]],
    });
    this.user = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.technicalSkills = [
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
      itemsShowLimit: this.viewPort ? 4 : 1,
      limitSelection: 4,
      allowSearchFilter: true,
    };
    this.functionalSkills = [
      { id: 1, name: "Communication" },
      { id: 2, name: "Organization Management" },
      { id: 3, name: "Research & exploration" },
      { id: 4, name: "Informaion management" },
      { id: 5, name: "Design & planning" },
      { id: 6, name: "Human services" },
      { id: 7, name: "Marketing Strategy" },
      { id: 8, name: "Copywriting" },
      { id: 9, name: "Computer Programs & Software" },
      { id: 10, name: "Accounting" },
    ];
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const finalData = {
        skillSysAdministration: formValue.system,
        skillTechnical: formValue.technical,
        skillFunctional: formValue.functional,
      };
      console.log("finalData", finalData);
      this.configService
        .updateUser(this.user?._id, finalData)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.profile))
              : sessionStorage.setItem("user", JSON.stringify(data.profile));
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile/work-experience");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }
}
