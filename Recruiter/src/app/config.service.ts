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
  // onSubmit(user:any){
  //   this.http.post(`${this.baseUrl}`, user).subscribe((result)=>{
  //     console.warn(result)
  //   })
  // }
  addUser(user: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }
}
