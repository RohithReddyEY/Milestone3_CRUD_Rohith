import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/Service/employees.service';
import { Location } from '@angular/common';
import { Employee } from 'src/app/Models/Employee';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  constructor(private employeeService: EmployeesService, private location: Location) {}

  employee: Employee = {
    id: 0,
    name: '',
    address:'',
    phone:0,
    country:''
  };

  goBack(): void {
    this.location.back();
  }

  addEmployee(employee: Employee): void {
    this.employeeService.addEmployee(employee).subscribe(() => this.goBack());
  }

}
