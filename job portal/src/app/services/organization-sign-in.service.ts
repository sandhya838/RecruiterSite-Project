import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OrganizationSignInService {
  constructor(private http: HttpClient) {}
  private _getHeaders() {
    let header = new HttpHeaders({
      "x-access-token":
      localStorage.getItem("rememberMe") === "true"
        ? (localStorage.getItem("token") as string)
        : (sessionStorage.getItem("token") as string),
    "Content-Type": "application/json",
  });
    return header;
  }

  login(credentials: any) {
    return this.http.post(CONSTANTS.ORGANIZATIONlOGIN, credentials);
  }

  register(data: any): Observable<any> {
    const header = this._getHeaders();
    return this.http.post(CONSTANTS.ORGANIZATIONSIGNUP, data, );
  }

  getToken(): string | null {
    return sessionStorage.getItem("token");
  }

  isLoggedIn() {
    let token = localStorage.getItem("rememberMe")
    ? localStorage.getItem("token")
    : sessionStorage.getItem("token");
  if (token == undefined || token === "" || token == null) {
    return false;
  } else {
    return true;
  }
}

  isLoggedOut() {
    let token = localStorage.getItem("rememberMe")
      ? localStorage.getItem("token")
      : sessionStorage.getItem("token");
    if (token == undefined || token === "" || token == null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
    return true;
  }
}