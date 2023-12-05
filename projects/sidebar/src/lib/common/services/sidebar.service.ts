import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarClickEvent } from '../models/click-event.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSidebarClosed = new BehaviorSubject<boolean>(false);
  sidebarItemClick = new BehaviorSubject<SidebarClickEvent | null>(null);

  constructor() {}
}
