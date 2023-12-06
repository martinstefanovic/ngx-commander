# Intro

![](https://raw.githubusercontent.com/martinstefanovic/ngx-commander/main/projects/sidebar/src/assets/sidebar.jpeg)

## Installation

First you need to install package with:

```
npm i @martinstf/ngx-commander-sidebar
```

In your modul import `SidebarModule`

```
@NgModule({
  imports: [...],
  exports: [
    ...
    SidebarModule,
    ...
  ],
  providers: [...],
})
```

For icons you need to install

```
npm i @ng-icons/core
```

... and include `NgIconsModule`. You can read more about it [here](https://www.npmjs.com/package/@ng-icons/core 'here')

## Usage

### Components

#### Sidebar header

```
<c-sidebar-header
        [config]="{
          logo: {
            url: 'logo.png',
            height: '50px',
            width: 'auto',
          },
          collapsedLogo: {
            url: 'small-logo.png',
            height: '35px',
            width: 'auto',
          }
        }" />
```

| Name   | Type     | Description                                                                                                          |
| :----- | :------- | -------------------------------------------------------------------------------------------------------------------- |
| config | `object` | You can set logo options for expanded sidebar but also you can set different logo options when sidebar is collapsed. |

#### Small sidebar

```
<c-small-sidebar
    [config]="{
        routes: [{
			title: 'My item',
			icon: 'MI'
		}]
    }"
    [defaultSelectedIndex]="0"
    (selectItem)="onSlectSmallSidebarItem($event)"
/>
```

##### Options

| Name                 | Type     | Description                                              | Default     |
| :------------------- | :------- | -------------------------------------------------------- | ----------- |
| config               | `object` | Config contains `routes` key with list of sidebar items. | `undefined` |
| defaultSelectedIndex | `number` | Predefine selected item. Default is                      | `undefined` |

##### Events

| Name       | Description           | Return                    |
| :--------- | :-------------------- | ------------------------- |
| selectItem | When item is selected | `Object` of selected item |

#### Large sidebar

```
<c-large-sidebar
    [config]="{
		title: 'My sidebar title',
		routes: [
			...
		]
	}"
    [isSidebarClosed]="isSidebarClosed"
/>
```

In routes you can pass diferent types of items.

First type is **single sidebar item**:

```
{
        path: ['statistics'],
        title: 'Statistics',
        icon: 'heroArrowTrendingUp', // Icon from @ng-icons/core
},
```

Second type is **sidebar dropdown** with single items:

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

##### Options

| Name            | Type      | Description                                                                                           | Default     |
| :-------------- | :-------- | ----------------------------------------------------------------------------------------------------- | ----------- |
| config          | `object`  | Config contains `routes` key with list of sidebar items and `title` for sidebar title if you need it. | `undefined` |
| isSidebarClosed | `boolean` | Predefine is sidebar closed.                                                                          | `false`     |

#### Responsive container

If you need your sidebar to be responsive on mobile devices, you need to wrap the entire sidebar in this component

```
 <c-responsive-container>
 // Other sidebar components
 </c-responsive-container>
```

##### Options

| Name           | Type     | Description                  | Default     |
| :------------- | :------- | ---------------------------- | ----------- |
| mobileMenuIcon | `string` | Icon for mobile burger menu. | `heroBars4` |

### Examples

**Full sidebar** (`sidebar header + small sidebar + large sidebar`)

```
 <c-responsive-container>
      <c-sidebar-header
        [config]="{
          logo: {
				url: 'logo.png',
				height: '50px',
				width: 'auto',
          },
          collapsedLogo: {
				url: 'small.png'
				height: '35px',
				width: 'auto',
          }
        }" />
      <div style="display:flex;">
        <c-small-sidebar
          [config]="{
            routes: smallSidebarConfig
          }"
          [defaultSelectedIndex]="0" />
        <c-large-sidebar
          [config]="largeSidebarConfig"
          [isSidebarClosed]="isSidebarClosed" />
      </div>
    </c-responsive-container>
```
