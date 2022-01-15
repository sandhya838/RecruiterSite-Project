import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
// import { getDiffieHellman } from 'crypto';
import { data } from "jquery";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
import { CommonService } from "src/app/services/common.service";
import { filter } from "rxjs/operators";
import { response } from "express";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  userForm!: FormGroup;
  currentUserData = null;
  userId: string | undefined;
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: "code",
    textField: "name",
    selectAllText: "Select country",
    unSelectAllText: "",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  cityDropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: "isoCode",
    textField: "name",
    selectAllText: "Select city",
    unSelectAllText: "",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  stateDropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: "state_code",
    textField: "name",
    selectAllText: "Select city",
    unSelectAllText: "",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  countries = [];
  selectedCities = [];
  selectedStates = [];
  selectedPhoneCode: string | undefined;
  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}

  pattern = "^[ a-zA-Z]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      mobileNumber: ["", [Validators.required]],
      countryCode: [this.selectedPhoneCode, [Validators.required]],
      firstName: ["", [Validators.required, Validators.pattern(this.pattern)]],
      middleName: [""],
      lastName: ["", [Validators.required, Validators.pattern(this.pattern)]],
      countryOfLiving: ["", [Validators.required]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      nationality: ["", [Validators.required]],
      currentNationality: ["", [Validators.required]],
      previousNationality: ["", [Validators.required]],
    });
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userId = userData._id;
    this.userForm.patchValue(userData);
    this.getCountries();
    this.getCurrentCountryDetails();
  }

  get getControl() {
    return this.userForm.controls;
  }

  getCountries() {
    this.selectedStates = [];
    this.selectedCities = [];
    this.configService
      .getCountries()
      .pipe(filter(Boolean))
      .subscribe((response: any) => {
        this.countries = response.countries;
      });
  }

  getCurrentCountryDetails() {
    this.configService
      .getCurrentCountryDetails()
      .pipe(filter(Boolean))
      .subscribe((response: any) => {
        this.countries.forEach((country: any) => {
          if (country.code === response.countryCode) {
            this.selectedPhoneCode = country.dial_code;
            this.userForm.get("countryCode")?.setValue(this.selectedPhoneCode);
            this.userForm.get("countryCode")?.updateValueAndValidity();
          }
        });
      });
  }

  onClick(formValue: any, isValid: boolean) {
    console.log(formValue, isValid);
    if (isValid) {
      formValue.createdBy = this.userId;
      this.configService
        .updateUser(this.userId, formValue)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.profile))
              : sessionStorage.setItem("user", JSON.stringify(data.profile));
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile/experience");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }

  onCountrySelect(item: any) {
    this.selectedCities = [];
    this.configService
      .getStates(item.code)
      .pipe(filter(Boolean))
      .subscribe((response: any) => {
        this.selectedStates = response.states;
      });
  }

  onStateSelect(item: any, counrty: any) {
    this.configService
      .getCities(item.state_code, counrty[0].code)
      .pipe(filter(Boolean))
      .subscribe((response: any) => {
        this.selectedCities = response.cities;
      });
  }
}
