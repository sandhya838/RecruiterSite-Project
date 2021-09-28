import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url="http://localhost:3000/v1/profiles"
  baseUrl="http://localhost:3000/v1/aboutyou";

  constructor(private http: HttpClient) {  
  } 
  getPost(){
    return this.http.get(this.url);
  }
  // add user
  addUser(user: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }
  // checking id 
  // get(id: any): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
  // update user
  updateUser(id:any, data:any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  // updateUser(id:number,data:any){
  //   return this.http.put(`${this.baseUrl}/${id}`,data);
  // }
  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
