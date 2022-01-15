import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateProfileRoutingModule } from "./create-profile-routing.module";
import { CreateProfileComponent } from "./create-profile.component";
import { CertificationComponent } from "../certification/certification.component";
import { CompanyDetailsComponent } from "../company-details/company-details.component";
import { EduDetailsComponent } from "../edu-details/edu-details.component";
import { ExperianceComponent } from "../experiance/experiance.component";
import { JobProfileCardComponent } from "../job-profile-card/job-profile-card.component";
import { PrimarySkillComponent } from "../primary-skill/primary-skill.component";
import { RollprofileComponent } from "../rollprofile/rollprofile.component";
import { SkillProfileComponent } from "../skill-profile/skill-profile.component";
import { WorkExperianceComponent } from "../work-experiance/work-experiance.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { FileUploadModule } from "@iplab/ngx-file-upload";
import { NgxEditorModule } from "ngx-editor";

@NgModule({
  declarations: [
    CreateProfileComponent,
    ExperianceComponent,
    WorkExperianceComponent,
    SkillProfileComponent,
    EduDetailsComponent,
    RollprofileComponent,
    CertificationComponent,
    PrimarySkillComponent,
    CompanyDetailsComponent,
    JobProfileCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CreateProfileRoutingModule,
    FileUploadModule,
    NgxEditorModule
  ],
})
export class CreateProfileModule {}
