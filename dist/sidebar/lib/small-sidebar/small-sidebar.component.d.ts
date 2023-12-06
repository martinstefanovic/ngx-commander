import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SmallSidebarComponent {
    selectItem: EventEmitter<any>;
    toggleSidebar: EventEmitter<any>;
    config?: {
        routes: {
            title: string;
            icon: string;
        }[];
    };
    defaultSelectedIndex?: number;
    set colors(colors: any);
    defaultColors: {
        background: string;
        text: string;
        activeBackground: string;
        activeBorder: string;
        activeText: string;
    };
    activeItemIndex?: number;
    isSidebarClosed: boolean;
    ngOnInit(): void;
    onSelectItem(itemIndex: number, item: any): void;
    onSidebarToggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmallSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SmallSidebarComponent, "c-small-sidebar", never, { "config": { "alias": "config"; "required": false; }; "defaultSelectedIndex": { "alias": "defaultSelectedIndex"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; }, { "selectItem": "selectItem"; "toggleSidebar": "toggleSidebar"; }, never, never, false, never>;
}
