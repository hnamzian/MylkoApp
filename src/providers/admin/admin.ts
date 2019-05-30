import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "../../config/environment.dev";
import { TokenStorage } from "../../storage/token";
import { API } from "../../models/api";
import { UserAPI } from "../../models/user";

@Injectable()
export class AdminProvider {
  baseUrl = `${env.BASE_URL}/admin`;

  constructor(public http: HttpClient, public tokenStorage: TokenStorage) {}

  async getAdmin(): Promise<Observable<UserAPI>> {
    let url = `${this.baseUrl}/`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as UserAPI);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token })
    };

    return this.http.get(url, httpOptions).pipe(map((result: UserAPI) => result));
  }
}
