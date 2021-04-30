import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userID:number;
  isAdmin:boolean = false;
  isLoggedIn:boolean = false;

  constructor(public empSer: EmployeeService) { }

  ngOnInit(): void {
    this.userID = JSON.parse((localStorage.getItem("userId")));
    if(this.userID.toString() != ""){
      this.isLoggedIn = true;
    }
    let employee = this.empSer.getEmployee(this.userID).subscribe(employee =>{
      this.isAdmin = employee[0].isAdmin;
    });
  
  }

}
