import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'c-small-sidebar',
  templateUrl: './small-sidebar.component.html',
  styleUrls: ['./small-sidebar.component.scss', '../../../style.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SmallSidebarComponent {
  @Output() selectItem = new EventEmitter();
  @Output() toggleSidebar = new EventEmitter();
  @Input() config?: {
    routes: { title: string; icon: string }[];
  };
  @Input() defaultSelectedIndex?: number;
  @Input() set colors(colors: any) {
    this.defaultColors = { ...this.defaultColors, ...colors };
  }
  defaultColors = {
    background: '#eaeaea',
    text: 'black',
    activeBackground: '#eaeaea',
    activeBorder: '#215bde',
    activeText: '#215bde',
  };
  activeItemIndex?: number;
  isSidebarClosed = false;

  ngOnInit(): void {
    this.activeItemIndex = this.defaultSelectedIndex;
  }

  onSelectItem(itemIndex: number, item: any) {
    this.activeItemIndex = itemIndex;
    this.selectItem.emit({ index: itemIndex, item });
  }

  onSidebarToggle(): void {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.toggleSidebar.emit(this.isSidebarClosed);
  }
}
