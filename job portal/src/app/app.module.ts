import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AgGridModule } from 'ag-grid-angular';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { PrimarySkillComponent } from './Components/primary-skill/primary-skill.component';
import { CompanyDetailsComponent } from './Components/company-details/company-details.component';
import { TokenInterceptorService } from './token-interceptor-service.service';
import { JobProfileCardComponent } from './job-profile-card/job-profile-card.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
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
    SignInComponent,
    PageNotFoundComponent,
    PrimarySkillComponent,
    CompanyDetailsComponent,
    JobProfileCardComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgGridModule.withComponents(null),
    HttpClientModule,
    AngularMultiSelectModule
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, 
    useClass: TokenInterceptorService, 
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
