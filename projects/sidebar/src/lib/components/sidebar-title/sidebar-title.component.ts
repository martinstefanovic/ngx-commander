import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TooltipDirective } from '../../common/ui/tooltip/tooltip.directive';

@Component({
  selector: 'app-sidebar-title',
  templateUrl: './sidebar-title.component.html',
  styleUrls: ['./sidebar-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TooltipDirective],
})
export class SidebarTitleComponent {
  @Input() item?: any;
  innerWidth?: number;
  @Input() isSidebarClosed: boolean = false;
}
