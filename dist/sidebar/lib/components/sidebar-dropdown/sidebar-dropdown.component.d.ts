import { Subscription } from 'rxjs';
import { SidebarService } from '../../common/services/sidebar.service';
import { ClickType } from '../../common/enums/click-type.enum';
import * as i0 from "@angular/core";
export declare class SidebarDropdownComponent {
    private sidebarService;
    readonly ClickType: typeof ClickType;
    item?: any;
    isDropdownOpen: boolean;
    subscriptions: Subscription[];
    isSidebarClosed: boolean;
    styleClass: string;
    constructor(sidebarService: SidebarService);
    onClick(event: Event, data: any, type: ClickType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarDropdownComponent, "app-sidebar-dropdown", never, { "item": { "alias": "item"; "required": false; }; "isSidebarClosed": { "alias": "isSidebarClosed"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, never, true, never>;
}
