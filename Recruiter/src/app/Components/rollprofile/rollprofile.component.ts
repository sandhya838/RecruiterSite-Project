import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-rollprofile',
  templateUrl: './rollprofile.component.html',
  styleUrls: ['./rollprofile.component.scss']
})
export class RollprofileComponent implements OnInit {
  Rolesexp!: FormGroup;
  alert:boolean=false;
  allData:any;  
  Management = ['1','2','3'];
  Portfolio = ['1','2','3'];
  Technical = ['1','2','3'];
  formBuilder: any;
  constructor(formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.Rolesexp = this.formBuilder.group({       
      roleManagemen:['', Validators.required],
      Portfolio:['', Validators.required],
      technical:['', Validators.required],
      functional:['', Validators.required],
      roleTechnical:['', Validators.required],
      architect:['', Validators.required],
      techLead:['', Validators.required],
      developer:['', Validators.required],
      roleFunctional:['', Validators.required],
      sme:['', Validators.required],
      leadcon:['', Validators.required],
      consultant:['', Validators.required]
     });
   
  }

  onClick(formValue:any){
    console.log(this.Rolesexp.value);
    this.allData=JSON.parse(JSON.stringify(this.Rolesexp.value));
    this.alert=true;
    this.Rolesexp.reset({});

    if(this.Rolesexp.valid){

    }
    else{
      this.Rolesexp.markAllAsTouched();
      this.Rolesexp.updateValueAndValidity();
      
    }
 }
 get getControl()
 {
   return this.Rolesexp.controls;
 }
 closeAlert(){
  this.alert=false;
}
}
