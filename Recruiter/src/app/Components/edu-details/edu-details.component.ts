import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { ConfigService } from 'src/app/config.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-edu-details',
  templateUrl: './edu-details.component.html',
  styleUrls: ['./edu-details.component.scss']
})
export class EduDetailsComponent implements OnInit {
  userForm!: FormGroup;
  alert:boolean=false;
  allData:any;
  currentTutorial = null;

  // selectedPolicy: User = {
  //   _id:null,
  //   first_Name: null,
  //   first_Name:null,
  //   middle_Name:null, 
  //   lastName:null,
  //   Country:  null,
  //   State:null,
  //     City:null,
  //     Nation:null,
  //     currentNationality:null,
  //     previousNationality:null
  // }
  
  constructor(public formBuilder: FormBuilder,private configService:ConfigService, private route: ActivatedRoute) { }

  pattern="^[ a-zA-Z]*$";
  mixpattern="^[ a-z0-9_-]*$";
  numberPattern='^[ %0-9_-]*$';
  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
     
      degree: ['', [Validators.required, Validators.minLength(4), Validators.pattern(this.pattern)]],
      institute: ['', [Validators.required, Validators.minLength(4),Validators.pattern(this.pattern)]],
      Country:['', [Validators.required,Validators.pattern(this.pattern)]],
      grade:['', [Validators.required,Validators.pattern(this.numberPattern)]],
      month:['',[Validators.required,Validators.pattern(this.pattern)]],
      year:['',[Validators.required,Validators.pattern(this.numberPattern)]]

         })  
  }


  get getControl()
  {
    return this.userForm.controls;
  }
  
  getTutorial(): void {
    this.configService.get(this.route.snapshot.params.id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
        
  }

  onClick(formValue:any)
  {
    console.log(this.userForm.value);

    this.allData=JSON.parse(JSON.stringify(this.userForm.value));
    this.alert=true;
    

    
      if(this.userForm.valid){
        this.configService.updateUser(this.userForm.value.id,this.userForm.value).subscribe(()=>{
          console.log("form submited");
        })
      }
     
    else{
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
      
    }
    this.userForm.reset({});
  }

  updatePublished(): void {
    console.log(this.route.snapshot.params.id);
  };

  closeAlert(){
    this.alert=false;
  }
}


function id(id: any) {
  throw new Error('Function not implemented.');
}

