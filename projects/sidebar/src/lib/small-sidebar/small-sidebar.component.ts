import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TooltipDirective } from '../common/ui/tooltip/tooltip.directive';
import { SmallSidebarConfig } from '../common/models/small-sidebar-config.model';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../common/services/sidebar.service';
import { ClickType } from '../common/enums/click-type.enum';

@Component({
  selector: 'c-small-sidebar',
  templateUrl: './small-sidebar.component.html',
  styleUrls: ['./small-sidebar.component.scss', '../../../style.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TooltipDirective, CommonModule],
})
export class SmallSidebarComponent {
  height!: any;
  @Input() config!: SmallSidebarConfig;
  @Input() defaultSelectedIndex?: number;
  activeItemIndex?: number;
  isSidebarClosed = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.activeItemIndex = this.defaultSelectedIndex;
    setTimeout(() => {
      this.height = this.config?.style?.height;
    }, 2000);
  }

  onSelectItem(event: Event, itemIndex: number, item: any) {
    this.activeItemIndex = itemIndex;

    this.sidebarService.sidebarItemClick.next({
      event,
      data: item,
      index: itemIndex,
      type: ClickType.ITEM,
      sidebarType: 'small',
    });
  }
}
