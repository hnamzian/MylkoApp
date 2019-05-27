import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "../config/environment.dev";
import { SMSRQ, SMSRSP } from "../models/sms";
import { TokenStorage } from "../storage/token";
import { API } from "../models/api";
import { AuthRSP } from "../models/auth";
import { UserAPI } from "../models/user";

@Injectable()
export class AuthProvider {
  baseUrl = `${env.BASE_URL}/auth`;

  constructor(public http: HttpClient, public tokenStorage: TokenStorage) {}

  getSMSToken(mobile): Observable<SMSRSP> {
    let url = `${this.baseUrl}/get-sms-code`;

    return this.http.post(url, { mobile }).pipe(map((result: SMSRSP) => result));
  }

  async verifySMSToken(smsCode) {
    let url = `${this.baseUrl}/verify-sms-code`;

    const token = (await this.tokenStorage.getSMSToken()) || false;

    if (!token) return Observable.of({} as AuthRSP);

    const httpOptions = {
      headers: new HttpHeaders({
        SMSToken: token
      })
    };

    return this.http.post(url, { smsCode }, httpOptions).pipe(map((result: AuthRSP) => result));
  }

  async authByToken() {
    let url = `${this.baseUrl}/login`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as UserAPI);

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: token
      })
    };

    return this.http.get(url, httpOptions).pipe(map((result: UserAPI) => result));
  }
}
