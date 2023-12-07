# Intro

![](https://raw.githubusercontent.com/martinstefanovic/ngx-commander/main/projects/sidebar/src/assets/sidebar.jpeg)

## Installation

First you need to install package for sidebar and icons:

```
npm i @martinstf/ngx-commander-sidebar @ng-icons/core @ng-icons/heroicons
```

In your module or standalone component you need to import `SidebarComponent`

```
@NgModule({
  exports: [...],
  imports: [
    ...
    SidebarComponent,
    ...
  ],
  providers: [...],
})
```

Don't forget to include `NgIconsModule`. You can read more about it [here](https://www.npmjs.com/package/@ng-icons/core 'here')

## Usage

### Sidebar

```
  <c-sidebar
    height="100vh"
    [logoConfig]="{
      logo: {
        url: './../assets/full-logo.png',
        height: '50px',
        width: 'auto'
      },
      collapsedLogo: {
        url: './../assets/full-logo.png',
        height: '30px',
        width: 'auto'
      }
    }"
    [sidebarConfig]="largeSidebar"
    [smallSidebarConfig]="smallSidebar"
    [smallSidebarDefaultIndex]="0"
    (smallSidebarItemClick)="onSelectSmallSidebar($event)"
    (sidebarItemClick)="onSelectSidebar($event)"
    (onItemClick)="onSidebarItemClick($event)"
  />
```

##### Options

| Name                     | Type     | Description                                                                                                          |
| :----------------------- | :------- | -------------------------------------------------------------------------------------------------------------------- | ----------- |
| height                   | `string` | Sidebar height. You can use any CSS unit here.                                                                       |
| logoConfig               | `object` | You can set logo options for expanded sidebar but also you can set different logo options when sidebar is collapsed. |
| smallSidebarConfig       | `object` | Config contains `routes` key with list of small sidebar items.                                                       | `undefined` |
| smallSidebarDefaultIndex | `number` | Predefine selected item for small sidebar.                                                                           | `undefined` |
| sidebarConfig            | `object` | Config contains `routes` key with list of sidebar items and `title` for sidebar title if you need it.                | `undefined` |

##### Events

| Name       | Description           | Return                    |
| :--------- | :-------------------- | ------------------------- |
| selectItem | When item is selected | `Object` of selected item |

#### Sidebar item types

```
<c-sidebar
    [sidebarConfig]="{
		...
		routes: [
      // Sidebar items
			...
		]
	}"
/>
```

In routes you can pass diferent types of items.

### Section title

```
  {
    title: 'General'
  },
```

### Single sidebar item

```
  {
    path: ['statistics','users'], // This array will be transformed to 'statistics/users'
    title: 'Statistics',
    icon: 'heroArrowTrendingUp', // Icon from @ng-icons/core
  },
```

### Sidebar dropdown

```
  {
    opened: false,
    title: 'Customers',
    type: 'dropdown',
    icon: 'heroUsers',
    children: [
	  ...
      {
        path: ['users'],
        title: 'Users',
        icon: 'heroUsers',
      },
	  ...
    ],
  },
```

### Custom content

You can add custom content instade of predefined to: small sidebar, header and footer.
Just use ng-container element with proper name:

```
  <c-sidebar
    // All configuration props here...
  >

    <ng-container smallSidebar>
      <p>Small sidebar custom content</p>
    </ng-container>

    <ng-container header>
      <p>Header custom content</p>
    </ng-container>

    <ng-container footer>
      <p>Footer custom content</p>
    </ng-container>

  </c-sidebar>
```
