import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { FileUploadValidators } from "@iplab/ngx-file-upload";
import { ConfigService } from "src/app/config.service";
import { CommonService } from "src/app/services/common.service";
@Component({
  selector: "app-certification",
  templateUrl: "./certification.component.html",
  styleUrls: ["./certification.component.scss"],
})
export class CertificationComponent implements OnInit {
  Certificate!: FormGroup;
  allData: any;
  alert: boolean = false;
  certificationsForm!: FormGroup;
  userId!: string;
  years = ([] = this.generateArrayOfYears());
  months = ([] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  constructor(
    public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.certificationsForm = this.formBuilder.group({
      certifications: this.formBuilder.array([this.inililzeForm()]),
    });
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userId = userData._id;
  }

  inililzeForm() {
    return this.formBuilder.group({
      name: ["", Validators.required],
      year: ["", Validators.required],
      month: ["", Validators.required],
      file: new FormControl(null, [
        Validators.required,
        FileUploadValidators.filesLimit(1),
      ]),
    });
  }
  get certificationsFormArray() {
    return this.certificationsForm.get("certifications") as FormArray;
  }
  getValidity(index: number) {
    return (<FormArray>this.certificationsForm.get("certifications")).controls[
      index
    ] as FormControl;
  }
  addMore() {
    const formarr = this.certificationsForm.get("certifications") as FormArray;
    formarr.push(this.inililzeForm());
  }
  remoreForm(index: number) {
    const formarr = this.certificationsForm.get("certifications") as FormArray;
    formarr.removeAt(index);
  }
  get getControl() {
    return this.Certificate.controls;
  }
  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      let totalIndex = 0;
      let fd = new FormData();
      for (const item of formValue.certifications) {
        fd = new FormData();
        fd.append("updatedBy", this.userId);
        fd.append("certificate", item.file[0]);
        fd.append("month", item.month);
        fd.append("year", item.year);
        fd.append("name", item.name);
        const finalData = {
          certifications: fd,
          updatedBy: this.userId,
        };
        this.configService
          .uploadCertificates(this.userId, fd)
          .subscribe((data: any) => {
            if (data.status === 200) {
              localStorage.getItem("rememberMe") === "true"
                ? localStorage.setItem("user", JSON.stringify(data.profile))
                : sessionStorage.setItem("user", JSON.stringify(data.profile));
              this.commonService.alert("success", data.message);
              totalIndex++;
              this.redirectToHome(totalIndex, formValue.certifications.length);
            } else {
              totalIndex--;
              this.redirectToHome(totalIndex, formValue.certifications.length);
              this.commonService.alert("error", data.message);
            }
          });
      }
    } else {
      this.certificationsForm.markAllAsTouched();
    }
  }
  generateArrayOfYears() {
    const max = new Date().getFullYear();
    const min = 1900;
    const years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }

  redirectToHome(totalIndex: number, maxLength: number) {
    if (totalIndex === maxLength) {
      this.router.navigateByUrl("/dashboard");
    }
  }
}
