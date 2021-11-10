import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{CONSTANTS} from '../profieConst';
@Injectable({
  providedIn: 'root'
})
export class ProfilesUploaderService {
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
  
      return this.http.get(this.apiBaseUrl + CONSTANTS.RECOMMENDEDPROFILE, { headers: header });
  }
  }
  