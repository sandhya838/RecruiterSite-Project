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
         this.configService.getPost().subscribe((res)=>{
            console.log(res);
            
          }) 
  }


  get getControl()
  {
    return this.userForm.controls;
  }
  
  

  onClick(formValue:any)
  {
    console.log(this.userForm.value);

    this.allData=JSON.parse(JSON.stringify(this.userForm.value));
    this.alert=true;
    
console.log(localStorage.getItem('ID'));
    var RetriveID= localStorage.getItem('ID');
    
      if(this.userForm.valid){
        const educationDetails=[];
        const tempFormatedData={ 
          degree:'',
          Country:'',
          institute:'',
          grade:'',
          yearofPassing:{
            month:'',
            year:'',
          }
        };
        tempFormatedData.degree=formValue.degree;
        tempFormatedData.Country=formValue.Country;
        tempFormatedData.institute=formValue.institute;
        tempFormatedData.grade=formValue.grade;
        tempFormatedData.yearofPassing.month=formValue.month;
        tempFormatedData.yearofPassing.year=formValue.year;
        educationDetails.push(tempFormatedData)
        this.configService.updateUser(RetriveID,tempFormatedData).subscribe((res)=>{
          if(res.status===200){
            console.log(res.message);
            
          }else{
            console.log('response');
            
          }
          console.log("form submited");
        },
        error=>{
          console.log(error);
          
        }
        )
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


