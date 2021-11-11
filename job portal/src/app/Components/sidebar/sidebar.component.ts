import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/signin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  


  
  constructor(private  signinService: SigninService) { }

  ngOnInit(): void {

  }
  logout(){
    this.signinService.logout()
  }

}


// ngOnInit() {
//   //Toggle Click Function
// $("#menu-toggle").click(function(e) {
// e.preventDefault();
// $("#wrapper").toggleClass("toggled");
// });
// }