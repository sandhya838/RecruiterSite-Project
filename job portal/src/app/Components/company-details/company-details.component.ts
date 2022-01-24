import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { data } from "jquery";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { filter } from "rxjs/operators";
import { ConfigService } from "src/app/config.service";
import { CONSTANTS } from "src/app/helper/constants";
import { CommonService } from "src/app/services/common.service";
import { CompanyDetailService } from "src/app/services/company-detail.service";

@Component({
  selector: "app-company-details",
  templateUrl: "./company-details.component.html",
  styleUrls: ["./company-details.component.scss"],
})
export class CompanyDetailsComponent implements OnInit {
  userForm!: FormGroup;
  dropdownSettings: IDropdownSettings = {};
  cityDropdownSettings: IDropdownSettings = {};
  viewPort: any;
  userData: any;
  router: any;
  APIURL = CONSTANTS.BASEURL;
  selectedStates!: any[];
  selectedCities!: any[];
  countries: any;

  constructor(
    public formBuilder: FormBuilder,
    private companyDetailService: CompanyDetailService,
    private commonService: CommonService,
    private configService: ConfigService //private router: Router,
  ) {}
  numberpattern = "^[0-9]*$";

  ngOnInit(): void {
    this.getCountries();
    this.viewPort = window.innerWidth > 991 ? true : false;
    this.userForm = this.formBuilder.group({
      location: ["", [Validators.required]],
      description: ["", [Validators.required]],
      country: ["", [Validators.required]],
      turnOver: [
        "",
        [Validators.required, Validators.pattern(/^-?(0|[1-9]*)?$/)],
      ],
      numberOfEmployees: [
        "",
        [Validators.required, Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],
      ],
    });
    this.userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userForm.patchValue(this.userData);
    for (const country  of this.userData?.country) {
      this.onCountrySelect(country);
      
    }
    this.dropdownSettings = {
      singleSelection: false,
      idField: "code",
      textField: "name",
      itemsShowLimit: this.viewPort ? 2 : 1,
      allowSearchFilter: true,
    };
    this.cityDropdownSettings = {
      singleSelection: false,
      idField: "id",
      textField: "name",
      selectAllText: "Select location",
      unSelectAllText: "",
      itemsShowLimit: this.viewPort ? 2 : 1,
      allowSearchFilter: true,
    };
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

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const finalData = {
        description: formValue.description,
        country: formValue.country,
        location: formValue.location,
        turnOver: formValue.turnOver,
        numberOfEmployees: formValue.numberOfEmployees,
      };

      this.companyDetailService
        .putCompanyDetails(this.userData?._id, finalData)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.orgnizaton))
              : sessionStorage.setItem("user", JSON.stringify(data.orgnizaton));
            this.commonService.alert("success", data.message);
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }

  onCountrySelect(counrty: any) {
    if(this.userForm.get('country')!.value?.length<1){
      this.selectedCities=[];
    }
    this.configService
      .getCitiesByCountryCode(counrty?.code)
      .pipe(filter(Boolean))
      .subscribe((response: any) => {
        this.selectedCities.push(response.cities);
      });
    if (this.selectedCities.length) {
      this.selectedCities = this.flatten(this.selectedCities);
    }
  }
  onCountryDeSelect(event: any) {
    this.selectedCities = this.selectedCities.filter(
      (city) => city.country_code !== event.code
    );
  }
  flatten(ary: any, ret = []) {
    return ary.reduce((ret: any, entry: any) => {
      if (Array.isArray(entry)) {
        this.flatten(entry, ret);
      } else {
        ret.push(entry);
      }
      return ret;
    }, ret);
  }
}
