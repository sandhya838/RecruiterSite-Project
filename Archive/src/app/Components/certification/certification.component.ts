import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
@Component({
  selector: "app-certification",
  templateUrl: "./certification.component.html",
  styleUrls: ["./certification.component.scss"],
})
export class CertificationComponent implements OnInit {
  Certificate!: FormGroup;
  allData: any;
  alert: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.Certificate = this.formBuilder.group({
      CertificationName: ["", [Validators.required]],
      certifiedMonth: ["", [Validators.required]],
      certifiedYear: ["", [Validators.required]],
    });
  }
  get getControl() {
    return this.Certificate.controls;
  }
  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      const certificates = [];
      const tempFormatedData = {
        name: "",
        month: "",
        year: "",
      };
      tempFormatedData.name = formValue.CertificationName;
      tempFormatedData.month = formValue.certifiedMonth;
      tempFormatedData.year = formValue.certifiedYear;
      certificates.push(tempFormatedData);
      const finalData = {
        certifications: certificates,
      };
      this.configService
        .updateUser(localStorage.getItem("ID"), finalData)
        .subscribe(
          (data: any) => {
            console.log(data);
            if (data.status === 200) {
              this.notifyService.showSuccess(data.message);
              //this.router.navigateByUrl("/certificate");
              this.Certificate.reset();
            } else {
              this.notifyService.showError(data.message);
            }
          },
          (error) => {
            this.notifyService.showError(error.message);
          }
        );
    } else {
      this.Certificate.markAllAsTouched();
      this.Certificate.updateValueAndValidity();
    }
  }
  closeAlert() {
    this.alert = false;
  }
}
