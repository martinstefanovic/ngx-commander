import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { TooltipDirective } from '../../common/ui/tooltip/tooltip.directive';
import { NgIconsModule } from '@ng-icons/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-dropdown',
  templateUrl: './sidebar-dropdown.component.html',
  styleUrls: ['./sidebar-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, TooltipDirective, NgIconsModule, RouterModule],
})
export class SidebarDropdownComponent {
  @Input() item?: any;
  isDropdownOpen = false;
  subscriptions: Subscription[] = [];
  @Input() isSidebarClosed: boolean = false;
  @Input() styleClass!: string;
}
