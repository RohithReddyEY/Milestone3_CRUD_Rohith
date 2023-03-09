import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/Service/employees.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  constructor(private employeeService: EmployeesService, private location: Location, private route: ActivatedRoute) {}

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

  editEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(() => this.goBack());
  }

  getEmployeeById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(id).subscribe(employee => {
      this.employee.id = employee.id,
      this.employee.name = employee.name,
      this.employee.address=employee.address,
      this.employee.phone=employee.phone,
      this.employee.country=employee.country
    });
  }

  ngOnInit(): void {
    this.getEmployeeById();
  }

}
