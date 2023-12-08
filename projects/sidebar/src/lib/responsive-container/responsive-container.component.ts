import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { BurgerMenuPosition } from '../common/models/burger-menu-position.model';

@Component({
  selector: 'c-responsive-container',
  templateUrl: './responsive-container.component.html',
  styleUrls: ['./responsive-container.component.scss'],
  standalone: true,
  imports: [CommonModule, NgIconsModule],
})
export class ResponsiveContainerComponent {
  @Input() burgerMenuIcon!: string;
  mobileIsSidebarClosed = false;
  isMobile = window.innerWidth < 550;
}
