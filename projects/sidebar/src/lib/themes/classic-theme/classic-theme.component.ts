import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { LargeSidebarConfig } from '../../common/models/large-sidebar-config.model';

@Component({
  selector: 'c-classic-theme',
  templateUrl: './classic-theme.component.html',
  styleUrls: ['./classic-theme.component.scss', '../../../../style.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassicThemeComponent {
  @Input() isSidebarClosed: boolean = false;
  @Input() config?: LargeSidebarConfig;

  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'l') {
      event.preventDefault();
      this.onToggleSidebar();
    }
  }

  constructor(private sidebarService: SidebarService) {}

  onToggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.sidebarService.isSidebarClosed.next(this.isSidebarClosed);
  }
}
