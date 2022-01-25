import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { AppRoutingModule } from "./app-routing.module";
import { ToastrModule } from "ngx-toastr";
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AppComponent } from "./app.component";
import { UserProfileComponent } from "./Components/user-profile/user-profile.component";
import { SideListboxComponent } from "./Components/side-listbox/side-listbox.component";
import { SignInComponent } from "./Components/sign-in/sign-in.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { AgGridModule } from "ag-grid-angular";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { TokenInterceptorService } from "./interceptor/token-interceptor-service.service";
import { QRCodeModule } from "angularx-qrcode";
import { ErrorInterceptor } from "./services/error.interceptor";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OrganizationSignInComponent } from "./Components/organization-sign-in/organization-sign-in.component";
import { ForgotPasswordComponent } from "./Components/forgot-password/forgot-password.component";
import { CandidateProfileCardComponent } from "./Components/candidate-profile-card/candidate-profile-card.component";

import { CandidateProfileSummaryComponent } from "./Components/candidate-profile-summary/candidate-profile-summary.component";
import { JobPostingComponent } from "./Components/job-posting/job-posting.component";
import { OrganizationPageComponent } from "./Components/organization-page/organization-page.component";
import { JobListingComponent } from "./Components/job-listing/job-listing.component";
import { JobViewComponent } from './Components/job-view/job-view.component';
import { NgxEditorModule } from "ngx-editor";
import { FeedbackFormComponent } from './Components/feedback-form/feedback-form.component';
import { DashboardRecruiterComponent } from './Components/dashboard-recruiter/dashboard-recruiter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SideListboxComponent,
    SignInComponent,
    PageNotFoundComponent,
    OrganizationSignInComponent,
    ForgotPasswordComponent,

    CandidateProfileCardComponent,
    CandidateProfileSummaryComponent,
    JobPostingComponent,
    JobListingComponent,
    OrganizationPageComponent,
    JobViewComponent,
    FeedbackFormComponent,
    DashboardRecruiterComponent,
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
    AngularMultiSelectModule,
    QRCodeModule,
    NgbModule,
    NgxEditorModule,
    NgxStarRatingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
