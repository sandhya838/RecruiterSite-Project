import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { JobProfileCardComponent } from "src/app/Components/job-profile-card/job-profile-card.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { HttpClientModule } from "@angular/common/http";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { NgxEditorModule } from "ngx-editor";


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    AngularMultiSelectModule,
    NgxEditorModule,
    
  ],
})
export class AdminModule {}
