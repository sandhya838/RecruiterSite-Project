import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private uploadUrl = 'http://localhost:3000/v1/upload-resume/';

  constructor(private http: HttpClient) { }

  uploadResume(file: any,id:string): Observable<any> {
    // const formData: FormData = new FormData();

    // formData.append('resume', file);

    // const req = new HttpRequest('POST', `${this.uploadUrl}`, formData, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });

    // return this.http.request(req);
    console.log(file);
    
    const header = this._getHeaders();
    return this.http.put(this.uploadUrl+id,file, { headers: header })
    
    
  }
  
  private _getHeaders() {
    // "x-access-token":sessionStorage.getItem('token') as string,
    let header = new HttpHeaders({
     
      "Content-Type": "application/json",
    });

    return header;
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.uploadUrl}/files`);
  }
}
