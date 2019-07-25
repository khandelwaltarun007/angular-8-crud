import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employee';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });
  options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createEmployee(employee: object): Observable<object> {
    return this.http.post(this.baseUrl, employee);
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id, {responseType: 'text'});
  }

  getEmployee(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  updateEmployee(id: number, value: any): Observable<object> {
    return this.http.put(this.baseUrl + '/' + id, value);
  }
}
