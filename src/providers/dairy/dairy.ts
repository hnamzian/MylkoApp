import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "../../config/environment.dev";
import { TokenStorage } from "../../storage/token";
import { DairyResponse, DairiesResponse, Dairy } from "../../models/dairy";
import { API } from "../../models/api";

@Injectable()
export class DairyProvider {
  baseUrl = `${env.BASE_URL}/dairy`;

  constructor(public http: HttpClient, public tokenStorage: TokenStorage) {}

  async getDiryById(dairyId): Promise<Observable<DairyResponse>> {
    let url = `${this.baseUrl}/`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as DairyResponse);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token }),
      params: new HttpParams().set("dairyId", dairyId)
    };

    return this.http.get(url, httpOptions).pipe(map((result: DairyResponse) => result));
  }

  async getDairies(): Promise<Observable<DairiesResponse>> {
    let url = `${this.baseUrl}/all`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as DairiesResponse);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token })
    };

    return this.http.get(url, httpOptions).pipe(map((result: DairiesResponse) => result));
  }

  async updateDairy(dairy: Dairy): Promise<Observable<DairyResponse>> {
    let url = `${this.baseUrl}/update`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as DairyResponse);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token })
    };

    return this.http.put(url, dairy, httpOptions).pipe(map((result: DairyResponse) => result));
  }

  async addDairy(dairy: Dairy): Promise<Observable<DairyResponse>> {
    let url = `${this.baseUrl}/add`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as DairyResponse);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token })
    };

    return this.http.post(url, dairy, httpOptions).pipe(map((result: DairyResponse) => result));
  }

  async removeDairy(dairyId): Promise<Observable<API>> {
    let url = `${this.baseUrl}/remove`;

    const token = (await this.tokenStorage.getAuthToken()) || false;
    if (!token) return Observable.of({} as API);

    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token }),
      params: new HttpParams().set("dairyId", dairyId)
    };

    return this.http.get(url, httpOptions).pipe(map((result: API) => result));
  }
}
