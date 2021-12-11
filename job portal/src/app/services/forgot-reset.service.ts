import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../helper/constants';

@Injectable({
  providedIn: 'root'
})
export class ForgotResetService {
  apiBaseUrl = CONSTANTS.BASEURL;
  constructor(private http: HttpClient) {}
  private _getHeaders() {
    let header = new HttpHeaders({
      "x-access-token": sessionStorage.getItem("token") as string,
      "Content-Type": "application/json",
    });

    return header;
  }

 
 forgetPassword(data:any):Observable<any> {
  const header = this._getHeaders();
  return this.http.post(
    this.apiBaseUrl + CONSTANTS.FORGOTPASSWORD,
    data,
    { headers: header }
    

  );
}


   
  
 }


function requestType(arg0: string, data: any, arg2: { headers: HttpHeaders; }, requestType: any): Observable<any> {
  throw new Error('Function not implemented.');
}

