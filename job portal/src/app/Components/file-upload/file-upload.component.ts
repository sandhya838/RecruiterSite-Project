import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { json } from 'express';
import { Observable } from 'rxjs';
import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
 selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileBase64:string | undefined;

  fileInfos?: Observable<any>;
  constructor(private uploadService: UploadService) { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    console.log("file uploaded");
    
    this.progress = 0;

    

      if (this.fileBase64) {

        // this.currentFile = file;
const id=localStorage.getItem('ID') || '{}';
console.log(id);

const requestBody={resume:this.fileBase64}
        this.uploadService.uploadResume(requestBody,id).subscribe( (event: any) => {
            // if (event.type === HttpEventType.UploadProgress) {
            //   this.progress = Math.round(100 * event.loaded / event.total);
            // } else if (event instanceof HttpResponse) {
            //   this.message = event.body.message;
            //   this.fileInfos = this.uploadService.getFiles();
            console.log(event);
            
            // }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          });

      

      this.selectedFiles = undefined;
    }
  }
 
 uploadFileToServer(event:any) {
     var file = event.srcElement.files[0];
     let that=this;
    //  console.log(file);
     var reader = new FileReader();
     reader.readAsBinaryString(file);
 
     reader.onload = function() {
       const finalData="data:@file/"+file.type.split('/').pop()+";base64,";
       that.fileBase64=finalData+btoa(reader.result as string);
        //  console.log(finalData+btoa(reader.result as string));
        // console.log(that.fileBase64)
        
     };
     reader.onerror = function() {
         console.log('there are some problems');
     };
 }
  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }
}
