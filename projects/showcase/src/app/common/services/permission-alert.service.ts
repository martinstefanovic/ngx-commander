import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionAlertService {
  isAlertShown = new BehaviorSubject<boolean>(false);

  constructor() {}
}
