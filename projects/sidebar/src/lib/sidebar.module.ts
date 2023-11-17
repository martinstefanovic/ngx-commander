import {
  heroBars4,
  heroChevronUp,
  heroChevronDown,
  heroChevronRight,
  heroArrowLeft,
} from '@ng-icons/heroicons/outline';
import { NgModule } from '@angular/core';
import { SmallSidebarComponent } from './small-sidebar/small-sidebar.component';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './common/ui/tooltip/tooltip.directive';
import { TooltipContainerComponent } from './common/ui/tooltip/tooltip-container/tooltip-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgIconsModule } from '@ng-icons/core';
import { SidebarDropdownComponent } from './components/sidebar-dropdown/sidebar-dropdown.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SidebarTitleComponent } from './components/sidebar-title/sidebar-title.component';
import { RouterModule } from '@angular/router';
import { ResponsiveContainerComponent } from './responsive-container/responsive-container.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { ClassicThemeComponent } from './themes/classic-theme/classic-theme.component';
import { AngularThemeComponent } from './themes/angular-theme/angular-theme.component';

@NgModule({
  declarations: [
    SmallSidebarComponent,
    TooltipDirective,
    TooltipContainerComponent,
    SidebarComponent,
    SidebarDropdownComponent,
    SidebarItemComponent,
    SidebarTitleComponent,
    ResponsiveContainerComponent,
    SidebarHeaderComponent,
    ClassicThemeComponent,
    AngularThemeComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule,
    RouterModule,
    NgIconsModule.withIcons({ heroBars4, heroChevronDown, heroChevronUp, heroChevronRight, heroArrowLeft }),
  ],
  exports: [SmallSidebarComponent, SidebarComponent, ResponsiveContainerComponent, SidebarHeaderComponent],
})
export class SidebarModule {}
