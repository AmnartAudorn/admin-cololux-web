import { Inject, Injectable } from '@angular/core';
import {
  SESSION_STORAGE,
  StorageService,
  StorageTranscoders,
} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class SessionUtil {
  constructor(
    @Inject(SESSION_STORAGE)
    private readonly _storage: StorageService
  ) {}

  set(key: string, value: any) {
    if (key && value) {
      this._storage.set(key, JSON.stringify(value), StorageTranscoders.STRING);
    }
  }

  get(key: string) {
    let data: any;
    if (key) {
      const sessionData = this._storage.get(key, StorageTranscoders.STRING);
      if (sessionData) {
        data = JSON.parse(sessionData);
      } else {
        data = null;
      }
    }
    return data;
  }

  removeSession(key: string) {
    this._storage.remove(key);
  }
}
