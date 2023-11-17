import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar-dropdown',
  templateUrl: './sidebar-dropdown.component.html',
  styleUrls: ['./sidebar-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarDropdownComponent {
  @Input() item?: any;
  isDropdownOpen = false;
  subscriptions: Subscription[] = [];
  @Input() isSidebarClosed: boolean = false;
}
