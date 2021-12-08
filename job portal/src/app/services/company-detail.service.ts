import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CONSTANTS } from '../constants';
import { CommonService } from "./common.service";

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

 
  constructor(private http: HttpClient,private commonService: CommonService) {}
  private _getHeaders() {
    let header = new HttpHeaders({
      "x-access-token": sessionStorage.getItem("token") as string,
      "Content-Type": "application/json",
    });

    return header;
  }
  putCompanyDetails(id:any, data: any): Observable<any> {
    return this.http.put(
       CONSTANTS.COMPANYDETAILS +id , data,{
       headers: this.commonService._getHeaders(),
    
       });
  }

  }

