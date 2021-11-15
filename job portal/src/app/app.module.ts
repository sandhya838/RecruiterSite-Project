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
import { SidebarComponent } from "./Components/sidebar/sidebar.component";
import { SignInComponent } from "./Components/sign-in/sign-in.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { AgGridModule } from "ag-grid-angular";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { TokenInterceptorService } from "./token-interceptor-service.service";
import { CandidateProfileCardComponent } from './Components/candidate-profile-card/candidate-profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SideListboxComponent,
    SidebarComponent,
    SignInComponent,
    PageNotFoundComponent,
    CandidateProfileCardComponent,
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
