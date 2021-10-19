import { Component } from "@angular/core";
import { ConfigService } from "./config.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Recruiter";
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


  constructor() {}
  ngOnInit() {
   
}
}