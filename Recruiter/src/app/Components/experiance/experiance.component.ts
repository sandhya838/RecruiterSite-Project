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
  allData:any;
  

  constructor(public formBuilder: FormBuilder) { }
  pattern="^[ a-zA-Z;;]*$";
  mixpattern="^[ a-z0-9_-]*$";
  numberpattern="^[0-9]*$"
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      totalYearsOfExperience:['', [Validators.required, Validators.pattern(this.mixpattern)]],
      timeSize: ['', [Validators.required, Validators.pattern(this.numberpattern)]],
      volumeOfBusinessManged: ['', [Validators.required, Validators.pattern(this.pattern)]],
      noticePeriod: ['', [Validators.required, Validators.pattern(this.numberpattern)]],
      salary:['', [Validators.required, Validators.pattern(this.numberpattern)]],
      baseSalary:['', [Validators.required, Validators.pattern(this.numberpattern)]],
      variableSalary:['', [Validators.required, Validators.pattern(this.numberpattern)]],
      otherComponent:['', [Validators.required, Validators.pattern(this.pattern)]],
      indServed:['', [Validators.required, Validators.pattern(this.pattern)]]
    })  
  }
  
  get getControl()
  {
    return this.userForm.controls;
  }
   
  onClick(formValue:any)
  {
    console.log(this.userForm.value);
    this.allData=JSON.parse(JSON.stringify(this.userForm.value));
    


    
    if(this.userForm.valid){

    }
    else{
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
      
    }
    this.alert=true;
    this.userForm.reset({});
  }

  
  closeAlert(){
    this.alert=false;
  }
}

