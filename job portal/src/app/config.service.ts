import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { CONSTANTS } from "./constants";
import { CommonService } from "./services/common.service";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  url = "http://localhost:3000/v1/";
  updateUrl = "http://localhost:3000/v1/profile";

  constructor(private http: HttpClient, private commonService: CommonService) {}
  getPost() {
    return this.http.get(this.url + "profiles");
  }
  // add user
  addUser(user: any): Observable<Object> {
    return this.http.post(CONSTANTS.ABOUTYOU, user, {
      headers: this.commonService._getHeaders(),
    });
  }

  // update user
  updateUser(id: any, data: any): Observable<any> {
    console.log(data);

    return this.http.put(CONSTANTS.UPDATEUSERPROFILE + id, data, {
      headers: this.commonService._getHeaders(),
    });
  }

  // get(id: number): Observable<any> {
  //   return this.http.get(`${this.createUrl}/${id}`);
  // }
}
