import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InnerHeaderComponent } from "./inner-header/inner-header.component";
import { InnerFooterComponent } from "./inner-footer/inner-footer.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { RouterModule } from "@angular/router";
import { SimplebarAngularModule } from "simplebar-angular";

@NgModule({
  declarations: [InnerHeaderComponent, InnerFooterComponent, SideBarComponent],
  imports: [CommonModule, SimplebarAngularModule, RouterModule],
  exports: [InnerHeaderComponent, InnerFooterComponent, SideBarComponent],
})
export class SharedModule {}
