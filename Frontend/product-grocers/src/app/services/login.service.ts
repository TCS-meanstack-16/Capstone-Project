import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { }
  
//post method 1st parameter url and 2nd parameter json data. 
  attemptLogin(loginRef:any):any{
    return new Promise((resolve, reject) => {
    this.http.post("http://localhost:9090/user/login",loginRef,{responseType:"text"}).
    subscribe(result=>{return(result)},error=>console.log(error));
    });
  }

}
