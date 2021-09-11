import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  userForm !: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm= this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required,Validators.minLength(4)]]
    })  
  }
  
  get getControl()
  {
    return this.userForm.controls;
  }
  
  onSubmit(isValue:boolean,formValue:any)
  {
    console.log(this.userForm);
  }
  
}
