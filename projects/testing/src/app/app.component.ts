import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testing';
  smallSidebar = {
    routes: [
      {
        title: 'Sidebar example',
        icon: 'SE',
      },
      {
        title: 'Social Media',
        icon: 'SM',
      },
    ],
  };
  largeSidebar: {
    theme: 'classic';
    title: string;
    routes: any[];
  } = {
    theme: 'classic',
    title: 'Sidebar example',
    routes: [
      {
        title: 'Introduction',
      },
      {
        path: ['statistics'],
        title: 'Dashboard',
        icon: 'heroPresentationChartBar',
      },
      {
        path: ['statistics'],
        title: 'Dashboard',
        icon: 'heroPresentationChartBar',
      },
      {
        path: ['statistics'],
        title: 'Dashboard',
        icon: 'heroPresentationChartBar',
      },
      {
        path: ['statistics'],
        title: 'Dashboard',
        icon: 'heroPresentationChartBar',
      },
      {
        path: ['statistics'],
        title: 'BG Changed',
        icon: 'heroPresentationChartBar',
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        class: 'red',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
          {
            path: ['statistics'],
            title: 'Users',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
          {
            path: ['statistics'],
            title: 'Users',
            icon: 'heroUsers',
          },
          {
            path: ['statistics'],
            title: 'Dashboards',
            icon: 'heroUsers',
          },
          {
            title: 'Subdropdown',
            icon: 'heroUsers',
            children: [
              {
                path: ['statistics'],
                title: 'Subsubitem',
                icon: 'heroUsers',
              },
            ],
          },
          {
            path: ['statistics'],
            title: 'Users',
            icon: 'heroUsers',
          },
          {
            path: ['statistics'],
            title: 'Dashboards',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'Users',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
      {
        title: 'LAST',
        icon: 'heroUsers',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
          },
        ],
      },
    ],
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
