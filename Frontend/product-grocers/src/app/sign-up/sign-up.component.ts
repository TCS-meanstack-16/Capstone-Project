import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public userService:ExampleService) { }

  ngOnInit(): void {
  }
  storeUser(userRef:any){
    console.log(userRef);
    this.userService.storeUserDetails(userRef);
  }

}
