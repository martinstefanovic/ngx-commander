import { InjectionToken, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export type TooltipData = string | TemplateRef<void>;
export declare const TOOLTIP_DATA: InjectionToken<TooltipData>;
export declare class TooltipContainerComponent {
    tooltipData: TooltipData;
    get asString(): string | false;
    get asTemplate(): TemplateRef<void> | false;
    constructor(tooltipData: TooltipData);
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipContainerComponent, "app-tooltip-container", never, {}, {}, never, never, false, never>;
}
