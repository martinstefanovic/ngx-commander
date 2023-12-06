import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ng-icons/core";
import * as i3 from "@angular/router";
import * as i4 from "../../common/ui/tooltip/tooltip.directive";
export class SidebarDropdownComponent {
    constructor() {
        this.isDropdownOpen = false;
        this.subscriptions = [];
        this.isSidebarClosed = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarDropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: { item: "item", isSidebarClosed: "isSidebarClosed", styleClass: "styleClass" }, ngImport: i0, template: "<ng-container *ngIf=\"item.children\">\n  <section>\n    <div\n      class=\"sidebar-dropdown-item\"\n      tooltipPosition=\"right\"\n      [ngClass]=\"{ 'active-dropdown': isDropdownOpen }\"\n      [class]=\"styleClass\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n      (click)=\"isDropdownOpen = !isDropdownOpen\"\n      [appTooltip]=\"item.title\"\n      [disableTooltip]=\"!isSidebarClosed\"\n    >\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\"></ng-icon>\n      <p>{{ item.title }}</p>\n      <ng-container *ngIf=\"isDropdownOpen; else iconUp\">\n        <ng-icon *ngIf=\"!isSidebarClosed\" class=\"sidebar-dropdown-icon\" name=\"heroChevronUp\"></ng-icon>\n      </ng-container>\n      <ng-template #iconUp>\n        <ng-icon *ngIf=\"!isSidebarClosed\" class=\"sidebar-dropdown-icon\" name=\"heroChevronDown\"></ng-icon>\n      </ng-template>\n    </div>\n\n    <div\n      class=\"sidebar-dropdown-subitems\"\n      [ngClass]=\"isDropdownOpen ? 'opened' : ''\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n    >\n      <ng-container *ngFor=\"let subItem of item.children\">\n        <ng-container *ngIf=\"subItem.path\">\n          <div\n            class=\"sidebar-dropdown-item sidebar-dropdown-subitem\"\n            [routerLink]=\"subItem.path\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            [appTooltip]=\"subItem.title\"\n            [disableTooltip]=\"!isSidebarClosed\"\n          >\n            <i class=\"line-connector\" [ngClass]=\"{ 'hide-line-connector': isSidebarClosed }\"></i>\n            <span *ngIf=\"!isSidebarClosed\">\n              {{ subItem.title }}\n            </span>\n            <ng-icon size=\"15\" *ngIf=\"isSidebarClosed\" class=\"icon\" [name]=\"subItem.icon\"></ng-icon>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"subItem?.children\">\n          <app-sidebar-dropdown\n            styleClass=\"bg-transparent subdropdown\"\n            [item]=\"subItem\"\n            [isSidebarClosed]=\"isSidebarClosed\"\n          />\n        </ng-container>\n      </ng-container>\n    </div>\n  </section>\n</ng-container>\n", styles: [".classic-sidebar .closed-sidebar .subdropdown{padding-left:0rem!important;margin-left:-5px!important}.classic-sidebar .closed-sidebar .sidebar-dropdown-subitems.closed-sidebar{margin-left:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "directive", type: i4.TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }, { kind: "component", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: ["item", "isSidebarClosed", "styleClass"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-dropdown', encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"item.children\">\n  <section>\n    <div\n      class=\"sidebar-dropdown-item\"\n      tooltipPosition=\"right\"\n      [ngClass]=\"{ 'active-dropdown': isDropdownOpen }\"\n      [class]=\"styleClass\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n      (click)=\"isDropdownOpen = !isDropdownOpen\"\n      [appTooltip]=\"item.title\"\n      [disableTooltip]=\"!isSidebarClosed\"\n    >\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\"></ng-icon>\n      <p>{{ item.title }}</p>\n      <ng-container *ngIf=\"isDropdownOpen; else iconUp\">\n        <ng-icon *ngIf=\"!isSidebarClosed\" class=\"sidebar-dropdown-icon\" name=\"heroChevronUp\"></ng-icon>\n      </ng-container>\n      <ng-template #iconUp>\n        <ng-icon *ngIf=\"!isSidebarClosed\" class=\"sidebar-dropdown-icon\" name=\"heroChevronDown\"></ng-icon>\n      </ng-template>\n    </div>\n\n    <div\n      class=\"sidebar-dropdown-subitems\"\n      [ngClass]=\"isDropdownOpen ? 'opened' : ''\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n    >\n      <ng-container *ngFor=\"let subItem of item.children\">\n        <ng-container *ngIf=\"subItem.path\">\n          <div\n            class=\"sidebar-dropdown-item sidebar-dropdown-subitem\"\n            [routerLink]=\"subItem.path\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            [appTooltip]=\"subItem.title\"\n            [disableTooltip]=\"!isSidebarClosed\"\n          >\n            <i class=\"line-connector\" [ngClass]=\"{ 'hide-line-connector': isSidebarClosed }\"></i>\n            <span *ngIf=\"!isSidebarClosed\">\n              {{ subItem.title }}\n            </span>\n            <ng-icon size=\"15\" *ngIf=\"isSidebarClosed\" class=\"icon\" [name]=\"subItem.icon\"></ng-icon>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"subItem?.children\">\n          <app-sidebar-dropdown\n            styleClass=\"bg-transparent subdropdown\"\n            [item]=\"subItem\"\n            [isSidebarClosed]=\"isSidebarClosed\"\n          />\n        </ng-container>\n      </ng-container>\n    </div>\n  </section>\n</ng-container>\n", styles: [".classic-sidebar .closed-sidebar .subdropdown{padding-left:0rem!important;margin-left:-5px!important}.classic-sidebar .closed-sidebar .sidebar-dropdown-subitems.closed-sidebar{margin-left:0!important}\n"] }]
        }], propDecorators: { item: [{
                type: Input
            }], isSidebarClosed: [{
                type: Input
            }], styleClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaWRlYmFyL3NyYy9saWIvY29tcG9uZW50cy9zaWRlYmFyLWRyb3Bkb3duL3NpZGViYXItZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2lkZWJhci9zcmMvbGliL2NvbXBvbmVudHMvc2lkZWJhci1kcm9wZG93bi9zaWRlYmFyLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBU3ZGLE1BQU0sT0FBTyx3QkFBd0I7SUFOckM7UUFRRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7S0FFM0M7OEdBTlksd0JBQXdCO2tHQUF4Qix3QkFBd0Isb0pDVHJDLDRvRUF1REEsa3ZDRDlDYSx3QkFBd0I7OzJGQUF4Qix3QkFBd0I7a0JBTnBDLFNBQVM7K0JBQ0Usc0JBQXNCLGlCQUdqQixpQkFBaUIsQ0FBQyxJQUFJOzhCQUc1QixJQUFJO3NCQUFaLEtBQUs7Z0JBR0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckRyb3Bkb3duQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbT86IGFueTtcbiAgaXNEcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgQElucHV0KCkgaXNTaWRlYmFyQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3MhOiBzdHJpbmc7XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5jaGlsZHJlblwiPlxuICA8c2VjdGlvbj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInNpZGViYXItZHJvcGRvd24taXRlbVwiXG4gICAgICB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiXG4gICAgICBbbmdDbGFzc109XCJ7ICdhY3RpdmUtZHJvcGRvd24nOiBpc0Ryb3Bkb3duT3BlbiB9XCJcbiAgICAgIFtjbGFzc109XCJzdHlsZUNsYXNzXCJcbiAgICAgIFtjbGFzcy5jbG9zZWQtc2lkZWJhcl09XCJpc1NpZGViYXJDbG9zZWRcIlxuICAgICAgKGNsaWNrKT1cImlzRHJvcGRvd25PcGVuID0gIWlzRHJvcGRvd25PcGVuXCJcbiAgICAgIFthcHBUb29sdGlwXT1cIml0ZW0udGl0bGVcIlxuICAgICAgW2Rpc2FibGVUb29sdGlwXT1cIiFpc1NpZGViYXJDbG9zZWRcIlxuICAgID5cbiAgICAgIDxuZy1pY29uIHNpemU9XCIxNVwiIGNsYXNzPVwiaWNvblwiIFtuYW1lXT1cIml0ZW0uaWNvblwiPjwvbmctaWNvbj5cbiAgICAgIDxwPnt7IGl0ZW0udGl0bGUgfX08L3A+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNEcm9wZG93bk9wZW47IGVsc2UgaWNvblVwXCI+XG4gICAgICAgIDxuZy1pY29uICpuZ0lmPVwiIWlzU2lkZWJhckNsb3NlZFwiIGNsYXNzPVwic2lkZWJhci1kcm9wZG93bi1pY29uXCIgbmFtZT1cImhlcm9DaGV2cm9uVXBcIj48L25nLWljb24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjaWNvblVwPlxuICAgICAgICA8bmctaWNvbiAqbmdJZj1cIiFpc1NpZGViYXJDbG9zZWRcIiBjbGFzcz1cInNpZGViYXItZHJvcGRvd24taWNvblwiIG5hbWU9XCJoZXJvQ2hldnJvbkRvd25cIj48L25nLWljb24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJzaWRlYmFyLWRyb3Bkb3duLXN1Yml0ZW1zXCJcbiAgICAgIFtuZ0NsYXNzXT1cImlzRHJvcGRvd25PcGVuID8gJ29wZW5lZCcgOiAnJ1wiXG4gICAgICBbY2xhc3MuY2xvc2VkLXNpZGViYXJdPVwiaXNTaWRlYmFyQ2xvc2VkXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWJJdGVtIG9mIGl0ZW0uY2hpbGRyZW5cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Ykl0ZW0ucGF0aFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwic2lkZWJhci1kcm9wZG93bi1pdGVtIHNpZGViYXItZHJvcGRvd24tc3ViaXRlbVwiXG4gICAgICAgICAgICBbcm91dGVyTGlua109XCJzdWJJdGVtLnBhdGhcIlxuICAgICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwieyBleGFjdDogdHJ1ZSB9XCJcbiAgICAgICAgICAgIFthcHBUb29sdGlwXT1cInN1Ykl0ZW0udGl0bGVcIlxuICAgICAgICAgICAgW2Rpc2FibGVUb29sdGlwXT1cIiFpc1NpZGViYXJDbG9zZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibGluZS1jb25uZWN0b3JcIiBbbmdDbGFzc109XCJ7ICdoaWRlLWxpbmUtY29ubmVjdG9yJzogaXNTaWRlYmFyQ2xvc2VkIH1cIj48L2k+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpc1NpZGViYXJDbG9zZWRcIj5cbiAgICAgICAgICAgICAge3sgc3ViSXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPG5nLWljb24gc2l6ZT1cIjE1XCIgKm5nSWY9XCJpc1NpZGViYXJDbG9zZWRcIiBjbGFzcz1cImljb25cIiBbbmFtZV09XCJzdWJJdGVtLmljb25cIj48L25nLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViSXRlbT8uY2hpbGRyZW5cIj5cbiAgICAgICAgICA8YXBwLXNpZGViYXItZHJvcGRvd25cbiAgICAgICAgICAgIHN0eWxlQ2xhc3M9XCJiZy10cmFuc3BhcmVudCBzdWJkcm9wZG93blwiXG4gICAgICAgICAgICBbaXRlbV09XCJzdWJJdGVtXCJcbiAgICAgICAgICAgIFtpc1NpZGViYXJDbG9zZWRdPVwiaXNTaWRlYmFyQ2xvc2VkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==