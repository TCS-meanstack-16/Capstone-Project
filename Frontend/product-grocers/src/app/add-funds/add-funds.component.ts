import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {

  constructor(public usrService: UserService) { }

  userId = JSON.parse(localStorage.getItem('userId'))
  ngOnInit(): void {
  }

  addFunds(userRef:any){
    this.usrService.addFunds({userId: this.userId, funds: userRef.funds}).subscribe((result: string) => {
      console.log(result)
    });
  }

}
