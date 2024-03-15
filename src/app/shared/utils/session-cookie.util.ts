import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { COOKIES, TOKEN } from '../constants/common.constant';
import { environment } from 'src/environments/environment';

const SECURE_FLAG = environment.secure_flag;

@Injectable({
  providedIn: 'root',
})
export class SessionCookieUtil {
  constructor(private readonly _cookie: CookieService) {}

  get(key: string) {
    let result: any;
    if (key) {
      const sessionData = this._cookie.get(key);
      if (sessionData) {
        const cookieValue = JSON.parse(sessionData);
        result = JSON.parse(cookieValue.cookie_value);
      } else {
        result = null;
      }
    }
    return result ? result.data : result;
  }

  set(key: string, value: any, expire?: number) {
    if (key && value) {
      const cookieValue = { cookie_value: JSON.stringify(value) };
      let expDate = null;
      if (expire) {
        const hour = expire;
        const date = new Date();
        date.setTime(date.getTime() + hour * 60 * 60 * 1000);
        expDate = date;
      }
      this._cookie.set(key, JSON.stringify(cookieValue));
    }
  }

  checkTokenTimeOut() {
    let result: any;
    const sessionData = this._cookie.get(COOKIES.USR_ACCESS);
    if (sessionData) {
      result = JSON.parse(sessionData);
      const exp = new Date(result.cookie_expire);
      const min = 4.5;
      exp.setTime(exp.getTime() - min * 60 * 1000);
      const currentDate = new Date();

      return currentDate > exp;
    } else {
      return false;
    }
  }

  check(key: string) {
    return this._cookie.check(key);
  }

  clear(key: string) {
    this._cookie.delete(key);
  }

  clearAll() {
    return new Promise<void>((resolve) => {
      this._cookie.delete(
        COOKIES.USR_ACCESS,
        '/',
        window.location.hostname,
        SECURE_FLAG,
        'Lax'
      );
      this._cookie.delete(
        COOKIES.USR_DATA,
        '/',
        window.location.hostname,
        SECURE_FLAG,
        'Lax'
      );
      resolve();
    });
  }

  // Set value cookie
  setAccessToken(value: string) {
    this.set(COOKIES.USR_ACCESS, this.prepareData(value), TOKEN.TIME_OUT);
  }

  // Set value user
  setUserData(value: any) {
    value.customers = [];
    value.groupAccesses = [];
    this.set(COOKIES.USR_DATA, this.prepareData(value), TOKEN.TIME_OUT);
  }

  prepareData(value: any) {
    return { data: value };
  }

  // Check value cookie
  checkAccessToken() {
    return this.check(COOKIES.USR_ACCESS);
  }
  checkUser() {
    return this.check(COOKIES.USR_DATA);
  }

  // Get value cookie
  getAccessToken() {
    return this.check(COOKIES.USR_ACCESS) ? this.get(COOKIES.USR_ACCESS) : null;
  }

  getUser() {
    return this.check(COOKIES.USR_DATA) ? this.get(COOKIES.USR_DATA) : null;
  }
}
