import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobtype',
  templateUrl: './jobtype.component.html',
  styleUrls: ['./jobtype.component.scss']
})
export class JobtypeComponent implements OnInit {
  userForm !: FormGroup;
  alert: boolean | undefined;
  allData: any;
  constructor(public formBuilder: FormBuilder) { }

  pattern="^[ a-zA-Z]*$";
  mixpattern="^[ a-z0-9_-]*$";
  numberPattern='^[ %0-9_-]*$';
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
   
      
      managment:['', [Validators.required,Validators.pattern(this.pattern)]],
      technical:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      functional:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      primary:['', [Validators.required,Validators.pattern(this.pattern)]],
      secondary:['', [Validators.required,Validators.pattern(this.pattern)]],
      country:['', [Validators.required,Validators.pattern(this.pattern)]],
      city:['', [Validators.required,Validators.pattern(this.pattern)]],
      salary:['', [Validators.required,Validators.pattern(this.pattern)]],
      inr:['', [Validators.required,Validators.pattern(this.pattern)]],
      fixedsalary:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      amount:['', [Validators.required,Validators.pattern(this.pattern)]],
      noticeperiod:['', [Validators.required,Validators.pattern(this.mixpattern)]],
      othercomp:['', [Validators.required,Validators.pattern(this.mixpattern)]],
      contract:['', [Validators.required,Validators.pattern(this.mixpattern)]]

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
onClick(formValue:any)
{
  console.log(this.userForm.value);
  this.allData=JSON.parse(JSON.stringify(this.userForm.value));
  this.alert=true;
  this.userForm.reset({});

  if(this.userForm.valid){

  }
  else{
    this.userForm.markAllAsTouched();
    this.userForm.updateValueAndValidity();
    
  }
}
closeAlert(){
  this.alert=false;
}

}
