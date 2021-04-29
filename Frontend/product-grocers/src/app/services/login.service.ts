import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { }
  
//post method 1st parameter url and 2nd parameter json data. 
  attemptLogin(loginRef:any):any{
    return this.http.post("http://100.26.50.117:9090/user/login",loginRef,{responseType:"text"})
  }

}
