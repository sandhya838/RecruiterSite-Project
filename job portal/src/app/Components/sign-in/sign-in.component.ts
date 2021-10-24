import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup} from '@angular/forms';
import { SigninService } from 'src/app/signin.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  alert:boolean=false;
  signIn !: FormGroup;
  allData:any;
  credentials: any = {};
msg='';

  constructor(public formBuilder: FormBuilder, private signService: SigninService) { }
  pattern="^[ a-zA-Z1-9/@]*$";
  ngOnInit(): void {
    this.signIn= this.formBuilder.group({
      email:['', [Validators.required]],
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
  
loginSubmit(){
  // if(this.signIn.valid){
  //   this.signService.login(this.signIn.value).subscribe(user=>{
  //     // if(){
  //       console.log(user);
        
  //   })
  // }
  if((this.credentials.email!='' && this.credentials.password!='')&& (this.credentials.email!=null && this.credentials.password!=null) ) 
  {
    this.signService.generateToken(this.credentials).subscribe(
      (response:any)=>{
     
        localStorage.setItem('token', response.token);
        window.location.href="/priSkill";
  })}
  else{
    this.msg="Fields Are Empty";

  }
}
  
  closeAlert(){
    this.alert=false;
  }


}
