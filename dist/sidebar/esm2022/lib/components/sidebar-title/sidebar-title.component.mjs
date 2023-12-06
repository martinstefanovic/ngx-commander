import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../common/ui/tooltip/tooltip.directive";
export class SidebarTitleComponent {
    constructor() {
        this.isSidebarClosed = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: SidebarTitleComponent, selector: "app-sidebar-title", inputs: { item: "item", isSidebarClosed: "isSidebarClosed" }, ngImport: i0, template: "<p\n  *ngIf=\"!item?.path && !item.children\"\n  class=\"sidebar-section-title\"\n  [appTooltip]=\"item.title\"\n  [disableTooltip]=\"!isSidebarClosed\"\n>\n  <span>{{ item.title }}</span>\n</p>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-title', encapsulation: ViewEncapsulation.None, template: "<p\n  *ngIf=\"!item?.path && !item.children\"\n  class=\"sidebar-section-title\"\n  [appTooltip]=\"item.title\"\n  [disableTooltip]=\"!isSidebarClosed\"\n>\n  <span>{{ item.title }}</span>\n</p>\n" }]
        }], propDecorators: { item: [{
                type: Input
            }], isSidebarClosed: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaWRlYmFyL3NyYy9saWIvY29tcG9uZW50cy9zaWRlYmFyLXRpdGxlL3NpZGViYXItdGl0bGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2lkZWJhci9zcmMvbGliL2NvbXBvbmVudHMvc2lkZWJhci10aXRsZS9zaWRlYmFyLXRpdGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUXBFLE1BQU0sT0FBTyxxQkFBcUI7SUFObEM7UUFTVyxvQkFBZSxHQUFZLEtBQUssQ0FBQztLQUMzQzs4R0FKWSxxQkFBcUI7a0dBQXJCLHFCQUFxQix1SENSbEMsc01BUUE7OzJGREFhLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDRSxtQkFBbUIsaUJBR2QsaUJBQWlCLENBQUMsSUFBSTs4QkFHNUIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLGVBQWU7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci10aXRsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci10aXRsZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVGl0bGVDb21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtPzogYW55O1xuICBpbm5lcldpZHRoPzogbnVtYmVyO1xuICBASW5wdXQoKSBpc1NpZGViYXJDbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiIsIjxwXG4gICpuZ0lmPVwiIWl0ZW0/LnBhdGggJiYgIWl0ZW0uY2hpbGRyZW5cIlxuICBjbGFzcz1cInNpZGViYXItc2VjdGlvbi10aXRsZVwiXG4gIFthcHBUb29sdGlwXT1cIml0ZW0udGl0bGVcIlxuICBbZGlzYWJsZVRvb2x0aXBdPVwiIWlzU2lkZWJhckNsb3NlZFwiXG4+XG4gIDxzcGFuPnt7IGl0ZW0udGl0bGUgfX08L3NwYW4+XG48L3A+XG4iXX0=