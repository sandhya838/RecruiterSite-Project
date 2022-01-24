import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { OrganizationSignInService } from "src/app/services/organization-sign-in.service";
import { CommonService } from "src/app/services/common.service";
import { FileUploadValidators } from "@iplab/ngx-file-upload";
import { ConfigService } from "src/app/config.service";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-organization-sign-up",
  templateUrl: "./organization-sign-up.component.html",
  styleUrls: ["./organization-sign-up.component.scss"],
})
export class OrganizationSignUpComponent implements OnInit {
  alert: boolean = false;
  signUp: FormGroup = this.formBuilder.group({
    organizationName: ["", [Validators.required]],
    firstName: ["", [Validators.required]],
    middleName: [""],
    lastName: ["", [Validators.required]],
    countryCode: ["", [Validators.required]],
    contactNumber: [
      "",
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[5-9]{1}[0-9]{9}"),
      ],
    ],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    url: ["", [Validators.required]],
    file: new FormControl(null, [
      Validators.required,
      FileUploadValidators.filesLimit(1),
    ]),
  });

  isPassword: boolean = false;
  countries: any;
  selectedPhoneCode: any;

  constructor(
    public formBuilder: FormBuilder,
    private organizationSignInService: OrganizationSignInService,
    private commonService: CommonService,
    private router: Router,
    private configService: ConfigService
  ) {}

  getCountries() {
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
            this.signUp.get("countryCode")?.setValue(this.selectedPhoneCode);
            this.signUp.get("countryCode")?.updateValueAndValidity();
          }
        });
      });
  }

  ngOnInit(): void {
    this.getCountries();
    this.getCurrentCountryDetails();
  }

  get getControl() {
    return this.signUp.controls;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }

  onSubmitForm(isValid: boolean, formValue: any) {
    console.log("isValid", isValid, this.signUp!.errors, formValue);
    if (isValid) {
      let fd = new FormData();
      fd.append("role", "orgnization");
      fd.append("organizationName", formValue.organizationName);
      fd.append("firstName", formValue.firstName);
      fd.append("middleName", formValue.middleName);
      fd.append("lastName", formValue.lastName);
      fd.append("contactNumber", formValue.contactNumber);
      fd.append("countryCode", formValue.countryCode);
      fd.append("email", formValue.email);
      fd.append("url", formValue.email);
      fd.append("logo", formValue.file[0]);
      fd.append("password", this.commonService.encrypt(formValue.password));
      this.organizationSignInService.register(fd).subscribe((response: any) => {
        if (response.status === 200) {
          this.router.navigate(["/organization-signin"]);
          this.commonService.alert("success", response.message);
        } else {
          this.commonService.alert("error", response.message);
        }
      });
    } else {
      this.signUp.markAllAsTouched();
      this.signUp.updateValueAndValidity();
    }
  }
}
