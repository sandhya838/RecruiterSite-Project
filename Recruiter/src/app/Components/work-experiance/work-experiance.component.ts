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
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      designation:['', [Validators.required]],
      role:['', [Validators.required]],
      project:['', [Validators.required]],
      
})  

  }



  onSubmit(isValue:boolean,formValue:any)
  {
    console.log(this.userForm);

    this.alert=true;
    this.userForm.reset({});
  }
  get getControl()
  {
    return this.userForm.controls;
  }
  closeAlert(){
    this.alert=false;
  }
}
