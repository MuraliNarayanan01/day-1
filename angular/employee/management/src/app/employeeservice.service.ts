import { Injectable } from '@angular/core';
import { Employee } from './model/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  url:string;
  employeeArr : Employee[];
  employee : Employee;

  constructor(private http:HttpClient) { 
    this.url = "http://localhost:3004/employees";
    this.employee =  new Employee();
    this.employeeArr = [];
  }

  insertEmployee(employee : Employee){
    this.http.post<Employee>(this.url, employee).subscribe();
    return "Employee Details Added";
  }

  updateEmployee(employee : Employee){
    this.http.put<Employee>(this.url+"/"+employee.id, employee).subscribe();
    return "Employee Details updated";
  }

  deleteEmployee(id : number){
    this.http.delete<Employee>(this.url+"/"+id).subscribe();
    return "Employee Id deleted";
  }
  
  findallemp()
  {
    this.http.get<Employee[]>(this.url).subscribe(findedata => this.employeeArr=findedata);
    return this.employeeArr;
  }

  
  findemployee(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(this.url+"/"+id)
  }
  
}
