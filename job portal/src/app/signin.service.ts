import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private loginUrl = "http://localhost:3000/v1/login"
  constructor(private http: HttpClient) { }

  generateToken(credentials: any){
    return this.http.post(`${this.loginUrl}`,credentials);
  }

  getToken()
  {
    return localStorage.getItem("token")
  }
  
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' ||  token==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  isLoggedOut()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' ||  token==null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  logout()
  {
    localStorage.removeItem('token');
    location.reload()
    return true;
    
  }
}
