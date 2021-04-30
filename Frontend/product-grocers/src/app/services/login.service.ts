import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { }
  
//post method 1st parameter url and 2nd parameter json data. 
  attemptLogin(loginRef:any):any{
    return this.http.post("http://3.80.137.241:9080/user/login",loginRef,{responseType:"text"})
  }

}
