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
import { MyProfileComponent } from "./my-profile/my-profile.component";
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: SignInComponent },
  {
    path: "sign-up",
    loadChildren: () =>
      import("./Components/sign-up/sign-up.module").then((m) => m.SignUpModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./Components/admin/admin.module").then((m) => m.AdminModule),
  },

  
  { path: "signUp", component: SignUpComponent },
  { path: "sidebar", component: SidebarComponent, canActivate: [AuthGuard] },
<<<<<<< HEAD
  {
    path: "jobs",
    component: JobProfileCardComponent,
    canActivate: [AuthGuard],
  },
  {
    path:"myProfile",
    component:MyProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"jobs",
    component:JobProfileCardComponent,
    canActivate:[AuthGuard]
  }
=======
>>>>>>> 3b7c7759527b0e67da72c7732a242abfa58e10ba
  // {path:"priSkill",component:PrimarySkillComponent, canActivate:[AuthGuard]}
  // {path: '**', redirectTo: 'PageNotFoundComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
