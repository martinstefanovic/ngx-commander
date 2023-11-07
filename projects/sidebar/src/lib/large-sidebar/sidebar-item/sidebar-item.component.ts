import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input() item?: any;
  @Input() expand = false;
  innerWidth?: number;
  @Input() isSidebarClosed: boolean = false;

  constructor() {
    innerWidth = window.innerWidth;
  }
}
