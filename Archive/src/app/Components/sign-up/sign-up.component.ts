import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  alert:boolean=false;
  signIn !: FormGroup;
  allData:any;
  file: File | null = null

  constructor(public formBuilder: FormBuilder) { }
  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0)
    }
  }
  pattern="^[ a-zA-Z]*$";
  ngOnInit(): void {
    this.signIn= this.formBuilder.group({
      fullname:['', [Validators.required]],
      number:['', [Validators.required, Validators.pattern(this.pattern)]],
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      image: new FormControl(null, [Validators.required, requiredFileType('png')])
    })  
  }
  
  get getControl()
  {
    return this.signIn.controls;
  }

//   showToasterSuccess(){
//     this.notifyService.showSuccess("Data submited successfully !!")
// }
  
  onClick(formValue:any)
  {
    console.log(this.signIn.value);

    this.allData=JSON.parse(JSON.stringify(this.signIn.value));
    this.alert=true;
    this.signIn.reset({});

    if(this.signIn.valid){

    }
    else{
      this.signIn.markAllAsTouched();
      this.signIn.updateValueAndValidity();
      
    }
   
  }
  
  closeAlert(){
    this.alert=false;
  }


}
function requiredFileType(arg0: string): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

