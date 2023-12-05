import { SidebarService } from '../common/services/sidebar.service';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { LargeSidebarConfig } from '../common/models/large-sidebar-config.model';
import { ClassicThemeComponent } from '../themes/classic-theme/classic-theme.component';
import { AngularThemeComponent } from '../themes/angular-theme/angular-theme.component';
import { ResponsiveContainerComponent } from '../responsive-container/responsive-container.component';
import { SidebarHeaderComponent } from '../sidebar-header/sidebar-header.component';
import { SmallSidebarComponent } from '../small-sidebar/small-sidebar.component';
import { SmallSidebarConfig } from '../common/models/small-sidebar-config.model';
import { Subscription } from 'rxjs';

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
export class SidebarComponent implements OnInit, OnDestroy {
  /**
   * Private
   */
  lgSidebarConfig!: LargeSidebarConfig;
  smSidebarConfig!: SmallSidebarConfig;
  subscriptions: Subscription[] = [];

  /**
   * Inputs sidebar
   */
  @Input() showHeader = false;
  @Input() height: string = '100vh';
  @Input() set sidebarConfig(value: LargeSidebarConfig) {
    this.lgSidebarConfig = {
      ...value,
      style: { ...value.style, height: this.showHeader ? `calc(${this.height} - 65px)` : this.height },
    };
  }

  /**
   * Inputs small sidebar
   */
  @Input() set smallSidebarConfig(value: SmallSidebarConfig) {
    this.smSidebarConfig = {
      ...value,
      style: { ...value.style, height: this.showHeader ? `calc(${this.height} - 65px)` : this.height },
    };
  }
  @Input() smallSidebarDefaultIndex!: number;

  /**
   * Outputs
   */
  @Output() onItemClick = new EventEmitter<any>();

  constructor(private sidebarService: SidebarService) {}

  /* ====================================
  *              LIFECYCLES
  ======================================= */

  ngOnInit(): void {
    this.listenClickEvents();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  /* ====================================
  *                HELPERS
  ======================================= */

  listenClickEvents() {
    this.subscriptions.push(
      this.sidebarService.sidebarItemClick.subscribe((value) => {
        this.onItemClick.emit(value);
      })
    );
  }
}
