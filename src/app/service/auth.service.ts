import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { API_URL } from '../shared/constants/api.constant';
import { SessionCookieUtil } from '../shared/utils/session-cookie.util';

const ENUM_HEADER = {
  X_API_KEY: `X-API-KEY`,
  IGIS_SERVICE: `igis.service.client`,
  AUTHORIZATION: `Authorization`,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _headers: HttpHeaders = new HttpHeaders();
  private _access = false;

  constructor(
    private readonly _zone: NgZone,
    private readonly _http: HttpClient,
    private readonly _router: Router,
    private readonly _sessionCookie: SessionCookieUtil
  ) {}

  authenticateUser(user: any): Observable<any> {
    this._headers = new HttpHeaders();
    return this._http
      .post(`${API_URL.USER_AUTH_TOKEN}`, user, {
        headers: this._headers,
      })
      .pipe(map((res) => res));
  }

  authenticateRegisterUser(user: any): Observable<any> {
    this._headers = new HttpHeaders();
    return this._http
      .post(`${API_URL.REGISTER_USER_AUTH_TOKEN}`, user, {
        headers: this._headers,
      })
      .pipe(map((res) => res));
  }

  loggedIn(token: boolean) {
    if (token) {
      this.setAccess(true);
      return true;
    } else {
      this.setAccess(false);
      return false;
    }
  }

  setAccess(value: boolean) {
    this._access = value;
  }

  getAccess() {
    return this._access;
  }


  public getRiskAssessment(): Observable<any> {
    const token = this._sessionCookie.getAccessToken();
    this._headers = new HttpHeaders();
    this._headers = this._headers.set(
      ENUM_HEADER.AUTHORIZATION,
      `Bearer ${token}`
    );
    return this._http
      .get(`${API_URL.GET_RISK_ASSESSMENT}`, {
        headers: this._headers,
      })
      .pipe(map((res) => res));
  }

  public getClick(): Observable<any> {
    const token = this._sessionCookie.getAccessToken();
    this._headers = new HttpHeaders();
    this._headers = this._headers.set(
      ENUM_HEADER.AUTHORIZATION,
      `Bearer ${token}`
    );
    return this._http
      .get(`${API_URL.GET_CLCK}`, {
        headers: this._headers,
      })
      .pipe(map((res) => res));
  }

  public getContacts(): Observable<any> {
    const token = this._sessionCookie.getAccessToken();
    this._headers = new HttpHeaders();
    this._headers = this._headers.set(
      ENUM_HEADER.AUTHORIZATION,
      `Bearer ${token}`
    );
    return this._http
      .get(`${API_URL.GET_CONTACTS}`, {
        headers: this._headers,
      })
      .pipe(map((res) => res));
  }

  public createAppointment(body: any): Observable<any> {
    this._headers = new HttpHeaders();
    this._headers = this._headers.set(ENUM_HEADER.X_API_KEY, `Baeldung`);
    return this._http
      .post(`${API_URL.SAVE_APPOINTMENT}`, body, { headers: this._headers })
      .pipe(map((res) => res));
  }

  public createAssessment(body: any): Observable<any> {
    this._headers = new HttpHeaders();
    this._headers = this._headers.set(ENUM_HEADER.X_API_KEY, `Baeldung`);
    return this._http
      .post(`${API_URL.SAVE_ASSESSMENT}`, body, { headers: this._headers })
      .pipe(map((res) => res));
  }

  clearAllSessionData() {
    this._sessionCookie.clearAll();
  }
}
