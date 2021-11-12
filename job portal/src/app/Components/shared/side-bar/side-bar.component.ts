import { Component, OnInit } from "@angular/core";

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
      url: "/about-you",
      hasChildren: false,
      isActive: true,
      subLinks: [],
      icon: "fa fa-home",
    },
    {
      name: "Jobs",
      url: "/jobs",
      hasChildren: false,
      isActive: true,
      subLinks: [],
      icon: "fa fa-home",
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  makeLinkActive(index: number) {
    this.menu.forEach((item: any) => {
      item.isActive = false;
    });
    this.menu[index].isActive = true;
    return false;
  }
}
