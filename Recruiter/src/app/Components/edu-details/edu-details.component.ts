import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edu-details',
  templateUrl: './edu-details.component.html',
  styleUrls: ['./edu-details.component.scss']
})
export class EduDetailsComponent implements OnInit {
  userForm!: FormGroup;
  alert:boolean=false;
  
  constructor(public formBuilder: FormBuilder) { }

  pattern="^[ a-zA-Z]*$";
  mixpattern="^[ a-z0-9_-]*$";
  numberPattern='^[ %0-9_-]*$';
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
     
      degree: ['', [Validators.required, Validators.minLength(4), Validators.pattern(this.pattern)]],
      institute: ['', [Validators.required, Validators.minLength(4),Validators.pattern(this.pattern)]],
     
      Country:['', [Validators.required,Validators.pattern(this.pattern)]],
      grade:['', [Validators.required,Validators.pattern(this.numberPattern)]],
         })  
  }


  get getControl()
  {
    return this.userForm.controls;
  }
  
  onSubmit(isValue:boolean,formValue:any)
  {
    console.log(this.userForm);

    this.alert=true;
    this.userForm.reset({});
  }

  closeAlert(){
    this.alert=false;
  }
}
