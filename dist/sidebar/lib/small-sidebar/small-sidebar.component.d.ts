import { SmallSidebarConfig } from '../common/models/small-sidebar-config.model';
import { SidebarService } from '../common/services/sidebar.service';
import * as i0 from "@angular/core";
export declare class SmallSidebarComponent {
    private sidebarService;
    height: any;
    config: SmallSidebarConfig;
    defaultSelectedIndex?: number;
    activeItemIndex?: number;
    isSidebarClosed: boolean;
    constructor(sidebarService: SidebarService);
    ngOnInit(): void;
    onSelectItem(event: Event, itemIndex: number, item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmallSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SmallSidebarComponent, "c-small-sidebar", never, { "config": { "alias": "config"; "required": false; }; "defaultSelectedIndex": { "alias": "defaultSelectedIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
