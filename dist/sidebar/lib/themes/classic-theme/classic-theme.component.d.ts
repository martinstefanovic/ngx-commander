import { OnInit } from '@angular/core';
import { SidebarService } from '../../common/services/sidebar.service';
import { LargeSidebarConfig } from '../../common/models/large-sidebar-config.model';
import * as i0 from "@angular/core";
export declare class ClassicThemeComponent implements OnInit {
    private sidebarService;
    /**
     * Private
     */
    osKey: string;
    /**
     * Inputs
     */
    isSidebarClosed: boolean;
    config?: LargeSidebarConfig;
    onKeyPress(event: KeyboardEvent): void;
    constructor(sidebarService: SidebarService);
    ngOnInit(): void;
    onToggleSidebar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClassicThemeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClassicThemeComponent, "c-classic-theme", never, { "isSidebarClosed": { "alias": "isSidebarClosed"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, ["[header]", "[footer]"], true, never>;
}
