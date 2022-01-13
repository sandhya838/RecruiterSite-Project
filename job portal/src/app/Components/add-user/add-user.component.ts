import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  isPassword: boolean = false;
  addUser!:FormGroup;

 
  constructor( public formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
    this.addUser= this.formBuilder.group({
      firstName: ["", [Validators.required]],
      middleName: [""],
      lastName:["", [Validators.required]],
      email:["", [Validators.required, Validators.email]],
      mobileNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("[5-9]{1}[0-9]{9}"),
        ],
      ],
      password: ["", [Validators.required]],
    });
  }
  get getControl() {
    return this.addUser.controls;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }
  onClick(isValid: boolean, formValue: any) {
    console.log("isValid", isValid, this.addUser!.errors, formValue);
  }

  


}
