import { Component } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee : Employee;
  result : string;
  employeeArr : Employee[];
  flag : boolean;
  employeefind!: Employee;
  findflag : boolean;

  constructor(private service:EmployeeserviceService){
    this.employee=new Employee();
    this.result=" ";
    this.employeeArr = [];
    this.flag= false;
    this.findflag= false;
  }
  
  insertEmployee(data: any){
    this.employee.id = data.id;
    this.employee.empName = data.empName;
    this.employee.empsalary = data.empSalary;
    alert(data.empId+" "+data.empName+" "+data.empSalary);

    this.result = this.service.insertEmployee(this.employee);
  }

  updateEmployee(data: any){
    this.employee.id = data.id;
    this.employee.empName = data.empName;
    this.employee.empsalary = data.empSalary;
    alert(data.empId+" "+data.empName+" "+data.empSalary);

    this.result = this.service.updateEmployee(this.employee);
  }

  deleteEmployee(data : any){
    this.result = this.service.deleteEmployee(data.id);
  }
 
  findallemployee()
  {
    this.employeeArr=this.service.findallemp();
    this.flag=true
  }

  findemployee(emp:Employee)
  {
    this.service.findemployee(emp.id).subscribe(data=>  this.employeefind=data  )
    console.log(this.employeefind);
    this.findflag=!this.findflag;
    
  }

  
}
