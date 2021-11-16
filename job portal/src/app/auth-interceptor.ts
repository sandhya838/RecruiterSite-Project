import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SigninService } from "./signin.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService: SigninService){

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq=req;
        let token = this.loginService.getToken()

        if(token!=null){
            newReq=newReq.clone({setHeaders:{Authorization:'${token}'}})
        }
        return next.handle(newReq)
    }
}
