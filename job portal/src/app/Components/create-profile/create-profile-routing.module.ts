import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/helper/guard/authguard";
import { CertificationComponent } from "../certification/certification.component";
import { EduDetailsComponent } from "../edu-details/edu-details.component";
import { ExperianceComponent } from "../experiance/experiance.component";
import { RollprofileComponent } from "../rollprofile/rollprofile.component";
import { SkillProfileComponent } from "../skill-profile/skill-profile.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { WorkExperianceComponent } from "../work-experiance/work-experiance.component";
import { CreateProfileComponent } from "./create-profile.component";

const routes: Routes = [
  { path: "", redirectTo: "about-you", pathMatch: "full" },
  {
    path: "",
    component: CreateProfileComponent,
    children: [
      {
        path: "about-you",
        component: UserProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "skills",
        component: SkillProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "experience",
        component: ExperianceComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "work-experience",
        component: WorkExperianceComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "education-details",
        component: EduDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "roles",
        component: RollprofileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "certificates",
        component: CertificationComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProfileRoutingModule {}
