export const SIDEBAR_ROUTES = [
  {
    title: 'General',
  },
  {
    path: ['statistics'],
    title: 'Overview',
    icon: 'heroPresentationChartBar',
    class: 'highlighted',
  },
  {
    path: ['statistics'],
    title: 'Inbox',
    icon: 'heroInboxArrowDown',
  },
  {
    title: 'Management',
  },
  {
    title: 'Orders',
    icon: 'heroBuildingStorefront',
    children: [
      {
        path: ['statistics'],
        title: 'Order Management',
        icon: 'heroBarsArrowUp',
      },
      {
        path: ['statistics'],
        title: 'Order Setting',
        icon: 'heroCog6Tooth',
      },
    ],
  },
  {
    title: 'Rule Management',
    icon: 'heroAdjustmentsHorizontal',
    children: [
      {
        path: ['statistics'],
        title: 'Decision Rule',
        icon: 'heroCodeBracketSquare',
      },
      {
        path: ['statistics'],
        title: 'Risk Grading',
        icon: 'heroCodeBracketSquare',
      },
      {
        path: ['statistics'],
        title: 'Scoring',
        icon: 'heroCodeBracketSquare',
      },
      {
        path: ['statistics'],
        title: 'Decision Flow',
        icon: 'heroCodeBracketSquare',
      },
    ],
  },
  {
    title: 'Organisation',
  },
  {
    path: ['statistics'],
    title: 'Organisation Settings',
    icon: 'heroCodeBracketSquare',
  },
  {
    title: 'Apps & Perks',
    icon: 'heroUsers',
    children: [
      {
        path: ['statistics'],
        title: 'App One',
        icon: 'heroCodeBracketSquare',
      },
      {
        path: ['statistics'],
        title: 'App Two',
        icon: 'heroCodeBracketSquare',
      },
    ],
  },
  {
    title: 'Tax Forms',
    icon: 'heroPencilSquare',
    children: [
      {
        path: ['statistics'],
        title: 'Form One',
        icon: 'heroPencilSquare',
      },
      {
        path: ['statistics'],
        title: 'Form Two',
        icon: 'heroPencilSquare',
      },
    ],
  },
];
