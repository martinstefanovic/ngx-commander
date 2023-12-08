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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ElementRef }, { token: i1.Overlay }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.4", type: TooltipDirective, isStandalone: true, selector: "[appTooltip]", inputs: { appTooltip: "appTooltip", disableTooltip: "disableTooltip" }, host: { listeners: { "mouseenter": "showTooltip()", "focus": "showTooltip()", "mouseleave": "hideTooltip()", "blur": "hideTooltip()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appTooltip]',
                    standalone: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaWRlYmFyL3NyYy9saWIvY29tbW9uL3VpL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEdBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFlLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7QUFLdkgsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQixZQUNVLE9BQWdDLEVBQ2hDLE9BQWdCLEVBQ2hCLGFBQStCO1FBRi9CLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2hDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBUGhDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGVBQVUsR0FBc0IsSUFBSSxDQUFDO0lBTTFDLENBQUM7SUFJSixXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLElBQUksRUFBRTtZQUMzQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUlELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzNDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUM1QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDN0Q7UUFFRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO2lCQUMxQjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDaEIsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNqQyxhQUFhLENBQUM7WUFDYjtnQkFDRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsT0FBTzthQUNwQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs4R0F4RVUsZ0JBQWdCO2tHQUFoQixnQkFBZ0I7OzJGQUFoQixnQkFBZ0I7a0JBSjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtvSUFFVSxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBWU4sV0FBVztzQkFGVixZQUFZO3VCQUFDLFlBQVk7O3NCQUN6QixZQUFZO3VCQUFDLE9BQU87Z0JBV3JCLFdBQVc7c0JBRlYsWUFBWTt1QkFBQyxZQUFZOztzQkFDekIsWUFBWTt1QkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiwgUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50LCBUb29sdGlwRGF0YSwgVE9PTFRJUF9EQVRBIH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFRvb2x0aXBdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGFwcFRvb2x0aXAhOiBUb29sdGlwRGF0YTtcbiAgQElucHV0KCkgZGlzYWJsZVRvb2x0aXAgPSBmYWxzZTtcblxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIHNob3dUb29sdGlwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWY/Lmhhc0F0dGFjaGVkKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZVRvb2x0aXApIHRoaXMuYXR0YWNoVG9vbHRpcCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBoaWRlVG9vbHRpcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmPy5oYXNBdHRhY2hlZCgpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWY/LmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hUb29sdGlwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLmdldFBvc2l0aW9uU3RyYXRlZ3koKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoeyBwb3NpdGlvblN0cmF0ZWd5IH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVE9PTFRJUF9EQVRBLFxuICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLmFwcFRvb2x0aXAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRQb3J0YWwoVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCwgdGhpcy52aWV3Q29udGFpbmVyLCBpbmplY3Rvcik7XG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3NpdGlvblN0cmF0ZWd5KCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsZW1lbnQpXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICBvcmlnaW5ZOiAnY2VudGVyJyxcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgICBvdmVybGF5WTogJ2NlbnRlcicsXG4gICAgICAgICAgcGFuZWxDbGFzczogJ3JpZ2h0JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdjZW50ZXInLFxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgICAgcGFuZWxDbGFzczogJ2JvdHRvbScsXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgfVxufVxuIl19