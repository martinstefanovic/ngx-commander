import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TooltipDirective } from '../../common/ui/tooltip/tooltip.directive';
import { NgIconsModule } from '@ng-icons/core';
import { RouterModule } from '@angular/router';
import { ClickType } from '../../common/enums/click-type.enum';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../common/services/sidebar.service";
import * as i2 from "@angular/common";
import * as i3 from "@ng-icons/core";
import * as i4 from "@angular/router";
export class SidebarItemComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        /**
         * Inputs
         */
        this.isSidebarClosed = false;
        this.showIcon = true;
        /**
         * Outputs
         */
        this.itemClick = new EventEmitter();
        innerWidth = window.innerWidth;
    }
    onClick(event, data) {
        this.sidebarService.sidebarItemClick.next({ event, data, type: ClickType.ITEM, sidebarType: 'regular' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarItemComponent, deps: [{ token: i1.SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SidebarItemComponent, isStandalone: true, selector: "app-sidebar-item", inputs: { isSidebarClosed: "isSidebarClosed", item: "item", showIcon: "showIcon" }, outputs: { itemClick: "itemClick" }, ngImport: i0, template: "@if (item?.path) {\n  <div\n    class=\"sidebar-single-item\"\n    [class.closed-sidebar]=\"isSidebarClosed\"\n    [routerLink]=\"item.path\"\n    routerLinkActive=\"active\"\n    [appTooltip]=\"item.title\"\n    [disableTooltip]=\"!isSidebarClosed\"\n    (click)=\"onClick($event, item)\"\n    [ngClass]=\"item.class\"\n  >\n    @if (showIcon) {\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\" />\n    }\n    <span class=\"item-title\"> {{ item.title }} </span>\n  </div>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }, { kind: "ngmodule", type: NgIconsModule }, { kind: "component", type: i3.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i4.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i4.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-item', encapsulation: ViewEncapsulation.None, standalone: true, imports: [CommonModule, TooltipDirective, NgIconsModule, RouterModule], template: "@if (item?.path) {\n  <div\n    class=\"sidebar-single-item\"\n    [class.closed-sidebar]=\"isSidebarClosed\"\n    [routerLink]=\"item.path\"\n    routerLinkActive=\"active\"\n    [appTooltip]=\"item.title\"\n    [disableTooltip]=\"!isSidebarClosed\"\n    (click)=\"onClick($event, item)\"\n    [ngClass]=\"item.class\"\n  >\n    @if (showIcon) {\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\" />\n    }\n    <span class=\"item-title\"> {{ item.title }} </span>\n  </div>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.SidebarService }], propDecorators: { isSidebarClosed: [{
                type: Input
            }], item: [{
                type: Input
            }], showIcon: [{
                type: Input
            }], itemClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NpZGViYXIvc3JjL2xpYi9jb21wb25lbnRzL3NpZGViYXItaXRlbS9zaWRlYmFyLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2lkZWJhci9zcmMvbGliL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtL3NpZGViYXItaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBVS9DLE1BQU0sT0FBTyxvQkFBb0I7SUFnQi9CLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVhsRDs7V0FFRztRQUNNLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekI7O1dBRUc7UUFDTyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUc1QyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVksRUFBRSxJQUFTO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMzRyxDQUFDOzhHQXRCVSxvQkFBb0I7a0dBQXBCLG9CQUFvQixxTUNoQmpDLCtlQWlCQSx5RERIWSxZQUFZLDZIQUFFLGdCQUFnQixrR0FBRSxhQUFhLDZJQUFFLFlBQVk7OzJGQUUxRCxvQkFBb0I7a0JBUmhDLFNBQVM7K0JBQ0Usa0JBQWtCLGlCQUdiLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7bUZBVTdELGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBSUksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi91aS90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nSWNvbnNNb2R1bGUgfSBmcm9tICdAbmctaWNvbnMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWNrVHlwZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9lbnVtcy9jbGljay10eXBlLmVudW0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVG9vbHRpcERpcmVjdGl2ZSwgTmdJY29uc01vZHVsZSwgUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckl0ZW1Db21wb25lbnQge1xuICAvKipcbiAgICogUHJpdmF0ZVxuICAgKi9cbiAgaW5uZXJXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIElucHV0c1xuICAgKi9cbiAgQElucHV0KCkgaXNTaWRlYmFyQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGl0ZW0/OiBhbnk7XG4gIEBJbnB1dCgpIHNob3dJY29uID0gdHJ1ZTtcbiAgLyoqXG4gICAqIE91dHB1dHNcbiAgICovXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBTaWRlYmFyU2VydmljZSkge1xuICAgIGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQ6IEV2ZW50LCBkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnNpZGViYXJJdGVtQ2xpY2submV4dCh7IGV2ZW50LCBkYXRhLCB0eXBlOiBDbGlja1R5cGUuSVRFTSwgc2lkZWJhclR5cGU6ICdyZWd1bGFyJyB9KTtcbiAgfVxufVxuIiwiQGlmIChpdGVtPy5wYXRoKSB7XG4gIDxkaXZcbiAgICBjbGFzcz1cInNpZGViYXItc2luZ2xlLWl0ZW1cIlxuICAgIFtjbGFzcy5jbG9zZWQtc2lkZWJhcl09XCJpc1NpZGViYXJDbG9zZWRcIlxuICAgIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucGF0aFwiXG4gICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiXG4gICAgW2FwcFRvb2x0aXBdPVwiaXRlbS50aXRsZVwiXG4gICAgW2Rpc2FibGVUb29sdGlwXT1cIiFpc1NpZGViYXJDbG9zZWRcIlxuICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudCwgaXRlbSlcIlxuICAgIFtuZ0NsYXNzXT1cIml0ZW0uY2xhc3NcIlxuICA+XG4gICAgQGlmIChzaG93SWNvbikge1xuICAgICAgPG5nLWljb24gc2l6ZT1cIjE1XCIgY2xhc3M9XCJpY29uXCIgW25hbWVdPVwiaXRlbS5pY29uXCIgLz5cbiAgICB9XG4gICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRpdGxlXCI+IHt7IGl0ZW0udGl0bGUgfX0gPC9zcGFuPlxuICA8L2Rpdj5cbn1cbiJdfQ==