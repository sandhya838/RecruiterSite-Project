import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CONSTANTS } from "../helper/constants";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  apiBaseUrl = CONSTANTS.BASEURL;
  constructor(private http: HttpClient) {}
  private _getHeaders() {
    const token =
      localStorage.getItem("rememberMe") === "true"
        ? localStorage.getItem("token")
        : (sessionStorage.getItem("token") as any);
    let header = new HttpHeaders({
      "x-access-token": token,
      "Content-Type": "application/json",
    });

    return header;
  }
  getRecommendedJobs(searchString: any): Observable<any> {
    const header = this._getHeaders();
    return this.http.post(
      this.apiBaseUrl + CONSTANTS.RECOMMENDEDJOBS,
      searchString,
      { headers: header }
    );
  }
  createJobs(data: any): Observable<any> {
    console.log(data);
    const header = this._getHeaders();
    return this.http.post(CONSTANTS.CREATEJOBS, data, { headers: header });
  }
  getJObsPostedByorgnization(id: string): Observable<any> {
    const header = this._getHeaders();
    return this.http.get(CONSTANTS.ORGNIZATIONJOBS + id, { headers: header });
  }
}
