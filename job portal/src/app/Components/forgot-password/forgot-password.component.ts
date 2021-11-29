import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { CommonService } from 'src/app/services/common.service';

import { ForgotResetService } from 'src/app/services/forgot-reset.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  [x: string]: any;

  alert: boolean = false;
  orgsignIn: FormGroup = this.formBuilder.group({
    email:  [null, [Validators.required]],
  
  });
  

  constructor(public formBuilder: FormBuilder, private forgotResetService:ForgotResetService, private commonService: CommonService ) { }

  ngOnInit(): void {
  }
  get getControl() {
    return this.orgsignIn.controls;
  }
  loginSubmit(formValue:any,isValid:any) {
    console.log(formValue)
    if (isValid) {
      this. forgotResetService.forgetPassword(data).subscribe((response: any) =>{
        if (response.status === 200) {
          this.router.navigate(["/organization-sign-in"]);
          this.commonService.alert("success", response.message);
        } else {
          this.commonService.alert("error", response.message);
        }
      },(error: any)=> {
        console.log(error);
      }
    );

      
    
  } else {
    this.signUp.markAllAsTouched();
  }

  }
}
