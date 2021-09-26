import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { ConfigService } from 'src/app/config.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
alert:boolean=false;
  userForm !: FormGroup;
  allData:any;

  constructor(public formBuilder: FormBuilder,private notifyService : NotificationService,private configService:ConfigService) { }
  pattern="^[ a-zA-Z]*$";
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      title:['', [Validators.required]],
      firstName:['', [Validators.required, Validators.pattern(this.pattern)]],
      middleName:['', [Validators.required, Validators.pattern(this.pattern)]],
      lastName:['', [Validators.required, Validators.pattern(this.pattern)]],
      Country:['', [Validators.required, Validators.pattern(this.pattern)]],
      State:['', [Validators.required, Validators.pattern(this.pattern)]],
      City:['', [Validators.required, Validators.pattern(this.pattern)]],
      Nation:['', [Validators.required, Validators.pattern(this.pattern)]],
      currentNationality:['', [Validators.required, Validators.pattern(this.pattern)]],
      previousNationality:['', [Validators.required, Validators.pattern(this.pattern)]]
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
      this.configService.addUser(this.userForm.value).subscribe(data=> {
        console.log("form submited");
        
      },error=>{
        console.log(error)
      })
      this.userForm.reset({});
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
