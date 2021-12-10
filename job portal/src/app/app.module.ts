import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { AppRoutingModule } from "./app-routing.module";
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app.component";
import { UserProfileComponent } from "./Components/user-profile/user-profile.component";
import { SideListboxComponent } from "./Components/side-listbox/side-listbox.component";
import { SignInComponent } from "./Components/sign-in/sign-in.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { AgGridModule } from "ag-grid-angular";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { TokenInterceptorService } from "./token-interceptor-service.service";
import { CandidateProfileCardComponent } from './Components/candidate-profile-card/candidate-profile-card.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ErrorInterceptor } from "./services/error.interceptor";
import { CandidateProfileSummaryComponent } from './Components/candidate-profile-summary/candidate-profile-summary.component';
import { JobPostingComponent } from './Components/job-posting/job-posting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SideListboxComponent,
    SignInComponent,
    PageNotFoundComponent,
    CandidateProfileCardComponent,
    CandidateProfileSummaryComponent,
    JobPostingComponent,
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
    NgbModule 
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
