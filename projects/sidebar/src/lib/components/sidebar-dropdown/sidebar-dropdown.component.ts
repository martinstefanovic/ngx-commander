import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { TooltipDirective } from '../../common/ui/tooltip/tooltip.directive';
import { NgIconsModule } from '@ng-icons/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../common/services/sidebar.service';
import { ClickType } from '../../common/enums/click-type.enum';

@Component({
  selector: 'app-sidebar-dropdown',
  templateUrl: './sidebar-dropdown.component.html',
  styleUrls: ['./sidebar-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, TooltipDirective, NgIconsModule, RouterModule],
})
export class SidebarDropdownComponent {
  readonly ClickType = ClickType;
  @Input() item?: any;
  isDropdownOpen = false;
  subscriptions: Subscription[] = [];
  @Input() isSidebarClosed: boolean = false;
  @Input() styleClass!: string;

  constructor(private sidebarService: SidebarService) {}

  onClick(event: Event, data: any, type: ClickType) {
    this.sidebarService.sidebarItemClick.next({ event, data, type, sidebarType: 'regular' });
  }
}
