import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  


  
  constructor() { }

  ngOnInit(): void {
  }

}


// ngOnInit() {
//   //Toggle Click Function
// $("#menu-toggle").click(function(e) {
// e.preventDefault();
// $("#wrapper").toggleClass("toggled");
// });
// }