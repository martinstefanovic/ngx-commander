import {
  heroBars4,
  heroChevronUp,
  heroChevronDown,
  heroChevronRight,
  heroArrowLeft,
} from '@ng-icons/heroicons/outline';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIconsModule,
    RouterModule,
    NgIconsModule.withIcons({ heroBars4, heroChevronDown, heroChevronUp, heroChevronRight, heroArrowLeft }),
  ],
  exports: [],
})
export class SidebarModule {}
