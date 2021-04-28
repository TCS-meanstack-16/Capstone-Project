import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  user?: any;
  userId = 3; //this is used to set the current user id. we need to find a way to get the current logged in userId
  constructor(public usrService: UserService) { }

  ngOnInit(): void {
    this.getUser(this.userId)
  }

  updateUser(userRef: any) {
    this.usrService.updateUser({user: userRef, userId: this.userId}).subscribe((result: string) => {
      console.log(result)
    });
  }

  getUser(id: any) {
    this.usrService.retrieveUserById(id).subscribe(result => {
      console.log(result);
      this.user = result[0];
    })
  }

}
