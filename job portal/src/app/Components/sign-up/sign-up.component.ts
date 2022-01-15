import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { FileUploadValidators } from "@iplab/ngx-file-upload";
import { filter } from "rxjs/operators";
import { ConfigService } from "src/app/config.service";
import { CommonService } from "src/app/services/common.service";
import { SigninService } from "src/app/signin.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  alert: boolean = false;
  signUp!: FormGroup;
  isPassword: boolean = false;
  countries: any;
  selectedPhoneCode: any;

  constructor(
    public formBuilder: FormBuilder,
    private signInService: SigninService,
    private commonService: CommonService,
    private router: Router,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.signUp = this.formBuilder.group({
      countryCode: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      middleName: [""],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      mobileNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("[5-9]{1}[0-9]{9}"),
        ],
      ],
      file: new FormControl(null, [
        Validators.required,
        FileUploadValidators.filesLimit(1),
      ]),
    });
    this.getCountries();
    this.getCurrentCountryDetails();
  }
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

  get getControl() {
    return this.signUp.controls;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }

  onSubmitForm(isValid: boolean, formValue: any) {
    if (isValid) {
      let fd = new FormData();
      fd.append("role", "candidate");
      fd.append("resume", formValue.file[0]);
      fd.append("firstName", formValue.firstName);
      fd.append("lastName", formValue.lastName);
      fd.append("middleName", formValue.middleName);
      fd.append("email", formValue.email);
      fd.append("countryCode", formValue.countryCode);
      fd.append("mobileNumber", formValue.mobileNumber);
      fd.append("password", this.commonService.encrypt(formValue.password));

      this.signInService.register(fd).subscribe((response: any) => {
        if (response.status === 200) {
          this.router.navigate(["/login"]);
          this.commonService.alert("success", response.message);
        } else {
          this.commonService.alert("error", response.message);
        }
      });
    } else {
      this.signUp.markAllAsTouched();
    }
  }
}
