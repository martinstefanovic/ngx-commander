import { Overlay } from '@angular/cdk/overlay';
import { ElementRef, ViewContainerRef } from '@angular/core';
import { TooltipData } from './tooltip-container/tooltip-container.component';
import * as i0 from "@angular/core";
export declare class TooltipDirective {
    private element;
    private overlay;
    private viewContainer;
    appTooltip: TooltipData;
    disableTooltip: boolean;
    private overlayRef;
    constructor(element: ElementRef<HTMLElement>, overlay: Overlay, viewContainer: ViewContainerRef);
    showTooltip(): void;
    hideTooltip(): void;
    ngOnDestroy(): void;
    private attachTooltip;
    private getPositionStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[appTooltip]", never, { "appTooltip": { "alias": "appTooltip"; "required": false; }; "disableTooltip": { "alias": "disableTooltip"; "required": false; }; }, {}, never, never, false, never>;
}
