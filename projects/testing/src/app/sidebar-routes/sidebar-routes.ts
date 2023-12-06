export const SIDEBAR_ROUTES = [
  {
    title: 'General',
  },
  {
    path: ['statistics'],
    title: 'Overview',
    icon: 'heroUsers',
    class: 'highlighted',
  },
  {
    path: ['statistics'],
    title: 'Inbox',
    icon: 'heroUsers',
  },
  {
    path: ['statistics'],
    title: 'Maintenance',
    icon: 'heroUsers',
  },
  {
    title: 'Management',
  },
  {
    title: 'Orders',
    icon: 'heroUsers',
    children: [
      {
        path: ['statistics'],
        title: 'Order Management',
        icon: 'heroUsers',
      },
      {
        path: ['statistics'],
        title: 'Order Setting',
        icon: 'heroUsers',
      },
    ],
  },
  {
    title: 'Rule Management',
    icon: 'heroUsers',
    children: [
      {
        path: ['statistics'],
        title: 'Decision Rule',
        icon: 'heroUsers',
      },
      {
        path: ['statistics'],
        title: 'Risk Grading',
        icon: 'heroUsers',
      },
      {
        path: ['statistics'],
        title: 'Scoring',
        icon: 'heroUsers',
      },
      {
        path: ['statistics'],
        title: 'Decision Flow',
        icon: 'heroUsers',
      },
    ],
  },
  {
    title: 'Organisation',
  },
  {
    path: ['statistics'],
    title: 'Organisation Settings',
    icon: 'heroUsers',
  },
  {
    title: 'Apps & Perks',
    icon: 'heroUsers',
    children: [
      {
        path: ['statistics'],
        title: 'App One',
        icon: 'heroUsers',
      },
      {
        path: ['statistics'],
        title: 'App Two',
        icon: 'heroUsers',
      },
    ],
  },
  {
    title: 'Tax Forms',
    icon: 'heroUsers',
    children: [
      {
        path: ['statistics'],
        title: 'Form One',
        icon: 'heroUsers',
      },
      {
        path: ['statistics'],
        title: 'Form Two',
        icon: 'heroUsers',
      },
    ],
  },
];
