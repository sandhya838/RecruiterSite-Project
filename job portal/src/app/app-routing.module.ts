import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./Components/sign-up/sign-up.component";
import { SignInComponent } from "./Components/sign-in/sign-in.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
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
  // {path:"priSkill",component:PrimarySkillComponent, canActivate:[AuthGuard]}
  { path: "**", pathMatch: "full", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
