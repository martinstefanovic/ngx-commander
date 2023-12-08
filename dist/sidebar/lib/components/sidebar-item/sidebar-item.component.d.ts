import { EventEmitter } from '@angular/core';
import { SidebarService } from '../../common/services/sidebar.service';
import * as i0 from "@angular/core";
export declare class SidebarItemComponent {
    private sidebarService;
    /**
     * Private
     */
    innerWidth?: number;
    /**
     * Inputs
     */
    isSidebarClosed: boolean;
    item?: any;
    showIcon: boolean;
    /**
     * Outputs
     */
    itemClick: EventEmitter<any>;
    constructor(sidebarService: SidebarService);
    onClick(event: Event, data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarItemComponent, "app-sidebar-item", never, { "isSidebarClosed": { "alias": "isSidebarClosed"; "required": false; }; "item": { "alias": "item"; "required": false; }; "showIcon": { "alias": "showIcon"; "required": false; }; }, { "itemClick": "itemClick"; }, never, never, true, never>;
}
