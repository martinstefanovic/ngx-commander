import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { TooltipDirective } from '../../common/ui/tooltip/tooltip.directive';
import { NgIconsModule } from '@ng-icons/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SidebarService } from '../../common/services/sidebar.service';
import { ClickType } from '../../common/enums/click-type.enum';
import { CommonModule } from '@angular/common';
import { isRouteActivate } from '../../common/utils/activeRouteUtils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, TooltipDirective, NgIconsModule, RouterModule],
})
export class SidebarItemComponent implements OnInit, OnDestroy {
  /**
   * Private
   */
  innerWidth?: number;
  isRouteActive = false;
  subscriptions: Subscription[] = [];
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

  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) {
    innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.isRouteActive = isRouteActivate(this.router.url, this.item.path);
    this.router.events.subscribe((activatedRoute) => {
      if (activatedRoute instanceof NavigationEnd) {
        this.isRouteActive = isRouteActivate(activatedRoute.url, this.item.path);
        console.log(this.item.path, this.isRouteActive);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onClick(event: Event, data: any) {
    this.sidebarService.sidebarItemClick.next({ event, data, type: ClickType.ITEM, sidebarType: 'regular' });
  }
}
