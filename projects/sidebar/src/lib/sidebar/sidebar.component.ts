import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LargeSidebarConfig } from '../common/models/large-sidebar-config.model';

@Component({
  selector: 'c-sidebar',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  @Input() isSidebarClosed = false;
  @Input() config?: LargeSidebarConfig;
}
