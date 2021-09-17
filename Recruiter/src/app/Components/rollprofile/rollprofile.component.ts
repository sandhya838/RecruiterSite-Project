import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-rollprofile',
  templateUrl: './rollprofile.component.html',
  styleUrls: ['./rollprofile.component.scss']
})
export class RollprofileComponent implements OnInit {
  Rolesexp!: FormGroup;  
  Management = ['1','2','3'];
  Portfolio = ['1','2','3'];
  Technical = ['1','2','3'];
  constructor(formBuilder: FormBuilder) { 
   this.Rolesexp = formBuilder.group({       
    Management:['', Validators.required],
   });
  }

  ngOnInit(): void {
   
  }

  onSubmit(foemValue:any){
    console.log(this.Rolesexp.value);
 }
 get getControl()
 {
   return this.Rolesexp.controls;
 }
}
