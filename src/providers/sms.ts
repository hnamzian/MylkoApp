import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "../config/environment.dev";
import { SMSRQ, SMSRSP } from "../models/sms";
import { TokenStorage } from "../storage/token/token";
import { API } from "../models/api";

@Injectable()
export class SMSProvider {
  baseUrl = `${env.BASE_URL}/sms`;

  constructor(public http: HttpClient, public tokenStorage: TokenStorage) {}

  getSMSToken(mobile): Observable<SMSRSP> {
    let url = `${this.baseUrl}/`;

    return this.http.post(url, { mobile }).pipe(map((result: SMSRSP) => result));
  }

  async verifySMSToken(smsCode) {
    let url = `${this.baseUrl}/verify`;

    const token = (await this.tokenStorage.getSMSToken()) || false;

    if (!token) return Observable.of({} as API);

    const httpOptions = {
      headers: new HttpHeaders({
        SMSToken: token
      })
    };

    return this.http.post(url, { smsCode }, httpOptions).pipe(map((result: API) => result));
  }
}
