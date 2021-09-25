import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-experiance',
  templateUrl: './work-experiance.component.html',
  styleUrls: ['./work-experiance.component.scss']
})
export class WorkExperianceComponent implements OnInit {
  userForm !: FormGroup;
  alert:boolean=false;
  allData:any;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      designation:['', [Validators.required]],
      joinmonth:['',[Validators.required]],
      joinyear:['',[Validators.required]],
      jointomonth:['',[Validators.required]],
      jointoyear:['',[Validators.required]],
      skill1:['',[Validators.required]],
      skill2:['',[Validators.required]],
      skill3:['',[Validators.required]],
      skill4:['',[Validators.required]],
      role:['', [Validators.required]],
      deliverables:['', [Validators.required]],
      
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
