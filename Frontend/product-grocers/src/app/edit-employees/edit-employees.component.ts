import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {
  empId = 1
  employee?:any
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee(this.empId)
  }


  

  changePassword(employeeRef:any){
    this.empSer.changePassword({_id: this.empId, password: employeeRef.password}).subscribe(result => {
      console.log(result)
    });
  }

  getEmployee(id:any){
    this.empSer.getEmployee(id).subscribe(result => {
      console.log(result);
      this.employee = result[0];
    });
  }
  

  

}
