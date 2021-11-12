import { Component } from "@angular/core";
import { ConfigService } from "./config.service";
import { SigninService } from "./signin.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Recruiter";
  public loggedIn=false;
  // data:any;
  // constructor(private postData:ConfigService){}

  // ngOnInit(){

  // this.selectedItems = [
  //   { item_id: 3, item_text: 'Pune' },
  //   { item_id: 4, item_text: 'Navsari' }
  // ];

  //   this.postData.getPost().subscribe((result)=>{
  //     console.log("result",result);
  //     this.data=result;
  //   })
  // }


  constructor(private signinService: SigninService) {}
  ngOnInit() {
  this.loggedIn = this.signinService.isLoggedIn();
}
}