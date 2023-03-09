import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { EmployeeEditComponent } from './Employee/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './Employee/employee-add/employee-add.component';


const routes: Routes = [
  { path:'employees', component: EmployeesComponent },
  { path: '', redirectTo:'employees', pathMatch:'full' },
  { path:'employees/employee-add', component: EmployeeAddComponent },
  { path:'employees/employee-edit/:id', component: EmployeeEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
