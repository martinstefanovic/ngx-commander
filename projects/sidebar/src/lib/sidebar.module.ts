import { heroBars4, heroChevronUp, heroChevronDown } from '@ng-icons/heroicons/outline';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SmallSidebarComponent } from './small-sidebar/small-sidebar.component';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './common/ui/tooltip/tooltip.directive';
import { TooltipContainerComponent } from './common/ui/tooltip/tooltip-container/tooltip-container.component';
import { LargeSidebarComponent } from './large-sidebar/large-sidebar.component';
import { NgIconsModule } from '@ng-icons/core';
import { SidebarDropdownComponent } from './large-sidebar/sidebar-dropdown/sidebar-dropdown.component';
import { SidebarItemComponent } from './large-sidebar/sidebar-item/sidebar-item.component';
import { SidebarTitleComponent } from './large-sidebar/sidebar-title/sidebar-title.component';
import { RouterModule } from '@angular/router';
import { ResponsiveContainerComponent } from './responsive-container/responsive-container.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SmallSidebarComponent,
    TooltipDirective,
    TooltipContainerComponent,
    LargeSidebarComponent,
    SidebarDropdownComponent,
    SidebarItemComponent,
    SidebarTitleComponent,
    ResponsiveContainerComponent,
    SidebarHeaderComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule,
    RouterModule,
    NgIconsModule.withIcons({ heroBars4, heroChevronDown, heroChevronUp }),
  ],
  exports: [
    SidebarComponent,
    SmallSidebarComponent,
    LargeSidebarComponent,
    ResponsiveContainerComponent,
    SidebarHeaderComponent,
  ],
})
export class SidebarModule {}
