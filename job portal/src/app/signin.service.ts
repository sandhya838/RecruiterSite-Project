import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private loginUrl = "http://localhost:3000/v1/login"
  constructor(private http: HttpClient) { }

  login(data: any){
    // console.log(credentials)
    return this.http.post(`${this.loginUrl}`, data);
  }
}
