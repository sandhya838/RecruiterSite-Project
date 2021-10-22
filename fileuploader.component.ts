import { ConfigService } from "src/app/config.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.scss']
})
export class FileuploaderComponent implements OnInit {
  resume: any;
  http: any;
// configService: any;
  url!: string;

  constructor(
    private configService: ConfigService
    
  ) {}

  ngOnInit(): void {
  }

  fileUpload(fileInput: any){
    if(fileInput.target.files && fileInput.target.files[0]){
        const reader= new FileReader();
        reader.onload= (e: any)=> {
            const image= new Image();
            image.src= e.target.result;
            console.log('image.src', image.src);
            this.resume= e.target.result;

            this.configService.uploadResume().subscribe(
              (data: any) => {
                if (data.status === 200) {
                  // this.notifyService.showSuccess(data.message);
                  // localStorage.setItem("ID", data.profile._id);
                  // this.router.navigateByUrl('/experience');
                  // this.userForm.reset();
                 }
                   else {
                  // this.notifyService.showError(data.message);
                }
                console.log("data", data);

               
              },
              
            );

           
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}



}

