import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee(empRef:any){
    this.empSer.createEmployee(empRef);
  }

  getEmployee(id:any){
    return(this.empSer.getEmployee(id));
  }

  deleteEmployee(id:any){
    this.empSer.deleteEmployee(id);
  }

}
