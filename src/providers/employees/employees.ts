import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "../../config/environment.dev";
import { TokenStorage } from "../../storage/token";
import { EmployeeResponse, EmployeesResponse, Employee } from "../../models/employees";

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

}
