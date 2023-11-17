import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar-title',
  templateUrl: './sidebar-title.component.html',
  styleUrls: ['./sidebar-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarTitleComponent {
  @Input() item?: any;
  innerWidth?: number;
  @Input() isSidebarClosed: boolean = false;
}
