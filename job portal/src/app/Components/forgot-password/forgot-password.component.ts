import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  

  constructor(public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }
  get getControl() {
    return this.orgsignIn.controls;
  }
  loginSubmit() {
    if (this.orgsignIn.valid) {
      
    }
  }
  
}
