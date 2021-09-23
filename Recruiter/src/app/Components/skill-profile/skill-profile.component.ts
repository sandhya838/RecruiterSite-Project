import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-profile',
  templateUrl: './skill-profile.component.html',
  styleUrls: ['./skill-profile.component.scss']
})
export class SkillProfileComponent implements OnInit {
  userForm !: FormGroup;
  alert:boolean=false;
  allData:any;
  multiselect:any;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      tech3:['', [Validators.required]],
      tech:['', [Validators.required]],
      tech1:['', [Validators.required]],
      tech2:['', [Validators.required]],
      functional:['', [Validators.required]],
      functional1:['', [Validators.required]],
      functional2:['', [Validators.required]],
      functional3:['', [Validators.required]],
      sys:['', [Validators.required]],
      sys1:['', [Validators.required]],
      sys2:['', [Validators.required]],
      sys3:['', [Validators.required]],

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


