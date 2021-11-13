import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/authguard";
import { JobProfileCardComponent } from "src/app/job-profile-card/job-profile-card.component";
import { MyProfileComponent } from "src/app/my-profile/my-profile.component";
import { CertificationComponent } from "../certification/certification.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EduDetailsComponent } from "../edu-details/edu-details.component";
import { ExperianceComponent } from "../experiance/experiance.component";
import { RollprofileComponent } from "../rollprofile/rollprofile.component";
import { SkillProfileComponent } from "../skill-profile/skill-profile.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { WorkExperianceComponent } from "../work-experiance/work-experiance.component";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "jobs",
        component: JobProfileCardComponent,
        canActivate: [AuthGuard],
      },
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
        path: "education-details/:id",
        component: EduDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "role-profile",
        component: RollprofileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "certificate",
        component: CertificationComponent,
        canActivate: [AuthGuard],
      },
      {
        path:"myProfile",
        component:MyProfileComponent,
        canActivate:[AuthGuard],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
