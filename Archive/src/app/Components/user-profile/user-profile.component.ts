import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
// import { getDiffieHellman } from 'crypto';
import { data } from "jquery";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  alert: boolean = false;
  userForm!: FormGroup;
  allData: any;
  currentUserData = null;
  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router
  ) {}

  pattern = "^[ a-zA-Z]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      firstName: ["", [Validators.required, Validators.pattern(this.pattern)]],
      middleName: ["", [Validators.required, Validators.pattern(this.pattern)]],
      lastName: ["", [Validators.required, Validators.pattern(this.pattern)]],
      Country: ["", [Validators.required, Validators.pattern(this.pattern)]],
      State: ["", [Validators.required, Validators.pattern(this.pattern)]],
      City: ["", [Validators.required, Validators.pattern(this.pattern)]],
      Nation: ["", [Validators.required, Validators.pattern(this.pattern)]],
      currentNationality: [
        "",
        [Validators.required, Validators.pattern(this.pattern)],
      ],
      previousNationality: [
        "",
        [Validators.required, Validators.pattern(this.pattern)],
      ],
    });
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      this.configService.addUser(formValue).subscribe(
        (data: any) => {
          if (data.status === 200) {
            this.notifyService.showSuccess(data.message);
            localStorage.setItem("ID", data.profile._id);
            this.router.navigateByUrl('/experience');
            this.userForm.reset();
          } else {
            this.notifyService.showError(data.message);
          }
          console.log("data", data);
        },
        (error) => {
          this.notifyService.showError(error.message);
        }
      );
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }

  closeAlert() {
    this.alert = false;
  }
}
