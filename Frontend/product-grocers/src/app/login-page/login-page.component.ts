import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public loginSer:LoginService, public userSer:UserService) { }

  ngOnInit(): void {
  }

  checkLogin(loginRef:any){
    this.loginSer.attemptLogin(loginRef).
    subscribe(id=>{
      console.log(id);
      if(id == ""){
        console.log("incorrect");
        let incorrectAttempts = JSON.parse(sessionStorage.getItem("incorrectAttempts"));
        console.log(incorrectAttempts);
        if(incorrectAttempts == null){
          incorrectAttempts = 0;
        }
        incorrectAttempts++;

        if(incorrectAttempts > 2){
          this.userSer.lockUser(loginRef);
        }

        sessionStorage.setItem("incorrectAttempts", JSON.stringify(incorrectAttempts));
      }
      else{
        localStorage.setItem("userId",JSON.stringify(id));
      }
    },error=>console.log(error));

    
    
  }
}
