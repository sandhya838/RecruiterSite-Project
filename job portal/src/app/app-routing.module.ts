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
import { LoginguardGuard } from "./loginguard.guard";
import { JobProfileCardComponent } from "./Components/job-profile-card/job-profile-card.component";
import { OrganizationSignInComponent } from "./Components/organization-sign-in/organization-sign-in.component";
import { ForgotPasswordComponent } from "./Components/forgot-password/forgot-password.component";
import { OrganizationSignUpComponent } from "./Components/organization-sign-up/organization-sign-up.component";
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "", redirectTo: "/organization-signin", pathMatch: "full" },
  { path: "login", component: SignInComponent },
  { path: "organization-signin", component: OrganizationSignInComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
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
  {
    path: "organization-sign-up",
    loadChildren: () =>
      import("./Components/organization-sign-up/organization-sign-up.module").then((m) => m.OrganizationSignUpModule),
  },
  // { path: "orglogin", component: OrganizationSignInComponent },
  // {
  //   path: "orgsign-up",
  //   loadChildren: () =>
  //     import("./Components/organization-sign-up").then((m) => m.SignUpModule),
  // },
  { path: "OrganizationSignUpComponent", component: OrganizationSignUpComponent },
  { path: "signUp", component: SignUpComponent },
  // {path:"priSkill",component:PrimarySkillComponent, canActivate:[AuthGuard]}
  // {path: '**', redirectTo: 'PageNotFoundComponent'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
