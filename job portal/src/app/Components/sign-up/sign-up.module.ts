import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignUpRoutingModule } from "./sign-up-routing.module";
import { SignUpComponent } from "./sign-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "@iplab/ngx-file-upload";

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
})
export class SignUpModule {}
