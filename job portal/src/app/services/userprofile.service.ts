import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CONSTANTS } from "../constants";
@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient) { }
  private _getHeaders() {
    let header = new HttpHeaders({
      "x-access-token": sessionStorage.getItem("token") as string,
      "Content-Type": "application/json",
    });
    return header;
  }
  getUserDetails(id: String):Observable<any> {
    const header = this._getHeaders();
    return this.http.get(
       CONSTANTS.USERPROFILE + id,
      { headers: header }
    );
  }
}
