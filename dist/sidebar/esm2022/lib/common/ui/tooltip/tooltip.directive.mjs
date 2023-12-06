import { ComponentPortal } from '@angular/cdk/portal';
import { Directive, HostListener, Injector, Input, } from '@angular/core';
import { TooltipContainerComponent, TOOLTIP_DATA } from './tooltip-container/tooltip-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class TooltipDirective {
    constructor(element, overlay, viewContainer) {
        this.element = element;
        this.overlay = overlay;
        this.viewContainer = viewContainer;
        this.disableTooltip = false;
        this.overlayRef = null;
    }
    showTooltip() {
        if (this.overlayRef?.hasAttached() === true) {
            return;
        }
        if (!this.disableTooltip)
            this.attachTooltip();
    }
    hideTooltip() {
        if (this.overlayRef?.hasAttached() === true) {
            this.overlayRef?.detach();
        }
    }
    ngOnDestroy() {
        this.overlayRef?.dispose();
    }
    attachTooltip() {
        if (this.overlayRef === null) {
            const positionStrategy = this.getPositionStrategy();
            this.overlayRef = this.overlay.create({ positionStrategy });
        }
        const injector = Injector.create({
            providers: [
                {
                    provide: TOOLTIP_DATA,
                    useValue: this.appTooltip,
                },
            ],
        });
        const component = new ComponentPortal(TooltipContainerComponent, this.viewContainer, injector);
        this.overlayRef.attach(component);
    }
    getPositionStrategy() {
        return this.overlay
            .position()
            .flexibleConnectedTo(this.element)
            .withPositions([
            {
                originX: 'end',
                originY: 'center',
                overlayX: 'start',
                overlayY: 'center',
                panelClass: 'right',
            },
            {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
                panelClass: 'bottom',
            },
        ]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ElementRef }, { token: i1.Overlay }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.3", type: TooltipDirective, selector: "[appTooltip]", inputs: { appTooltip: "appTooltip", disableTooltip: "disableTooltip" }, host: { listeners: { "mouseenter": "showTooltip()", "focus": "showTooltip()", "mouseleave": "hideTooltip()", "blur": "hideTooltip()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appTooltip]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.Overlay }, { type: i0.ViewContainerRef }], propDecorators: { appTooltip: [{
                type: Input
            }], disableTooltip: [{
                type: Input
            }], showTooltip: [{
                type: HostListener,
                args: ['mouseenter']
            }, {
                type: HostListener,
                args: ['focus']
            }], hideTooltip: [{
                type: HostListener,
                args: ['mouseleave']
            }, {
                type: HostListener,
                args: ['blur']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaWRlYmFyL3NyYy9saWIvY29tbW9uL3VpL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEdBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFlLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7QUFJdkgsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQixZQUNVLE9BQWdDLEVBQ2hDLE9BQWdCLEVBQ2hCLGFBQStCO1FBRi9CLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2hDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBUGhDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGVBQVUsR0FBc0IsSUFBSSxDQUFDO0lBTTFDLENBQUM7SUFJSixXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLElBQUksRUFBRTtZQUMzQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUlELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzNDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUM1QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDN0Q7UUFFRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO2lCQUMxQjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDaEIsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNqQyxhQUFhLENBQUM7WUFDYjtnQkFDRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsT0FBTzthQUNwQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs4R0F4RVUsZ0JBQWdCO2tHQUFoQixnQkFBZ0I7OzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCO29JQUVVLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFZTixXQUFXO3NCQUZWLFlBQVk7dUJBQUMsWUFBWTs7c0JBQ3pCLFlBQVk7dUJBQUMsT0FBTztnQkFXckIsV0FBVztzQkFGVixZQUFZO3VCQUFDLFlBQVk7O3NCQUN6QixZQUFZO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmLCBQb3NpdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXBDb250YWluZXJDb21wb25lbnQsIFRvb2x0aXBEYXRhLCBUT09MVElQX0RBVEEgfSBmcm9tICcuL3Rvb2x0aXAtY29udGFpbmVyL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudCc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwVG9vbHRpcF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgYXBwVG9vbHRpcCE6IFRvb2x0aXBEYXRhO1xuICBASW5wdXQoKSBkaXNhYmxlVG9vbHRpcCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgc2hvd1Rvb2x0aXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZj8uaGFzQXR0YWNoZWQoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaXNhYmxlVG9vbHRpcCkgdGhpcy5hdHRhY2hUb29sdGlwKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIGhpZGVUb29sdGlwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWY/Lmhhc0F0dGFjaGVkKCkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZj8uZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmPy5kaXNwb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaFRvb2x0aXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMuZ2V0UG9zaXRpb25TdHJhdGVneSgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7IHBvc2l0aW9uU3RyYXRlZ3kgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBUT09MVElQX0RBVEEsXG4gICAgICAgICAgdXNlVmFsdWU6IHRoaXMuYXBwVG9vbHRpcCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudFBvcnRhbChUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50LCB0aGlzLnZpZXdDb250YWluZXIsIGluamVjdG9yKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKGNvbXBvbmVudCk7XG4gIH1cblxuICBwcml2YXRlIGdldFBvc2l0aW9uU3RyYXRlZ3koKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudClcbiAgICAgIC53aXRoUG9zaXRpb25zKFtcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxuICAgICAgICAgIG9yaWdpblk6ICdjZW50ZXInLFxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAnY2VudGVyJyxcbiAgICAgICAgICBwYW5lbENsYXNzOiAncmlnaHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ2NlbnRlcicsXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgICAgb3ZlcmxheVg6ICdjZW50ZXInLFxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgICAgICBwYW5lbENsYXNzOiAnYm90dG9tJyxcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuICB9XG59XG4iXX0=