import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { JobProfileCardComponent } from "src/app/job-profile-card/job-profile-card.component";
import { CertificationComponent } from "../certification/certification.component";
import { CompanyDetailsComponent } from "../company-details/company-details.component";
import { EduDetailsComponent } from "../edu-details/edu-details.component";
import { ExperianceComponent } from "../experiance/experiance.component";
import { PrimarySkillComponent } from "../primary-skill/primary-skill.component";
import { RollprofileComponent } from "../rollprofile/rollprofile.component";
import { SkillProfileComponent } from "../skill-profile/skill-profile.component";
import { WorkExperianceComponent } from "../work-experiance/work-experiance.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { HttpClientModule } from "@angular/common/http";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
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
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    AngularMultiSelectModule,
  ],
})
export class AdminModule {}
