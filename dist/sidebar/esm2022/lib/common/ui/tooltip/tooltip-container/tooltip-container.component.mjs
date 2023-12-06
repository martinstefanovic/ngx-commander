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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: TooltipContainerComponent, deps: [{ token: TOOLTIP_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: TooltipContainerComponent, selector: "app-tooltip-container", ngImport: i0, template: `<ng-container *ngIf="asString as string">
      {{ string }}
    </ng-container>

    <ng-container *ngIf="asTemplate as template">
      <ng-template [ngTemplateOutlet]="template"></ng-template>
    </ng-container> `, isInline: true, styles: [":host{display:block;max-width:12rem;padding:.5rem;font-size:.8rem;color:#fff;background:#000;border-radius:.25rem;box-sizing:border-box;margin-left:.3rem}:host-context(.top){margin-bottom:.5rem}:host-context(.bottom){margin-top:.5rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: TooltipContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-tooltip-container', template: `<ng-container *ngIf="asString as string">
      {{ string }}
    </ng-container>

    <ng-container *ngIf="asTemplate as template">
      <ng-template [ngTemplateOutlet]="template"></ng-template>
    </ng-container> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:block;max-width:12rem;padding:.5rem;font-size:.8rem;color:#fff;background:#000;border-radius:.25rem;box-sizing:border-box;margin-left:.3rem}:host-context(.top){margin-bottom:.5rem}:host-context(.bottom){margin-top:.5rem}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [TOOLTIP_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2lkZWJhci9zcmMvbGliL2NvbW1vbi91aS90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEcsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFjLDRCQUE0QixDQUFDLENBQUM7QUFvQzFGLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsSUFBSSxRQUFRO1FBQ1YsT0FBTyxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekUsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RSxDQUFDO0lBRUQsWUFBeUMsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzhHQVQxRCx5QkFBeUIsa0JBU2hCLFlBQVk7a0dBVHJCLHlCQUF5Qiw2REFoQzFCOzs7Ozs7cUJBTVM7OzJGQTBCUix5QkFBeUI7a0JBbENyQyxTQUFTOytCQUNFLHVCQUF1QixZQUN2Qjs7Ozs7O3FCQU1TLG1CQXdCRix1QkFBdUIsQ0FBQyxNQUFNOzswQkFXbEMsTUFBTTsyQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgVG9vbHRpcERhdGEgPSBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbmV4cG9ydCBjb25zdCBUT09MVElQX0RBVEEgPSBuZXcgSW5qZWN0aW9uVG9rZW48VG9vbHRpcERhdGE+KCdEYXRhIHRvIGRpc3BsYXkgaW4gdG9vbHRpcCcpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdG9vbHRpcC1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJhc1N0cmluZyBhcyBzdHJpbmdcIj5cbiAgICAgIHt7IHN0cmluZyB9fVxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFzVGVtcGxhdGUgYXMgdGVtcGxhdGVcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+IGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1heC13aWR0aDogMTJyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICAgICAgfVxuXG4gICAgICA6aG9zdC1jb250ZXh0KC50b3ApIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICA6aG9zdC1jb250ZXh0KC5ib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgZ2V0IGFzU3RyaW5nKCk6IHN0cmluZyB8IGZhbHNlIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMudG9vbHRpcERhdGEgPT09ICdzdHJpbmcnID8gdGhpcy50b29sdGlwRGF0YSA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGFzVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8dm9pZD4gfCBmYWxzZSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbHRpcERhdGEgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IHRoaXMudG9vbHRpcERhdGEgOiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoVE9PTFRJUF9EQVRBKSBwdWJsaWMgdG9vbHRpcERhdGE6IFRvb2x0aXBEYXRhKSB7fVxufVxuIl19