import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationSignUpComponent } from './organization-sign-up.component'
import { OrganizationSignUpRoutingModule } from './organization-sign-up-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "@iplab/ngx-file-upload";


@NgModule({
  declarations: [OrganizationSignUpComponent],
  imports: [
    CommonModule,
    OrganizationSignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ]
})
export class OrganizationSignUpModule { }
