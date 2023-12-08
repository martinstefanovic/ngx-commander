import { OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../common/services/sidebar.service';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SidebarHeaderComponent implements OnInit, OnDestroy {
    private sidebarService;
    subscriptions: Subscription[];
    isSidebarClosed: boolean;
    config?: {
        logo: {
            url: string;
            width?: string;
            height?: string;
        };
        collapsedLogo?: {
            url?: string;
            width?: string;
            height?: string;
        };
    };
    constructor(sidebarService: SidebarService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarHeaderComponent, "c-sidebar-header", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, true, never>;
}
