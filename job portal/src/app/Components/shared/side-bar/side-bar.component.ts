import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };
  menu: any = [
    {
      name: "Home",
      url: "/dashboard",
      hasChildren: false,
      isActive: true,
      subLinks: [],
      icon: "fa fa-home",
    },

    {
      name: "My profile",
      url: "/profile/about-you",
      hasChildren: false,
      isActive: false,
      subLinks: [],
      icon: "fa fa-home",
    },
    {
      name: "Jobs",
      url: "/jobs",
      hasChildren: false,
      isActive: false,
      subLinks: [],
      icon: "fa fa-home",
    },
    {
      name: "Candidate pofile",
      url: "/candidate-profile",
      hasChildren: false,
      isActive: true,
      subLinks: [],
      icon: "fa fa-home",
    },
    {
      name: "Pofile summary",
      url: "/profile-summary",
      hasChildren: false,
      isActive: true,
      subLinks: [],
      icon: "fa fa-home",
    }
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this. makeLinkActive();
  }

  makeLinkActive() {
    this.menu.forEach((item: any) => {
      if (item.url === this.router.url) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  }
}