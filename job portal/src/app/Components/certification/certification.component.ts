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
  userId: string | undefined;

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
    console.log(formValue, isValid);
    if (isValid) {
      const finalRequest = [];
      for (const item of formValue.certifications) {
        let fd = new FormData();
        fd.append("certificate", item.file[0]);
        fd.append("name", item.name);
        fd.append("month", item.month);
        fd.append("year", item.year);
        finalRequest.push(fd);
      }

      const finalData = {
        certifications: finalRequest,
        updatedBy: this.userId,
      };
      if (finalRequest.length === formValue.certifications.length) {
        console.log("finalData", finalData);

        this.configService
          .updateUser(this.userId, finalData)
          .subscribe((data: any) => {
            if (data.status === 200) {
              localStorage.getItem("rememberMe") === "true"
                ? localStorage.setItem("user", JSON.stringify(data.profile))
                : sessionStorage.setItem("user", JSON.stringify(data.profile));
              this.commonService.alert("success", data.message);
              this.router.navigateByUrl("/dashboard");
            } else {
              this.commonService.alert("error", data.message);
            }
          });
      }
    } else {
      this.certificationsForm.markAllAsTouched();
    }
  }
}
