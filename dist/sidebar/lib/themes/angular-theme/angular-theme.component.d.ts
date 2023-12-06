import { LargeSidebarConfig } from '../../common/models/large-sidebar-config.model';
import * as i0 from "@angular/core";
export declare class AngularThemeComponent {
    isSidebarClosed: boolean;
    config?: LargeSidebarConfig;
    selectedDropdown: any;
    isDropdownOpened: boolean;
    onOpenDropdown(menuItem: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularThemeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularThemeComponent, "c-angular-theme", never, { "isSidebarClosed": { "alias": "isSidebarClosed"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
