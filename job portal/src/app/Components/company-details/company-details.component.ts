import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { data } from 'jquery';
import { CommonService } from "src/app/services/common.service";
import { CompanyDetailService } from 'src/app/services/company-detail.service';
import { NotificationService } from 'src/app/notification.service';

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
    private companyDetailService:CompanyDetailService,
    private notifyService: NotificationService
    //private router: Router,
    
  ) {}
  numberpattern = "^[0-9]*$";

  ngOnInit(): void {
    this.viewPort = window.innerWidth > 991 ? true : false;
    this.userForm = this.formBuilder.group({
      location: ["", [Validators.required]],
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
      const tempFormattedData = {
        location:"",
        country:"",
        Description:"",
        turnover:"",
        employee:"",




      }
      tempFormattedData.location = formValue.location;
      tempFormattedData.country = formValue.country;
      tempFormattedData.Description = formValue.Description;
      tempFormattedData.turnover = formValue.turnover;
      tempFormattedData.employee = formValue.employee;



    
      const userData = JSON.parse(
        localStorage.getItem("rememberMe") === "true"
          ? localStorage.getItem("user")
          : (sessionStorage.getItem("user") as any)
      );
  
      this.companyDetailService
        .putCompanyDetails(userData?._id).subscribe((data: any) => {
      if (data.status === 200) {
        this.notifyService.showSuccess(data.message);
        this.userForm.reset();
      } else {
        this.notifyService.showError(data.message);
      }
    }

  );
}

      else {
        this.userForm.markAllAsTouched();
        this.userForm.updateValueAndValidity();
      }
      console.log(formValue);
    }
    
    
  }
      
  



