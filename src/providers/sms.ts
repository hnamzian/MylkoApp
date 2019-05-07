import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "../config/environment.dev";
import { SMSRQ, SMSRSP } from "../models/sms";

@Injectable()
export class SMSProvider {
  baseUrl = `${env.BASE_URL}/sms`;

  constructor(public http: HttpClient) {}
}
