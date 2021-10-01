import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-rollprofile',
  templateUrl: './rollprofile.component.html',
  styleUrls: ['./rollprofile.component.scss']
})
export class RollprofileComponent implements OnInit {
  userForm!: FormGroup;
  allData:any;
  alert: boolean=false;;
  
  constructor(public formBuilder: FormBuilder) {}
  numberPattern='^[ %0-9_-]*$';
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
     
      managment: ['', [Validators.required, Validators.pattern(this.numberPattern)]],
      PortfolioManagement: ['', [Validators.required, Validators.pattern(this.numberPattern)]],
      AccountManagement: ['', [Validators.required, Validators.pattern(this.numberPattern)]],
      ProjectManagement: ['', [Validators.required, Validators.pattern(this.numberPattern)]],
      technical: ['', [Validators.required,Validators.pattern(this.numberPattern)]],
      Architect: ['', [Validators.required,Validators.pattern(this.numberPattern)]],
      TechLead: ['', [Validators.required,Validators.pattern(this.numberPattern)]],
      developer: ['', [Validators.required,Validators.pattern(this.numberPattern)]],
      functional:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      sme: ['', [Validators.required,Validators.pattern(this.numberPattern)]],
      leadcon: ['', [Validators.required,Validators.pattern(this.numberPattern)]],
      consultant: ['', [Validators.required,Validators.pattern(this.numberPattern)]],

      // grade:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      // month:['',[Validators.required,Validators.pattern(this.numberPattern)]],
      // year:['',[Validators.required,Validators.pattern(this.numberPattern)]]

         })  
  }
  get getControl()
  {
    return this.userForm.controls;
  }
  

//   showToasterSuccess(){
//     this.notifyService.showSuccess("Data submited successfully !!")
// }
  
  onClick(formValue:any)
  {
    console.log(this.userForm.value);

    this.allData=JSON.parse(JSON.stringify(this.userForm.value));
    this.alert=true;
    

    if(this.userForm.valid){

    }
    else{
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
      
    }
    this.userForm.reset({});
  }
  
  closeAlert(){
    this.alert=false;
  }
 
}
