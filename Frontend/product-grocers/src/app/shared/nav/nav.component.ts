import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userID;
  isLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
    this.userID = JSON.parse((localStorage.getItem("userId")));
    if(this.userID.toString() != ""){
      this.isLoggedIn = true;
    }
  }

  logout(){
    localStorage.setItem("userId","")
    this.isLoggedIn = false;
  }

}
