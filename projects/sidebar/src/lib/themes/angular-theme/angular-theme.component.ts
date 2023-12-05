import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { LargeSidebarConfig } from '../../common/models/large-sidebar-config.model';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { SidebarTitleComponent } from '../../components/sidebar-title/sidebar-title.component';
import { SidebarDropdownComponent } from '../../components/sidebar-dropdown/sidebar-dropdown.component';
import { SidebarItemComponent } from '../../components/sidebar-item/sidebar-item.component';

@Component({
  selector: 'c-angular-theme',
  templateUrl: './angular-theme.component.html',
  styleUrls: ['./angular-theme.component.scss', '../../../../style.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, NgIconsModule, SidebarTitleComponent, SidebarDropdownComponent, SidebarItemComponent],
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
