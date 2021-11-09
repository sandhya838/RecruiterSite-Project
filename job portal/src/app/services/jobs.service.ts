import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from 'buffer';
import { CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
apiBaseUrl=CONSTANTS.BASEURL;
constructor(private http: HttpClient)  { }
private _getHeaders() {
  let header = new HttpHeaders({
    "x-access-token":sessionStorage.getItem('token') as string,
    "Content-Type": "application/json",
  });

  return header;
}
getRecommendedJobs(){
  const header = this._getHeaders();
  this.http.get(this.apiBaseUrl + CONSTANTS.RECOMMENDEDJOBS, { headers: header }).subscribe(result=>{
    console.log('result',result);
  });
    return this.http.get(this.apiBaseUrl + CONSTANTS.RECOMMENDEDJOBS, { headers: header });
}
}
