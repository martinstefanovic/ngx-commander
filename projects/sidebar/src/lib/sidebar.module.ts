import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SmallSidebarComponent } from './small-sidebar/small-sidebar.component';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './common/ui/tooltip/tooltip.directive';
import { TooltipContainerComponent } from './common/ui/tooltip/tooltip-container/tooltip-container.component';

@NgModule({
  declarations: [SidebarComponent, SmallSidebarComponent, TooltipDirective, TooltipContainerComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, SmallSidebarComponent],
})
export class SidebarModule {}
