import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  Certificate!: FormGroup;
  allData: any;
  alert: boolean=false;

  constructor(public formBuilder: FormBuilder ){}

  ngOnInit(): void {
    this.Certificate= this.formBuilder.group({
      CertificationName: ['', [Validators.required]],
      certifiedMonth: ['', [Validators.required]],
      certifiedYear:['', [Validators.required]]
    })
  }
  get getControl(){
    return this.Certificate.controls;
  }
  onClick(formValue:any){
    console.log(this.Certificate.value);
    this.allData=JSON.parse(JSON.stringify(this.Certificate.value));
    this.alert=true;
    this.Certificate.reset({});

    if(this.Certificate.valid){

    }
    else{
      this.Certificate.markAllAsTouched();
      this.Certificate.updateValueAndValidity();
      
    }
  }
  closeAlert(){
    this.alert=false;
  }
}

