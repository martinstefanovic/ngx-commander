import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarItemComponent {
  @Input() item?: any;
  @Input() showIcon = true;
  innerWidth?: number;
  @Input() isSidebarClosed: boolean = false;

  constructor() {
    innerWidth = window.innerWidth;
  }
}
