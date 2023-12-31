import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../common/services/sidebar.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'c-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  standalone: true,
  imports: [CommonModule],
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
