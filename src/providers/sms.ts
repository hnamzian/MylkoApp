import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "../config/environment.dev";

@Injectable()
export class ServicesProvider {
  baseUrl = `${env.BASE_URL}/periodic-services`;

  constructor(public http: HttpClient) {}
}
