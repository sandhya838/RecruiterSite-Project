import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/authguard";
import { JobProfileCardComponent } from "src/app/Components/job-profile-card/job-profile-card.component";
import { MyProfileComponent } from "src/app/my-profile/my-profile.component";
import { CandidateProfileCardComponent } from "../candidate-profile-card/candidate-profile-card.component";
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
      },
      {
        path:"Candidateprofile",
        component: CandidateProfileCardComponent,
        canActivate:[AuthGuard],
      },
      {
        path: "change-password",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("../change-password/change-password.module").then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../create-profile/create-profile.module").then(
            (m) => m.CreateProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
