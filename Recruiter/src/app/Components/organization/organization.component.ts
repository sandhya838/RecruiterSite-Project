import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  userForm !: FormGroup;
  alert: boolean | undefined;
  allData: any;
  constructor(public formBuilder: FormBuilder) { }
  pattern="^[ a-zA-Z]*$";
  mixpattern="^[ a-z0-9_-]*$";
  numberPattern='^[ %0-9_-]*$';
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
   
      companyName: ['', [Validators.required ,Validators.pattern(this.pattern)]],
      companyIntro: ['', [Validators.required,Validators.pattern(this.pattern)]],
     
      managment:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      technical:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      functional:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      primary:['', [Validators.required,Validators.pattern(this.pattern)]],
      secondary:['', [Validators.required,Validators.pattern(this.pattern)]],
      country:['', [Validators.required,Validators.pattern(this.mixpattern)]],
      city:['', [Validators.required,Validators.pattern(this.pattern)]],
      contract:['', [Validators.required,Validators.pattern(this.numberPattern)]]
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
