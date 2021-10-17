import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  alert:boolean=false;
  signIn !: FormGroup;
  allData:any;


  constructor(public formBuilder: FormBuilder) { }
  pattern="^[ a-zA-Z]*$";
  ngOnInit(): void {
    this.signIn= this.formBuilder.group({
      Signin:['', [Validators.required]],
      password:['', [Validators.required, Validators.pattern(this.pattern)]]
      
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
