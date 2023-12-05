import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LargeSidebarConfig } from '../common/models/large-sidebar-config.model';
import { ClassicThemeComponent } from '../themes/classic-theme/classic-theme.component';
import { AngularThemeComponent } from '../themes/angular-theme/angular-theme.component';
import { ResponsiveContainerComponent } from '../responsive-container/responsive-container.component';
import { SidebarHeaderComponent } from '../sidebar-header/sidebar-header.component';
import { SmallSidebarComponent } from '../small-sidebar/small-sidebar.component';
import { SmallSidebarConfig } from '../common/models/small-sidebar-config.model';

@Component({
  selector: 'c-sidebar',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    ClassicThemeComponent,
    AngularThemeComponent,
    ResponsiveContainerComponent,
    SidebarHeaderComponent,
    SmallSidebarComponent,
  ],
  styles: `
  ::ng-deep {
    c-responsive-container {
      height: 100%;
    }
  }

`,
})
export class SidebarComponent {
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
