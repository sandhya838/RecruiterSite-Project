import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  alert:boolean=false;
  signUp !: FormGroup;
  allData:any;
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
      fullname:['', [Validators.required]],
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      image: new FormControl(null, [Validators.required])
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
  
  closeAlert(){
    this.alert=false;
  }


}


