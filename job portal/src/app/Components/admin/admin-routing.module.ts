import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/helper/guard/authguard";
import { JobProfileCardComponent } from "src/app/Components/job-profile-card/job-profile-card.component";
import { MyProfileComponent } from "src/app/my-profile/my-profile.component";
import { CandidateProfileCardComponent } from "../candidate-profile-card/candidate-profile-card.component";
import { CandidateProfileSummaryComponent } from "../candidate-profile-summary/candidate-profile-summary.component";
import { CertificationComponent } from "../certification/certification.component";
import { CompanyDetailsComponent } from "../company-details/company-details.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EduDetailsComponent } from "../edu-details/edu-details.component";
import { ExperianceComponent } from "../experiance/experiance.component";
import { JobListingComponent } from "../job-listing/job-listing.component";
import { JobPostingComponent } from "../job-posting/job-posting.component";
import { RollprofileComponent } from "../rollprofile/rollprofile.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { WorkExperianceComponent } from "../work-experiance/work-experiance.component";
import { AdminComponent } from "./admin.component";
import { OrgGuard } from "src/app/helper/org-guard/org.guard";
import { CommonGuard } from "src/app/helper/guard/common-guard/common.guard";
import { JobViewComponent } from "../job-view/job-view.component";
import { FeedbackFormComponent } from "../feedback-form/feedback-form.component";
import { NgxEditorModule } from "ngx-editor";
import { CandidatedashboardComponent } from "../CandidateDashboard/candidatedashboard/candidatedashboard.component";
import { SearchComponent } from "./search/search.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/candidateDashboard", pathMatch: "full" },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path:"landing-page",
        component: LandingPageComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "candidate-dashboard",
        component: CandidatedashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "candidate-profile-card",
        component: CandidateProfileCardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "about-you",
        component: UserProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "jobs",
        component: JobProfileCardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "profile-summary",
        component: CandidateProfileSummaryComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "work-experience",
        component: WorkExperianceComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "education-details/:id",
        component: EduDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "role-profile",
        component: RollprofileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "certificate",
        component: CertificationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "myProfile",
        component: MyProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "company-details",
        component: CompanyDetailsComponent,
        canActivate: [OrgGuard],
      },
      {
        path: "myProfile",
        component: MyProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "candidate-profile",
        component: CandidateProfileCardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "post-job",
        component: JobPostingComponent,
        canActivate: [OrgGuard],
      },
      {
        path: "posted-jobs",
        component: JobListingComponent,
        canActivate: [CommonGuard],
      },
      {
        path: "job-details/:job_id",
        component: JobViewComponent,
        canActivate: [CommonGuard],
      },
      {
        path: "feedback/:id",
        component: FeedbackFormComponent,
      },
      {
        path: "change-password",
        canActivate: [CommonGuard],
        loadChildren: () =>
          import("../change-password/change-password.module").then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: "profile",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("../create-profile/create-profile.module").then(
            (m) => m.CreateProfileModule
          ),
      },
      {
        path: "search",
        component: SearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxEditorModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
