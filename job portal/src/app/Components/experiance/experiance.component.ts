import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-experiance",
  templateUrl: "./experiance.component.html",
  styleUrls: ["./experiance.component.scss"],
})
export class ExperianceComponent implements OnInit {
  userForm!: FormGroup;
  alert: boolean = false;
  allData: any;
  userId: string | undefined;

  ctc = [
    {
      _id: 72,
      salary: 206132.25,
    },
    {
      _id: 99,
      salary: 690755.23,
    },
    {
      _id: 63,
      salary: 327776.27,
    },
    {
      _id: 26,
      salary: 364229.76,
    },
    {
      _id: 41,
      salary: 918769.26,
    },
    {
      _id: 46,
      salary: 585280.35,
    },
    {
      _id: 62,
      salary: 276441.54,
    },
    {
      _id: 83,
      salary: 855527.13,
    },
    {
      _id: 78,
      salary: 870932.83,
    },
    {
      _id: 66,
      salary: 94309.19,
    },
    {
      _id: 34,
      salary: 808636.89,
    },
    {
      _id: 32,
      salary: 513520.78,
    },
    {
      _id: 36,
      salary: 517816.63,
    },
    {
      _id: 72,
      salary: 621779.69,
    },
    {
      _id: 47,
      salary: 83815.02,
    },
    {
      _id: 17,
      salary: 768260.16,
    },
    {
      _id: 12,
      salary: 844268.25,
    },
    {
      _id: 16,
      salary: 462126.96,
    },
    {
      _id: 2,
      salary: 959035.38,
    },
    {
      _id: 6,
      salary: 481014.6,
    },
    {
      _id: 51,
      salary: 981553.84,
    },
    {
      _id: 45,
      salary: 156596.78,
    },
    {
      _id: 76,
      salary: 655944.67,
    },
    {
      _id: 9,
      salary: 118232.85,
    },
    {
      _id: 77,
      salary: 424999.37,
    },
    {
      _id: 92,
      salary: 168157.82,
    },
    {
      _id: 90,
      salary: 496979.96,
    },
    {
      _id: 19,
      salary: 498398.13,
    },
    {
      _id: 19,
      salary: 901962.41,
    },
    {
      _id: 41,
      salary: 564196.16,
    },
    {
      _id: 86,
      salary: 421955.89,
    },
    {
      _id: 43,
      salary: 353578.18,
    },
    {
      _id: 6,
      salary: 870403.16,
    },
    {
      _id: 57,
      salary: 849432.23,
    },
    {
      _id: 23,
      salary: 680189.69,
    },
    {
      _id: 63,
      salary: 190109.42,
    },
    {
      _id: 21,
      salary: 438971.26,
    },
    {
      _id: 40,
      salary: 799293.55,
    },
    {
      _id: 48,
      salary: 266232.41,
    },
    {
      _id: 28,
      salary: 73687.61,
    },
    {
      _id: 68,
      salary: 16240.49,
    },
    {
      _id: 38,
      salary: 931743.49,
    },
    {
      _id: 76,
      salary: 405746.54,
    },
    {
      _id: 46,
      salary: 135152.53,
    },
    {
      _id: 57,
      salary: 766973.24,
    },
    {
      _id: 12,
      salary: 513079.25,
    },
    {
      _id: 93,
      salary: 161859.47,
    },
    {
      _id: 57,
      salary: 908559.41,
    },
    {
      _id: 98,
      salary: 862531.8,
    },
    {
      _id: 45,
      salary: 808215.21,
    },
    {
      _id: 51,
      salary: 425672.59,
    },
    {
      _id: 72,
      salary: 135587.85,
    },
    {
      _id: 40,
      salary: 246548.16,
    },
    {
      _id: 66,
      salary: 855152.57,
    },
    {
      _id: 1,
      salary: 728490.32,
    },
    {
      _id: 43,
      salary: 805211.96,
    },
    {
      _id: 3,
      salary: 754255.23,
    },
    {
      _id: 66,
      salary: 257974.33,
    },
    {
      _id: 42,
      salary: 766868.15,
    },
    {
      _id: 40,
      salary: 226960.54,
    },
    {
      _id: 39,
      salary: 858302.46,
    },
    {
      _id: 67,
      salary: 224956.95,
    },
    {
      _id: 25,
      salary: 277216.03,
    },
    {
      _id: 25,
      salary: 237233.96,
    },
    {
      _id: 96,
      salary: 791874.46,
    },
    {
      _id: 42,
      salary: 876415.45,
    },
    {
      _id: 74,
      salary: 789185.88,
    },
    {
      _id: 8,
      salary: 53082.37,
    },
    {
      _id: 94,
      salary: 705327.71,
    },
    {
      _id: 67,
      salary: 901010.79,
    },
    {
      _id: 16,
      salary: 67084.93,
    },
    {
      _id: 16,
      salary: 999984.17,
    },
    {
      _id: 15,
      salary: 516657.2,
    },
    {
      _id: 59,
      salary: 117918.66,
    },
    {
      _id: 86,
      salary: 735658.99,
    },
    {
      _id: 65,
      salary: 298694.34,
    },
    {
      _id: 13,
      salary: 923170.55,
    },
    {
      _id: 84,
      salary: 644895.32,
    },
    {
      _id: 27,
      salary: 740229.58,
    },
    {
      _id: 50,
      salary: 560995.07,
    },
    {
      _id: 54,
      salary: 420653.56,
    },
    {
      _id: 39,
      salary: 472870.62,
    },
    {
      _id: 82,
      salary: 354456.7,
    },
    {
      _id: 78,
      salary: 599739.12,
    },
    {
      _id: 95,
      salary: 349343.61,
    },
    {
      _id: 41,
      salary: 847518.96,
    },
    {
      _id: 2,
      salary: 101175.8,
    },
    {
      _id: 39,
      salary: 133324.23,
    },
    {
      _id: 17,
      salary: 954780.38,
    },
    {
      _id: 19,
      salary: 814437.8,
    },
    {
      _id: 21,
      salary: 625763.61,
    },
    {
      _id: 33,
      salary: 411855.58,
    },
    {
      _id: 40,
      salary: 851256.04,
    },
    {
      _id: 76,
      salary: 878257.56,
    },
    {
      _id: 13,
      salary: 546047.67,
    },
    {
      _id: 51,
      salary: 962008.52,
    },
    {
      _id: 46,
      salary: 19619.34,
    },
    {
      _id: 25,
      salary: 185422.83,
    },
    {
      _id: 37,
      salary: 815573.46,
    },
    {
      _id: 57,
      salary: 139195.89,
    },
  ];

  salaries = [
    {
      _id: 57,
      salary: 8764.08,
    },
    {
      _id: 32,
      salary: 8918.49,
    },
    {
      _id: 48,
      salary: 7122.92,
    },
    {
      _id: 59,
      salary: 510.52,
    },
    {
      _id: 35,
      salary: 7772.87,
    },
    {
      _id: 48,
      salary: 6545.4,
    },
    {
      _id: 20,
      salary: 4873.94,
    },
    {
      _id: 34,
      salary: 1892.16,
    },
    {
      _id: 10,
      salary: 553.1,
    },
    {
      _id: 25,
      salary: 6417.57,
    },
    {
      _id: 89,
      salary: 492.62,
    },
    {
      _id: 57,
      salary: 7590.1,
    },
    {
      _id: 31,
      salary: 9362.9,
    },
    {
      _id: 90,
      salary: 2604.05,
    },
    {
      _id: 92,
      salary: 5460.93,
    },
    {
      _id: 90,
      salary: 9167.56,
    },
    {
      _id: 83,
      salary: 6879.81,
    },
    {
      _id: 50,
      salary: 284.31,
    },
    {
      _id: 17,
      salary: 3207.21,
    },
    {
      _id: 49,
      salary: 2709.59,
    },
    {
      _id: 81,
      salary: 4845.37,
    },
    {
      _id: 72,
      salary: 6085.43,
    },
    {
      _id: 54,
      salary: 2699.18,
    },
    {
      _id: 33,
      salary: 9065.56,
    },
    {
      _id: 73,
      salary: 8863.38,
    },
    {
      _id: 24,
      salary: 1015.21,
    },
    {
      _id: 67,
      salary: 1201.14,
    },
    {
      _id: 11,
      salary: 8160.79,
    },
    {
      _id: 38,
      salary: 9941.35,
    },
    {
      _id: 54,
      salary: 6676.69,
    },
    {
      _id: 62,
      salary: 67.03,
    },
    {
      _id: 91,
      salary: 4833.65,
    },
    {
      _id: 96,
      salary: 1951.74,
    },
    {
      _id: 46,
      salary: 9422.83,
    },
    {
      _id: 30,
      salary: 162.49,
    },
    {
      _id: 37,
      salary: 2776.45,
    },
    {
      _id: 17,
      salary: 6229.86,
    },
    {
      _id: 83,
      salary: 4800.51,
    },
    {
      _id: 34,
      salary: 1065.32,
    },
    {
      _id: 77,
      salary: 2670.67,
    },
    {
      _id: 19,
      salary: 2840.17,
    },
    {
      _id: 14,
      salary: 9530.3,
    },
    {
      _id: 25,
      salary: 5493.15,
    },
    {
      _id: 34,
      salary: 2372.72,
    },
    {
      _id: 70,
      salary: 9211.41,
    },
    {
      _id: 96,
      salary: 3101.96,
    },
    {
      _id: 71,
      salary: 1334.96,
    },
    {
      _id: 14,
      salary: 8158.91,
    },
    {
      _id: 70,
      salary: 9516.55,
    },
    {
      _id: 92,
      salary: 7533.36,
    },
    {
      _id: 24,
      salary: 3343.58,
    },
    {
      _id: 65,
      salary: 5179.38,
    },
    {
      _id: 61,
      salary: 4156.59,
    },
    {
      _id: 6,
      salary: 5440.8,
    },
    {
      _id: 10,
      salary: 2797.97,
    },
    {
      _id: 1,
      salary: 7380.75,
    },
    {
      _id: 3,
      salary: 3124.94,
    },
    {
      _id: 99,
      salary: 6582.04,
    },
    {
      _id: 48,
      salary: 4511.43,
    },
    {
      _id: 18,
      salary: 5099.45,
    },
    {
      _id: 7,
      salary: 3323.1,
    },
    {
      _id: 28,
      salary: 4329.99,
    },
    {
      _id: 69,
      salary: 2105.6,
    },
    {
      _id: 68,
      salary: 5271.49,
    },
    {
      _id: 64,
      salary: 6704.58,
    },
    {
      _id: 52,
      salary: 1750.57,
    },
    {
      _id: 97,
      salary: 5661.85,
    },
    {
      _id: 21,
      salary: 1810.61,
    },
    {
      _id: 21,
      salary: 7726.27,
    },
    {
      _id: 8,
      salary: 9422.05,
    },
    {
      _id: 62,
      salary: 7136.01,
    },
    {
      _id: 55,
      salary: 4342.98,
    },
    {
      _id: 43,
      salary: 9246.26,
    },
    {
      _id: 28,
      salary: 368.94,
    },
    {
      _id: 60,
      salary: 6607.57,
    },
    {
      _id: 53,
      salary: 3958.77,
    },
    {
      _id: 63,
      salary: 1773.4,
    },
    {
      _id: 93,
      salary: 5160.55,
    },
    {
      _id: 33,
      salary: 8987.35,
    },
    {
      _id: 56,
      salary: 9053.61,
    },
    {
      _id: 17,
      salary: 5238.71,
    },
    {
      _id: 84,
      salary: 4481.7,
    },
    {
      _id: 43,
      salary: 5970.96,
    },
    {
      _id: 70,
      salary: 9151.44,
    },
    {
      _id: 32,
      salary: 9055.75,
    },
    {
      _id: 80,
      salary: 7076.84,
    },
    {
      _id: 92,
      salary: 8029.96,
    },
    {
      _id: 78,
      salary: 3736.68,
    },
    {
      _id: 55,
      salary: 582.77,
    },
    {
      _id: 60,
      salary: 5112.54,
    },
    {
      _id: 67,
      salary: 1948.05,
    },
    {
      _id: 33,
      salary: 3390.82,
    },
    {
      _id: 83,
      salary: 1680.14,
    },
    {
      _id: 11,
      salary: 8770.54,
    },
    {
      _id: 94,
      salary: 9359.84,
    },
    {
      _id: 94,
      salary: 3886.48,
    },
    {
      _id: 34,
      salary: 903.75,
    },
    {
      _id: 3,
      salary: 2478.41,
    },
    {
      _id: 27,
      salary: 9836.64,
    },
    {
      _id: 20,
      salary: 2285.39,
    },
  ];

  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {}
  pattern = "^[ a-zA-Z;;]*$";
  mixpattern = "^[ a-z0-9_-]*$";
  numberpattern = "^[0-9]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      totalYearsOfExperience: ["", [Validators.required]],
      teamSize: ["", [Validators.required]],
      volumeOfBusinessManged: [
        "",
        [Validators.required, Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],
      ],
      noticePeriod: ["", [Validators.required]],
      salary: ["", [Validators.required]],
      baseSalary: ["", [Validators.required]],
      variableSalary: ["", [Validators.required]],
      otherComponent: ["", [Validators.required]],
      industryServed: ["", [Validators.required]],
    });
    const userData = JSON.parse(
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("user")
        : (sessionStorage.getItem("user") as any)
    );
    this.userId = userData._id;
    this.userForm.patchValue(userData);
  }

  onClick(formValue: any, isValid: boolean) {
    if (isValid) {
      formValue.createdBy = this.userId;
      this.configService
        .updateUser(this.userId, formValue)
        .subscribe((data: any) => {
          if (data.status === 200) {
            localStorage.getItem("rememberMe") === "true"
              ? localStorage.setItem("user", JSON.stringify(data.profile))
              : sessionStorage.setItem("user", JSON.stringify(data.profile));
            this.commonService.alert("success", data.message);
            this.router.navigateByUrl("/profile/roles");
          } else {
            this.commonService.alert("error", data.message);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }

  closeAlert() {
    this.alert = false;
  }

  previousPage() {
    this.router.navigateByUrl("/about-you");
  }
}

function id(id: any, any: any) {
  throw new Error("Function not implemented.");
}
