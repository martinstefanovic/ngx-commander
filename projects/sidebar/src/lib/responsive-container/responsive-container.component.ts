import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'c-responsive-container',
  templateUrl: './responsive-container.component.html',
  styleUrls: ['./responsive-container.component.scss'],
  standalone: true,
  imports: [CommonModule, NgIconsModule],
})
export class ResponsiveContainerComponent {
  @Input() mobileMenuIcon = 'heroBars4';
  mobileIsSidebarClosed = false;
  isMobile = window.innerWidth < 550;
}
