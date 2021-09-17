import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {
  userForm !: FormGroup;
  alert:boolean=false;
  

  constructor(public formBuilder: FormBuilder) { }
  pattern="^[ a-zA-Z;;]*$";
  mixpattern="^[ a-z0-9_-]*$";
  numberpattern="^[0-9]*$"
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      Title:['', [Validators.required, Validators.pattern(this.pattern)]],
      Team: ['', [Validators.required, Validators.pattern(this.numberpattern)]],
      Business: ['', [Validators.required, Validators.pattern(this.pattern)]],
      Period: ['', [Validators.required, Validators.pattern(this.numberpattern)]],
      Salary:['', [Validators.required, Validators.pattern(this.numberpattern)]],
      Basesalary:['', [Validators.required, Validators.pattern(this.numberpattern)]],
      Variablesal:['', [Validators.required, Validators.pattern(this.numberpattern)]],
      otherCompo:['', [Validators.required, Validators.pattern(this.pattern)]],
      indServed:['', [Validators.required, Validators.pattern(this.pattern)]]
    })  
  }
  
  get getControl()
  {
    return this.userForm.controls;
  }
   
  onSubmit(formValue:any)
  {
    console.log(this.userForm.value);

    this.alert=true;
    this.userForm.reset({});
  }

  
  closeAlert(){
    this.alert=false;
  }
}

