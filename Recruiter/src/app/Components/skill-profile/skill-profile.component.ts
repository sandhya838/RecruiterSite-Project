import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-profile',
  templateUrl: './skill-profile.component.html',
  styleUrls: ['./skill-profile.component.scss']
})
export class SkillProfileComponent implements OnInit {
  alert:boolean=false;
  userForm !: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      technical:['', [Validators.required]],
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



  onSubmit(formValue:any)
  {
    console.log(this.userForm.value);

    
    this.alert=true;
    this.userForm.reset({})
  }
  get getControl()
  {
    return this.userForm.controls;

    this.alert=true;
    this.userForm.reset({});
  }
  
  closeAlert(){
    this.alert=false;
  }
  
}


