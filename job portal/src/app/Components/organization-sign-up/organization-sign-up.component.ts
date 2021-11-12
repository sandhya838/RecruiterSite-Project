import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { SignupService } from 'src/app/signin.service';

@Component({
  selector: 'app-organization-sign-up',
  templateUrl: './organization-sign-up.component.html',
  styleUrls: ['./organization-sign-up.component.scss']
})
export class OrganizationSignUpComponent implements OnInit {

  

  alert:boolean=false;
  signUp !: FormGroup;
  allData:any;
  credentials: any = {};
msg='';

  file: File | null = null

  constructor(public formBuilder: FormBuilder) { }
  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0)
    }
  }
  pattern="^[ a-zA-Z]*$";
  numberPattern="[0-9]";
  mixPattern="[a-zA-Z0-9]"
  ngOnInit(): void {
    this.signUp= this.formBuilder.group({
      organizationname:['', [Validators.required]],
      personName:['', [Validators.required]],
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      number:['', [Validators.required]]
      // image: new FormControl(null, [Validators.required])
    })  
  }
  
  get getControl()
  {
    return this.signUp.controls;
  }

//   showToasterSuccess(){
//     this.notifyService.showSuccess("Data submited successfully !!")
// }
  
  onClick(formValue:any)
  {
    console.log(this.signUp.value);

    this.allData=JSON.parse(JSON.stringify(this.signUp.value));
    this.alert=true;
    this.signUp.reset({});

    if(this.signUp.valid){

    }
    else{
      this.signUp.markAllAsTouched();
      this.signUp.updateValueAndValidity();
      
    }
   
  }
//   if((this.credentials.email!='' && this.credentials.password!='')&& (this.credentials.email!=null && this.credentials.password!=null) ) 
//   {
//     this.signService.generateToken(this.credentials).subscribe(
//       (response:any)=>{
     
//         localStorage.setItem('token', response.token);
//         window.location.href="/about-you";
//   })}
//   else{
//     this.msg="Fields Are Empty";

//   }
// }
  
  closeAlert(){
    this.alert=false;
  }


}