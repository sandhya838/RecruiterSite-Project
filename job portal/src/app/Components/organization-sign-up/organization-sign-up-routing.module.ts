import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationSignUpComponent } from './organization-sign-up.component';

const routes: Routes = [
  {
    path:'', component: OrganizationSignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationSignUpRoutingModule { }
