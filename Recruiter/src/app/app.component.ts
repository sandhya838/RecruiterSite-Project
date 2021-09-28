import { Component } from '@angular/core';
import { ConfigService } from './config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recruiter';
  data:any;
  constructor(private postData:ConfigService){}
  ngOnInit(){
    // this.postData.getPost().subscribe((result)=>{
    //   console.log("result",result);
    //   this.data=result;
    // })
  }
}
