import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public loginSer:LoginService) { }

  ngOnInit(): void {
  }

  checkLogin(loginRef:any){
    let id;
    this.loginSer.attemptLogin(loginRef).then(
      
    );

    console.log(id);
    if(id == null){
      let incorrectAttempts = JSON.parse(sessionStorage.getItem("incorrectAttempts"));

      if(incorrectAttempts == null){
        incorrectAttempts = 0;
      }
      incorrectAttempts++;
      localStorage.setItem("incorrectAttempts", JSON.stringify(incorrectAttempts));
    }
    else{
      console.log(id);
      localStorage.setItem("userId",JSON.stringify(id));
    }
    
  }
}
