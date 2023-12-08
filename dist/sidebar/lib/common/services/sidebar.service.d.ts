import { BehaviorSubject } from 'rxjs';
import { SidebarClickEvent } from '../models/click-event.model';
import * as i0 from "@angular/core";
export declare class SidebarService {
    isSidebarClosed: BehaviorSubject<boolean>;
    sidebarItemClick: BehaviorSubject<SidebarClickEvent | null>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidebarService>;
}
