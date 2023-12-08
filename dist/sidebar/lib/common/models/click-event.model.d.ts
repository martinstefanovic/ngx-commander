import { ClickType } from '../enums/click-type.enum';
export interface SidebarClickEvent {
    event: Event;
    data: any;
    index?: number;
    sidebarType: 'regular' | 'small';
    type: ClickType.DROPDOWN | ClickType.DROPDOWN_ITEM | ClickType.ITEM;
}
