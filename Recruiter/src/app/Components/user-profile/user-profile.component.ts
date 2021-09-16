import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
// alert:boolean=false;
  userForm !: FormGroup;

  constructor(public formBuilder: FormBuilder,private notifyService : NotificationService) { }
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
      cntNation:['', [Validators.required, Validators.pattern(this.pattern)]],
      prvNation:['', [Validators.required, Validators.pattern(this.pattern)]]
    })  
  }
  
  get getControl()
  {
    return this.userForm.controls;
  }

  showToasterSuccess(){
    this.notifyService.showSuccess("Data submited successfully !!")
}
  
  onSubmit(isValue:boolean,formValue:any)
  {
    console.log(this.userForm);
    // this.alert=true;
    // this.userForm.reset({});
   
  }
  
  // closeAlert(){
  //   this.alert=false;
  // }

}
