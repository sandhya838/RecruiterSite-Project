import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { SigninService } from "src/app/signin.service";
import { User } from "src/app/user";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  alert: boolean = false;
  signIn: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });
  allData: any;
  credentials: any = {};
  msg = "";
  isPassword = false;

  constructor(
    public formBuilder: FormBuilder,
    private signService: SigninService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  get getControl() {
    return this.signIn.controls;
  }

<<<<<<< HEAD
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
        window.location.href="/about-you";
  })}
  else{
    this.msg="Fields Are Empty";
=======
  loginSubmit() {
    if (this.signIn.valid) {
      this.signService.login(this.credentials).subscribe(
        (response: any) => {
          if (response.status === 200) {
            sessionStorage.setItem("token", response.token);
            sessionStorage.setItem("user", JSON.stringify(response.user));
            this.router.navigate(["/dashboard"]);
          } else {
          }
        },
        (err) => {
          console.log(err.message);
        }
      );
    } else {
      this.signIn.markAllAsTouched();
    }
  }
>>>>>>> e5a5b88a8aa48a4d8cb471f88818a8ed7ff2c23a

  closeAlert() {
    this.alert = false;
  }
  showPassword() {
    this.isPassword = !this.isPassword;
  }
}
