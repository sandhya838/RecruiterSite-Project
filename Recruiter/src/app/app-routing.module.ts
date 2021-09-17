import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{UserProfileComponent } from './/Components/user-profile/user-profile.component';
import {ExperianceComponent} from './/Components/experiance/experiance.component';
import{ SkillProfileComponent} from './/Components/skill-profile/skill-profile.component';
import {WorkExperianceComponent } from './/Components/work-experiance/work-experiance.component';
import { EduDetailsComponent} from './/Components/edu-details/edu-details.component';
import { RollprofileComponent } from './Components/rollprofile/rollprofile.component';

const routes: Routes = [
  {path:'',component:UserProfileComponent},
  {path:'skills',component:SkillProfileComponent},
  {path:'experience',component:ExperianceComponent},
  {path:'work-experience',component:WorkExperianceComponent},
  {path:'education-details',component: EduDetailsComponent},
  {path:'role-profile',component:RollprofileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
