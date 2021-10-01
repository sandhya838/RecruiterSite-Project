import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";

@Component({
  selector: "app-experiance",
  templateUrl: "./experiance.component.html",
  styleUrls: ["./experiance.component.scss"],
})
export class ExperianceComponent implements OnInit {
  userForm!: FormGroup;
  alert: boolean = false;
  allData: any;

  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router
  ) {}
  pattern = "^[ a-zA-Z;;]*$";
  mixpattern = "^[ a-z0-9_-]*$";
  numberpattern = "^[0-9]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      totalYearsOfExperience: [
        "",
        [Validators.required, Validators.pattern(this.mixpattern)],
      ],
      timeSize: [
        "",
        [Validators.required, Validators.pattern(this.numberpattern)],
      ],
      volumeOfBusinessManged: [
        "",
        [Validators.required, Validators.pattern(this.pattern)],
      ],
      noticePeriod: [
        "",
        [Validators.required, Validators.pattern(this.numberpattern)],
      ],
      salary: [
        "",
        [Validators.required, Validators.pattern(this.numberpattern)],
      ],
      baseSalary: [
        "",
        [Validators.required, Validators.pattern(this.numberpattern)],
      ],
      variableSalary: [
        "",
        [Validators.required, Validators.pattern(this.numberpattern)],
      ],
      otherComponent: [
        "",
        [Validators.required, Validators.pattern(this.pattern)],
      ],
      indServed: ["", [Validators.required, Validators.pattern(this.pattern)]],
    });
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    console.log(this.userForm.value);
    this.allData = JSON.parse(JSON.stringify(this.userForm.value));

    if (isValid) {
      this.configService.updateUser(localStorage.getItem("ID"),formValue).subscribe(
        (data: any) => {
          console.log(data);
          if (data.status === 200) {
            this.notifyService.showSuccess(data.message);
            this.router.navigateByUrl("/role-profile");
            this.userForm.reset();
          } else {
            this.notifyService.showError(data.message);
          }
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

function id(id: any, any: any) {
  throw new Error("Function not implemented.");
}
