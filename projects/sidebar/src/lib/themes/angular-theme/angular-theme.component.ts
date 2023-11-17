import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { LargeSidebarConfig } from '../../common/models/large-sidebar-config.model';

@Component({
  selector: 'c-angular-theme',
  templateUrl: './angular-theme.component.html',
  styleUrls: ['./angular-theme.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AngularThemeComponent {
  @Input() isSidebarClosed: boolean = false;
  @Input() config?: LargeSidebarConfig;
  selectedDropdown: any;
  isDropdownOpened = false;

  onOpenDropdown(menuItem: any) {
    this.selectedDropdown = menuItem;
    this.isDropdownOpened = true;
  }
}
