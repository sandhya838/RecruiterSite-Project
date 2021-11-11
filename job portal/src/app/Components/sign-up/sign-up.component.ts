import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { FileUploadValidators } from "@iplab/ngx-file-upload";
import { SigninService } from "src/app/signin.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  alert: boolean = false;
  signUp: FormGroup = this.formBuilder.group({
    fullName: ["", [Validators.required]],
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
    file: new FormControl(null, [
      Validators.required,
      FileUploadValidators.filesLimit(1),
    ]),
  });
  isPassword: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private signInService: SigninService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get getControl() {
    return this.signUp.controls;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }

  onSubmitForm(isValid: boolean, formValue: any) {
    if (isValid) {
      let fd = new FormData();
      fd.append("resume", formValue.file[0]);
      fd.append("fullName", formValue.fullName);
      fd.append("email", formValue.email);
      fd.append("passowrd", formValue.password);

      console.log("formValue", fd);
      this.signInService.register(fd).subscribe(
        (response: any) => {
          if (response.status === 200) {
            this.router.navigate(["/login"]);
          } else {
          }
        },
        (err) => {
          console.log(err.message);
        }
      );
    } else {
      this.signUp.markAllAsTouched();
    }
  }

  closeAlert() {
    this.alert = false;
  }
}
