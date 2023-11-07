import { Component, HostListener, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'c-large-sidebar',
  templateUrl: './large-sidebar.component.html',
  styleUrls: ['./large-sidebar.component.scss', '../../../style.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LargeSidebarComponent {
  leftSidebarActiveIndex?: number;
  items: any[] = [];
  @Input() isSidebarClosed: boolean = false;
  @Input() config?: {
    title: string;
    routes: any[];
    style?: {
      height: '90vh';
    };
  };

  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'l') {
      event.preventDefault();
      this.isSidebarClosed = !this.isSidebarClosed;

      this.sidebarService.isSidebarClosed.next(this.isSidebarClosed);
    }
  }

  constructor(private sidebarService: SidebarService) {}
}
