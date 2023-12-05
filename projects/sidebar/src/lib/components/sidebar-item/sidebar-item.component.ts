import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TooltipDirective } from '../../common/ui/tooltip/tooltip.directive';
import { NgIconsModule } from '@ng-icons/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../common/services/sidebar.service';
import { ClickType } from '../../common/enums/click-type.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, TooltipDirective, NgIconsModule, RouterModule],
})
export class SidebarItemComponent {
  /**
   * Private
   */
  innerWidth?: number;
  /**
   * Inputs
   */
  @Input() isSidebarClosed: boolean = false;
  @Input() item?: any;
  @Input() showIcon = true;
  /**
   * Outputs
   */
  @Output() itemClick = new EventEmitter<any>();

  constructor(private sidebarService: SidebarService) {
    innerWidth = window.innerWidth;
  }

  onClick(event: Event, data: any) {
    this.sidebarService.sidebarItemClick.next({ event, data, type: ClickType.ITEM, sidebarType: 'regular' });
  }
}
