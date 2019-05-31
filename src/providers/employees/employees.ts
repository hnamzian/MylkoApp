import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "../../config/environment.dev";
import { TokenStorage } from "../../storage/token";
import { EmployeeResponse, EmployeesResponse, Employee } from "../../models/employees";
import { API } from "../../models/api";

@Injectable()
export class EmployeesProvider {
  baseUrl = `${env.BASE_URL}/employees`;

  constructor(public http: HttpClient, public tokenStorage: TokenStorage) {}

  async getEmployeeById(employeeId, dairyId): Promise<Observable<EmployeeResponse>> {
    let url = `${this.baseUrl}/`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as EmployeeResponse);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token }),
      params: new HttpParams().set("employeeId", employeeId).set("dairyId", dairyId)
    };

    return this.http.get(url, httpOptions).pipe(map((result: EmployeeResponse) => result));
  }

  async getEmployees(dairyId): Promise<Observable<EmployeesResponse>> {
    let url = `${this.baseUrl}/all`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as EmployeesResponse);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token }),
      params: new HttpParams().set("dairyId", dairyId)
    };

    return this.http.get(url, httpOptions).pipe(map((result: EmployeesResponse) => result));
  }

  async addEmployee(employee: Employee): Promise<Observable<EmployeeResponse>> {
    let url = `${this.baseUrl}/add`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as EmployeeResponse);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token })
    };

    return this.http
      .post(url, employee, httpOptions)
      .pipe(map((result: EmployeeResponse) => result));
  }

  async updateEmployee(employee: Employee): Promise<Observable<EmployeeResponse>> {
    let url = `${this.baseUrl}/update`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as EmployeeResponse);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token })
    };

    return this.http
      .put(url, employee, httpOptions)
      .pipe(map((result: EmployeeResponse) => result));
  }

  async removeEmployee(employeeId, dairyId): Promise<Observable<API>> {
    let url = `${this.baseUrl}/remove/`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as API);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token }),
      params: new HttpParams().set("employeeId", employeeId).set("dairyId", dairyId)
    };

    return this.http.delete(url, httpOptions).pipe(map((result: API) => result));
  }
}
