import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from ".//Components/user-profile/user-profile.component";
import { ExperianceComponent } from ".//Components/experiance/experiance.component";
import { SkillProfileComponent } from ".//Components/skill-profile/skill-profile.component";
import { WorkExperianceComponent } from ".//Components/work-experiance/work-experiance.component";
import { EduDetailsComponent } from ".//Components/edu-details/edu-details.component";
import { RollprofileComponent } from "./Components/rollprofile/rollprofile.component";
import { CertificationComponent } from "./Components/certification/certification.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { SignUpComponent } from "./Components/sign-up/sign-up.component";
import { SignInComponent } from "./Components/sign-in/sign-in.component";
import { PrimarySkillComponent } from "./Components/primary-skill/primary-skill.component";
import { AuthGuard } from "./authguard";
import { SidebarComponent } from "./Components/sidebar/sidebar.component";
import { LoginguardGuard } from "./loginguard.guard";
import { JobProfileCardComponent } from "./job-profile-card/job-profile-card.component";
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: SignInComponent },
  {
    path: "sign-up",
    loadChildren: () =>
      import("./Components/sign-up/sign-up.module").then((m) => m.SignUpModule),
  },
  {
    path:'',
    loadChildren:()=>import('./Components/admin/admin.module').then((m)=>m.AdminModule)
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
  { path: "signUp", component: SignUpComponent },
  { path: "sidebar", component: SidebarComponent, canActivate: [AuthGuard] },
  {
    path: "jobs",
    component: JobProfileCardComponent,
    canActivate: [AuthGuard],
  },
  // {path:"priSkill",component:PrimarySkillComponent, canActivate:[AuthGuard]}
  // {path: '**', redirectTo: 'PageNotFoundComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
