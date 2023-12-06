import { SidebarService } from '../../sidebar.service';
import { LargeSidebarConfig } from '../../common/models/large-sidebar-config.model';
import * as i0 from "@angular/core";
export declare class ClassicThemeComponent {
    private sidebarService;
    isSidebarClosed: boolean;
    config?: LargeSidebarConfig;
    onKeyPress(event: KeyboardEvent): void;
    constructor(sidebarService: SidebarService);
    onToggleSidebar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClassicThemeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClassicThemeComponent, "c-classic-theme", never, { "isSidebarClosed": { "alias": "isSidebarClosed"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
