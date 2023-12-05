import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TooltipDirective } from '../../common/ui/tooltip/tooltip.directive';
import { NgIconsModule } from '@ng-icons/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TooltipDirective, NgIconsModule, RouterModule],
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
