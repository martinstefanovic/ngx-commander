import { Component } from '@angular/core';
import { SmallSidebarConfig } from 'projects/sidebar/src/lib/common/models/small-sidebar-config.model';
import { LargeSidebarConfig, SidebarLogoConfig, SidebarTheme } from 'projects/sidebar/src/public-api';
import { SIDEBAR_ROUTES } from './sidebar-routes/sidebar-routes';
import { SMALL_SIDEBAR_ROUTES } from './sidebar-routes/small-sidebar-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testing';
  smallSidebar: SmallSidebarConfig = {
    style: {
      width: '55px',
    },
    routes: SMALL_SIDEBAR_ROUTES,
  };
  largeSidebar: LargeSidebarConfig = {
    theme: SidebarTheme.Classic,
    title: 'Sidebar example',
    layout: {
      header: {
        show: true,
        flex: 1,
      },
      body: {
        flex: 8,
      },
      footer: {
        show: false,
        flex: 1,
      },
    },
    routes: SIDEBAR_ROUTES,
  };
  logoConfig: SidebarLogoConfig = {
    logo: {
      url: './../assets/full-logo.png',
      height: '50px',
      width: 'auto',
    },
    collapsedLogo: {
      url: './../assets/full-logo.png',
      height: '30px',
      width: 'auto',
    },
  };

  /* ====================================
  *                HELPERS
  ======================================= */

  onSelectSmallSidebar(event: any) {
    console.log('SMALL SIDEBAR ITEM SELECTED', event);
  }
  onSelectSidebar(event: any) {
    console.log('SIDEBAR ITEM SELECTED', event);
  }
  onSidebarItemClick(event: any) {
    console.log('CLICK ON SIDEBAR ITEM', event);
  }
}
