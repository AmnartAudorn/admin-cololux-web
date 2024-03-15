import { Injectable } from '@angular/core';

import { LOCALSTORE } from '../constants/common.constant';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageUtil {
  constructor() {}

  set(key: string, value: any) {
    if (key && value) {
      localStorage.setItem(key, btoa(JSON.stringify(value)));
    }
  }

  get(key: string) {
    let data: any;
    if (key) {
      const localData = localStorage.getItem(key);
      if (localData) {
        data = JSON.parse(atob(localData));
      } else {
        data = null;
      }
    }
    return data;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  // Get value session
  getGroupAccress() {
    return this.get(LOCALSTORE.GROUP_ACCESS) || null;
  }

  // Set value session
  setGroupAccress(value: any) {
    return this.set(LOCALSTORE.GROUP_ACCESS, value);
  }
}
