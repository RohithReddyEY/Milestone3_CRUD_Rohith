import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { EmployeeAddComponent } from './Employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Employee/employee-edit/employee-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesComponent,
    EmployeeAddComponent,
    EmployeeEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
