import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'c-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
})
export class SidebarHeaderComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isSidebarClosed: boolean = false;
  @Input() config?: {
    logo: {
      url: string;
      width?: string;
      height?: string;
    };
    collapsedLogo?: {
      url?: string;
      width?: string;
      height?: string;
    };
  };

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.sidebarService.isSidebarClosed.subscribe((isSidebarClosed) => {
        this.isSidebarClosed = isSidebarClosed;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
