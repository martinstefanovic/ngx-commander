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
  largeSidebar = {
    title: 'Sidebar example',
    routes: [
      {
        path: ['statistics'],
        title: 'Dashboard',
        icon: 'heroPresentationChartBar',
        name: 'statistics',
      },
      {
        opened: false,
        title: 'Users',
        type: 'dropdown',
        icon: 'heroUsers',
        name: 'statistics',
        children: [
          {
            path: ['statistics'],
            title: 'Clients',
            icon: 'heroUsers',
            name: 'statistics',
          },
          {
            path: ['statistics', 'pro'],
            title: 'Administrators',
            icon: 'heroUsers',
            name: 'statistics',
          },
        ],
      },
    ],
  };
}
