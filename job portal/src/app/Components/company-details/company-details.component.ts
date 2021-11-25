import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfigService } from 'src/app/config.service';
import { CommonService } from "src/app/services/common.service";
import {  ViewChild } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  userForm!: FormGroup;
  allData: any;
  alert: boolean = false;
  dropdownSettings = {};
  country: { id: number; name: string }[] = [];
  location: { id: number; name: string }[] = [];
  user: any;
  viewPort: any;
  router: any;
  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private commonService: CommonService
    //private router: Router,
    
  ) {}
  numberpattern = "^[0-9]*$";

  ngOnInit(): void {
    this.viewPort = window.innerWidth > 991 ? true : false;
    this.userForm = this.formBuilder.group({
      Organization: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      middleName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      location: ["", [Validators.required]],
      employees: ["", [Validators.required]],
      Description: ["", [Validators.required]],
      country:["", [Validators.required]],
      turnover: [ "", [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      employee:[ "", [Validators.required, Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)]]
    });
    this.country = [
      { id: 1, name: "	Afghanistan" },
      { id: 2, name: "Albania" },
      { id: 3, name: "Algeria" },
      { id: 4, name: "Bahamas" },
      { id: 5, name: "Brazil" },
      { id: 6, name: "Comoros" },
      { id: 7, name: "Denmark" },
      { id: 7, name: "Ecuador" },
      { id: 8, name: "Finland" },
      { id: 9, name: "Gambia" },
      { id: 10, name: "India" },
      { id: 11, name: "Indonesia" },
      { id: 12, name: "Ireland" },
      { id: 13, name: "Japan" },
      { id: 14, name: "Malawi " },
      { id: 15, name: "Maldives" },
      { id: 16, name: "Monaco" },
      { id: 17, name: "Niger" },
      { id: 18, name: "North Korea" },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "name",
      textField: "name",
      itemsShowLimit: this.viewPort ? 2: 1,
      limitSelection: 1,
      allowSearchFilter: true,
    };
    this.location = [
      { id: 1, name: "Karnataka" },
      { id: 2, name: " mumbai" },
      { id: 3, name: " Maharashtra" },
      { id: 4, name: "Manipur " },
      { id: 5, name: "panjab" },
      { id: 6, name: "tamil nadu" },
      { id: 7, name: "telengana" },
      { id: 8, name: "uttar pradesh" },
      { id: 9, name: "goa " },
      { id: 10, name: "gujrat" },
    ];
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const finalData = {
        countryAdministration: formValue.system,
        country: formValue.country,
        location: formValue.location,
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
            
          } else {
            this.commonService.alert("error", data.message);
          }
        });
      }
      else {
        this.userForm.markAllAsTouched();
        this.userForm.updateValueAndValidity();
      }
    }
  }
      
  
  // get getControl() {
  //   return this.userForm.controls;
  // }
  // onClick(formValue: any, isValid: boolean) {
  //   if (isValid) {
  //     const companyDetails = [];
  //     const tempFormatedData = {
  //       details: "",
  //       desc: "",
  //       noOfEmp: "",
  //       loc:""
  //     };
  //     tempFormatedData.details = formValue.companyDetails;
  //     tempFormatedData.desc = formValue.descOfCompany
  //     tempFormatedData.noOfEmp = formValue.noOfEmployees;
  //     tempFormatedData.loc = formValue.location;

  //     companyDetails.push(tempFormatedData);
  //     const finalData = {
  //       companyDetail: companyDetails,
  //     };
  //     this.configService
  //       .updateUser(localStorage.getItem("ID"), finalData)
  //       .subscribe(
  //         (data: any) => {
  //           console.log(data);
  //           if (data.status === 200) {
  //             this.notifyService.showSuccess(data.message);
  //             //this.router.navigateByUrl("/certificate");
  //             this.userForm.reset();
  //           } else {
  //             this.notifyService.showError(data.message);
  //           }
  //         },
  //         (error) => {
  //           this.notifyService.showError(error.message);
  //         }
  //       );
  //   } else {
  //     this.userForm.markAllAsTouched();
  //     this.userForm.updateValueAndValidity();
  //   }
  // }
  // closeAlert() {
  //   this.alert = false;
  // }


