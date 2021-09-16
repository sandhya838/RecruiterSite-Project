import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {
  alert:boolean=false;
  userForm !: FormGroup;

  constructor(public formBuilder: FormBuilder) { }
  pattern="^[ a-zA-Z]*$";
  mixpattern="^[ a-z0-9_-]*$";
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      Title:['', [Validators.required, Validators.pattern(this.pattern)]],
      Team: ['', [Validators.required, Validators.pattern(this.pattern)]],
      Business: ['', [Validators.required, Validators.pattern(this.pattern)]],
      Period: ['', [Validators.required, Validators.pattern(this.mixpattern)]],
      Salary:['', [Validators.required, Validators.pattern(this.mixpattern)]],
      Basesalary:['', [Validators.required, Validators.pattern(this.mixpattern)]],
      Variablesal:['', [Validators.required, Validators.pattern(this.mixpattern)]],
      otherCompo:['', [Validators.required, Validators.pattern(this.pattern)]],
      indServed:['', [Validators.required, Validators.pattern(this.pattern)]]
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

