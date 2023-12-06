import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SidebarDropdownComponent {
    item?: any;
    isDropdownOpen: boolean;
    subscriptions: Subscription[];
    isSidebarClosed: boolean;
    styleClass: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarDropdownComponent, "app-sidebar-dropdown", never, { "item": { "alias": "item"; "required": false; }; "isSidebarClosed": { "alias": "isSidebarClosed"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, never, false, never>;
}
