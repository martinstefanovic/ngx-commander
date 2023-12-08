import { SidebarService } from '../common/services/sidebar.service';
import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { LargeSidebarConfig } from '../common/models/large-sidebar-config.model';
import { SmallSidebarConfig } from '../common/models/small-sidebar-config.model';
import { Subscription } from 'rxjs';
import { SidebarTheme } from '../../public-api';
import { SidebarLogoConfig } from '../common/models/sidebar-logo-config.model';
import * as i0 from "@angular/core";
export declare class SidebarComponent implements OnInit, OnDestroy {
    private sidebarService;
    /**
     * Private
     */
    readonly SidebarTheme: typeof SidebarTheme;
    lgSidebarConfig: LargeSidebarConfig;
    smSidebarConfig: SmallSidebarConfig;
    subscriptions: Subscription[];
    /**
     * Inputs logo
     */
    logoConfig: SidebarLogoConfig;
    burgerMenuIcon: string;
    /**
     * Inputs sidebar
     */
    height: string;
    set sidebarConfig(value: LargeSidebarConfig);
    /**
     * Inputs small sidebar
     */
    set smallSidebarConfig(value: SmallSidebarConfig);
    smallSidebarDefaultIndex: number;
    /**
     * Outputs
     */
    onItemClick: EventEmitter<any>;
    constructor(sidebarService: SidebarService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    listenClickEvents(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "c-sidebar", never, { "logoConfig": { "alias": "logoConfig"; "required": false; }; "burgerMenuIcon": { "alias": "burgerMenuIcon"; "required": false; }; "height": { "alias": "height"; "required": false; }; "sidebarConfig": { "alias": "sidebarConfig"; "required": false; }; "smallSidebarConfig": { "alias": "smallSidebarConfig"; "required": false; }; "smallSidebarDefaultIndex": { "alias": "smallSidebarDefaultIndex"; "required": false; }; }, { "onItemClick": "onItemClick"; }, never, ["[smallSidebar]", "[header]", "[body]", "[footer]"], true, never>;
}
