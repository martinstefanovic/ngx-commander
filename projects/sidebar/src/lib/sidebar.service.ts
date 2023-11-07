import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSidebarClosed = new BehaviorSubject<boolean>(false);

  constructor() {}
}
