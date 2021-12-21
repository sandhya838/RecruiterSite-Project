import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./Components/sign-up/sign-up.component";
import { SignInComponent } from "./Components/sign-in/sign-in.component";
import { PrimarySkillComponent } from "./Components/primary-skill/primary-skill.component";
import { LoginguardGuard } from "./loginguard.guard";
import { JobProfileCardComponent } from "./Components/job-profile-card/job-profile-card.component";
import { OrganizationSignInComponent } from "./Components/organization-sign-in/organization-sign-in.component";
import { ForgotPasswordComponent } from "./Components/forgot-password/forgot-password.component";
import { OrganizationSignUpComponent } from "./Components/organization-sign-up/organization-sign-up.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { FeedbackFormComponent } from "./Components/feedback-form/feedback-form.component";
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
  { path: "**", pathMatch: "full", component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
