import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrganizationSignUpComponent} from './organization-sign-up.component'
import { OrganizationSignUpRoutingModule } from './organization-sign-up-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [OrganizationSignUpComponent],
  imports: [
    CommonModule,
    OrganizationSignUpRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class OrganizationSignUpModule { }
