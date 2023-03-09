import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/Service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  constructor(private employeeService: EmployeesService) {}

  employees: Employee[] = [];
  id?: number;
  

  getAllEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(employees => this.employees = employees);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => this.getAllEmployees());
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

}
