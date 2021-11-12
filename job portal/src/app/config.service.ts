import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  url = "http://localhost:3000/v1/";
  createUrl = "http://localhost:3000/v1/aboutyou";
  updateUrl = "http://localhost:3000/v1/profile";

  constructor(private http: HttpClient) {}
  getPost() {
    return this.http.get(this.url + "profiles");
  }
  // add user
  addUser(user: any): Observable<Object> {
    return this.http.post(this.url + "aboutyou", user);
  }

  // update user
  updateUser(id: any, data: any): Observable<any> {
    console.log(data);
    const header = this._getHeaders();

    return this.http.put(this.url + "profile/" + id, data, { headers: header });
  }
  private _getHeaders() {
    let header = new HttpHeaders({
      "x-access-token":sessionStorage.getItem('token') as string,
      "Content-Type": "application/json",
    });

    return header;
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.createUrl}/${id}`);
  }
}
