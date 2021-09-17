import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { SideListboxComponent } from './Components/side-listbox/side-listbox.component';
import {ExperianceComponent} from './Components/experiance/experiance.component';
import { WorkExperianceComponent } from './Components/work-experiance/work-experiance.component';
import { SkillProfileComponent } from './Components/skill-profile/skill-profile.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EduDetailsComponent } from './Components/edu-details/edu-details.component';
import { RollprofileComponent } from './Components/rollprofile/rollprofile.component';
import { CertificationComponent } from './Components/certification/certification.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SideListboxComponent,
    ExperianceComponent,
    WorkExperianceComponent,
    SkillProfileComponent,
    SidebarComponent,
    DashboardComponent,
    EduDetailsComponent,
    RollprofileComponent,
    CertificationComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
