import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallSidebarComponent } from '../small-sidebar/small-sidebar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarHeaderComponent } from '../sidebar-header/sidebar-header.component';
import { ResponsiveContainerComponent } from '../responsive-container/responsive-container.component';
import { SmallSidebarConfig } from '../common/models/small-sidebar-config.model';
import { LargeSidebarConfig } from '../../public-api';

@Component({
  selector: 'c-cmd-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SmallSidebarComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    ResponsiveContainerComponent,
  ],
  templateUrl: './cmd-sidebar.component.html',
  styleUrl: './cmd-sidebar.component.scss',
})
export class CmdSidebarComponent {
  @Input() showHeader = false;
  @Input() height: string = '100vh';

  @Input() set smallSidebarConfig(value: SmallSidebarConfig) {
    this.smSidebarConfig = {
      ...value,
      style: { ...value.style, height: this.showHeader ? `calc(${this.height} - 65px)` : this.height },
    };
  }
  @Input() set sidebarConfig(value: LargeSidebarConfig) {
    this.lgSidebarConfig = {
      ...value,
      style: { ...value.style, height: this.showHeader ? `calc(${this.height} - 65px)` : this.height },
    };
  }
  @Input() lgSidebarConfig!: LargeSidebarConfig;
  @Input() smSidebarConfig!: SmallSidebarConfig;
}
