import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { LargeSidebarConfig } from '../../common/models/large-sidebar-config.model';
import { SidebarTitleComponent } from '../../components/sidebar-title/sidebar-title.component';
import { SidebarItemComponent } from '../../components/sidebar-item/sidebar-item.component';
import { SidebarDropdownComponent } from '../../components/sidebar-dropdown/sidebar-dropdown.component';
import { CommonModule } from '@angular/common';
import { detectOS, setOsShortcut } from '../../common/utils/osUtils';
import { OS } from '../../common/enums/os.enum';

@Component({
  selector: 'c-classic-theme',
  templateUrl: './classic-theme.component.html',
  styleUrls: ['./classic-theme.component.scss', '../../../../style.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [SidebarTitleComponent, SidebarItemComponent, SidebarDropdownComponent, CommonModule],
})
export class ClassicThemeComponent implements OnInit {
  @Input() isSidebarClosed: boolean = false;
  @Input() config?: LargeSidebarConfig;
  osKey!: string;

  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'j') {
      event.preventDefault();
      this.onToggleSidebar();
    }
  }

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.osKey = setOsShortcut();
  }

  onToggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.sidebarService.isSidebarClosed.next(this.isSidebarClosed);
  }
}
