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
  constructor(private http: HttpClient, private commonService: CommonService) {}

  addUser(user: any): Observable<Object> {
    return this.http.post(CONSTANTS.ABOUTYOU, user, {
      headers: this.commonService._getHeaders(),
    });
  }

  // update user
  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(CONSTANTS.UPDATEUSERPROFILE + id, data, {
      headers: this.commonService._getHeaders(),
    });
  }
  uploadCertificates(id: string, data: any) {
    console.log("dasdasd", data);
    return this.http.post(CONSTANTS.UPLOADCERTIFICATES + id, data, {
      headers: new HttpHeaders({
        "x-access-token": sessionStorage.getItem("token") as string,
      }),
    });
  }
}
