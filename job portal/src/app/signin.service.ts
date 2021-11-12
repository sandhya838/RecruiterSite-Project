import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CONSTANTS } from "./constants";

@Injectable({
  providedIn: "root",
})
export class SigninService {
  constructor(private http: HttpClient) {}
  private _getHeaders() {
    let header = new HttpHeaders({
      "x-access-token": sessionStorage.getItem("token") as string,
      "Content-Type": "application/json",
    });

    return header;
  }

  login(credentials: any) {
    return this.http.post(CONSTANTS.CANDIDATELOGIN, credentials);
  }

  register(data: any): Observable<any> {
    const header = this._getHeaders();
    return this.http.post(CONSTANTS.CANDIDATESIGNUP, data, );
  }

  getToken() {
    return sessionStorage.getItem("token");
  }

  isLoggedIn() {
    let token = sessionStorage.getItem("token");
    if (token == undefined || token === "" || token == null) {
      return false;
    } else {
      return true;
    }
  }

  isLoggedOut() {
    let token = sessionStorage.getItem("token");
    if (token == undefined || token === "" || token == null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem("token");
    location.reload();
    return true;
  }
}
