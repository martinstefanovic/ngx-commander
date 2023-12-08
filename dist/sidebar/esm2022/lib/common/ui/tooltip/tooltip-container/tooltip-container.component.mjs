import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, InjectionToken, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export const TOOLTIP_DATA = new InjectionToken('Data to display in tooltip');
export class TooltipContainerComponent {
    get asString() {
        return typeof this.tooltipData === 'string' ? this.tooltipData : false;
    }
    get asTemplate() {
        return this.tooltipData instanceof TemplateRef ? this.tooltipData : false;
    }
    constructor(tooltipData) {
        this.tooltipData = tooltipData;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipContainerComponent, deps: [{ token: TOOLTIP_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TooltipContainerComponent, isStandalone: true, selector: "app-tooltip-container", ngImport: i0, template: `<ng-container *ngIf="asString as string">
      {{ string }}
    </ng-container>

    <ng-container *ngIf="asTemplate as template">
      <ng-template [ngTemplateOutlet]="template"></ng-template>
    </ng-container> `, isInline: true, styles: [":host{display:block;max-width:12rem;padding:.5rem;font-size:.8rem;color:#fff;background:#000;border-radius:.25rem;box-sizing:border-box;margin-left:.3rem}:host-context(.top){margin-bottom:.5rem}:host-context(.bottom){margin-top:.5rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-tooltip-container', template: `<ng-container *ngIf="asString as string">
      {{ string }}
    </ng-container>

    <ng-container *ngIf="asTemplate as template">
      <ng-template [ngTemplateOutlet]="template"></ng-template>
    </ng-container> `, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [CommonModule], styles: [":host{display:block;max-width:12rem;padding:.5rem;font-size:.8rem;color:#fff;background:#000;border-radius:.25rem;box-sizing:border-box;margin-left:.3rem}:host-context(.top){margin-bottom:.5rem}:host-context(.bottom){margin-top:.5rem}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [TOOLTIP_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2lkZWJhci9zcmMvbGliL2NvbW1vbi91aS90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBR3hHLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBYyw0QkFBNEIsQ0FBQyxDQUFDO0FBc0MxRixNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLElBQUksUUFBUTtRQUNWLE9BQU8sT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUUsQ0FBQztJQUVELFlBQXlDLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs4R0FUMUQseUJBQXlCLGtCQVNoQixZQUFZO2tHQVRyQix5QkFBeUIsaUZBbEMxQjs7Ozs7O3FCQU1TLHFUQTBCVCxZQUFZOzsyRkFFWCx5QkFBeUI7a0JBcENyQyxTQUFTOytCQUNFLHVCQUF1QixZQUN2Qjs7Ozs7O3FCQU1TLG1CQXdCRix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQzs7MEJBV1YsTUFBTTsyQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRvb2x0aXBEYXRhID0gc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5leHBvcnQgY29uc3QgVE9PTFRJUF9EQVRBID0gbmV3IEluamVjdGlvblRva2VuPFRvb2x0aXBEYXRhPignRGF0YSB0byBkaXNwbGF5IGluIHRvb2x0aXAnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRvb2x0aXAtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwiYXNTdHJpbmcgYXMgc3RyaW5nXCI+XG4gICAgICB7eyBzdHJpbmcgfX1cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhc1RlbXBsYXRlIGFzIHRlbXBsYXRlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPiBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXgtd2lkdGg6IDEycmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QtY29udGV4dCgudG9wKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QtY29udGV4dCguYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQge1xuICBnZXQgYXNTdHJpbmcoKTogc3RyaW5nIHwgZmFsc2Uge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy50b29sdGlwRGF0YSA9PT0gJ3N0cmluZycgPyB0aGlzLnRvb2x0aXBEYXRhIDogZmFsc2U7XG4gIH1cblxuICBnZXQgYXNUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IGZhbHNlIHtcbiAgICByZXR1cm4gdGhpcy50b29sdGlwRGF0YSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gdGhpcy50b29sdGlwRGF0YSA6IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChUT09MVElQX0RBVEEpIHB1YmxpYyB0b29sdGlwRGF0YTogVG9vbHRpcERhdGEpIHt9XG59XG4iXX0=