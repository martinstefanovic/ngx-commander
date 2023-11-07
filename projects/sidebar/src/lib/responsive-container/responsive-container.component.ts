import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-responsive-container',
  templateUrl: './responsive-container.component.html',
  styleUrls: ['./responsive-container.component.scss'],
})
export class ResponsiveContainerComponent {
  @Input() mobileMenuIcon = 'heroBars4';
  mobileIsSidebarClosed = false;
  isMobile = window.innerWidth < 550;
}
