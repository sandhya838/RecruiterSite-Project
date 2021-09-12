import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userForm !: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      Title:['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      middleName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required,Validators.minLength(4)]],
      Country:['', [Validators.required]],
      State:['', [Validators.required]],
      City:['', [Validators.required]],
      Nation:['', [Validators.required]],
      cntNation:['', [Validators.required]],
      prvNation:['', [Validators.required]]
    })  
  }
  
  get getControl()
  {
    return this.userForm.controls;
  }
  
  onSubmit(isValue:boolean,formValue:any)
  {
    console.log(this.userForm);
  }
  

}
