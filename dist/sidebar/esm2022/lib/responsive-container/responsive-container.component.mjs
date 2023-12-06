import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ng-icons/core";
export class ResponsiveContainerComponent {
    constructor() {
        this.mobileMenuIcon = 'heroBars4';
        this.mobileIsSidebarClosed = false;
        this.isMobile = window.innerWidth < 550;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ResponsiveContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: ResponsiveContainerComponent, selector: "c-responsive-container", inputs: { mobileMenuIcon: "mobileMenuIcon" }, ngImport: i0, template: "<main class=\"CMND-responsive-container\" [class.CMND-hidden]=\"mobileIsSidebarClosed\">\n  <div class=\"CMND-content\">\n    <ng-content />\n  </div>\n  <div class=\"CMND-backdrop\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\"></div>\n</main>\n<button class=\"CMND-mobile-sidebar-btn\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\">\n  <ng-icon class=\"icon\" size=\"20\" [name]=\"mobileMenuIcon\"></ng-icon>\n</button>\n", styles: [".CMND-mobile-sidebar-btn{position:fixed;top:0;left:0;z-index:9999;height:55px;width:55px;background-color:var(--ngx-commander-large-sidebar-menu-btn-color);color:#fff;border:none;display:flex;align-items:center;justify-content:center;display:none;transition:all .3s}.CMND-mobile-sidebar-btn .icon{width:50px}@media (max-width: 575.98px){.CMND-mobile-sidebar-btn{display:block}}.CMND-responsive-container{display:flex;width:100%;justify-content:space-around;flex-flow:row wrap;align-items:stretch;transition:all 1s}@media (max-width: 575.98px){.CMND-responsive-container{position:fixed;top:0;left:0;z-index:99999}.CMND-responsive-container ::ng-deep c-large-sidebar{width:100%}}.CMND-responsive-container.CMND-hidden{visibility:hidden;opacity:0;left:-1000px}.CMND-responsive-container.CMND-hidden .backdrop{opacity:0;background-color:transparent}.CMND-responsive-container .CMND-content{flex:4}.CMND-responsive-container .CMND-backdrop{flex:1;background-color:#00000043;transition:all 1s ease-out}\n"], dependencies: [{ kind: "component", type: i1.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ResponsiveContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-responsive-container', template: "<main class=\"CMND-responsive-container\" [class.CMND-hidden]=\"mobileIsSidebarClosed\">\n  <div class=\"CMND-content\">\n    <ng-content />\n  </div>\n  <div class=\"CMND-backdrop\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\"></div>\n</main>\n<button class=\"CMND-mobile-sidebar-btn\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\">\n  <ng-icon class=\"icon\" size=\"20\" [name]=\"mobileMenuIcon\"></ng-icon>\n</button>\n", styles: [".CMND-mobile-sidebar-btn{position:fixed;top:0;left:0;z-index:9999;height:55px;width:55px;background-color:var(--ngx-commander-large-sidebar-menu-btn-color);color:#fff;border:none;display:flex;align-items:center;justify-content:center;display:none;transition:all .3s}.CMND-mobile-sidebar-btn .icon{width:50px}@media (max-width: 575.98px){.CMND-mobile-sidebar-btn{display:block}}.CMND-responsive-container{display:flex;width:100%;justify-content:space-around;flex-flow:row wrap;align-items:stretch;transition:all 1s}@media (max-width: 575.98px){.CMND-responsive-container{position:fixed;top:0;left:0;z-index:99999}.CMND-responsive-container ::ng-deep c-large-sidebar{width:100%}}.CMND-responsive-container.CMND-hidden{visibility:hidden;opacity:0;left:-1000px}.CMND-responsive-container.CMND-hidden .backdrop{opacity:0;background-color:transparent}.CMND-responsive-container .CMND-content{flex:4}.CMND-responsive-container .CMND-backdrop{flex:1;background-color:#00000043;transition:all 1s ease-out}\n"] }]
        }], propDecorators: { mobileMenuIcon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2lkZWJhci9zcmMvbGliL3Jlc3BvbnNpdmUtY29udGFpbmVyL3Jlc3BvbnNpdmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NpZGViYXIvc3JjL2xpYi9yZXNwb25zaXZlLWNvbnRhaW5lci9yZXNwb25zaXZlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2pELE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFNVyxtQkFBYyxHQUFHLFdBQVcsQ0FBQztRQUN0QywwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0tBQ3BDOzhHQUpZLDRCQUE0QjtrR0FBNUIsNEJBQTRCLDRHQ1B6QyxtY0FTQTs7MkZERmEsNEJBQTRCO2tCQUx4QyxTQUFTOytCQUNFLHdCQUF3Qjs4QkFLekIsY0FBYztzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1yZXNwb25zaXZlLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNwb25zaXZlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3BvbnNpdmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBtb2JpbGVNZW51SWNvbiA9ICdoZXJvQmFyczQnO1xuICBtb2JpbGVJc1NpZGViYXJDbG9zZWQgPSBmYWxzZTtcbiAgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDU1MDtcbn1cbiIsIjxtYWluIGNsYXNzPVwiQ01ORC1yZXNwb25zaXZlLWNvbnRhaW5lclwiIFtjbGFzcy5DTU5ELWhpZGRlbl09XCJtb2JpbGVJc1NpZGViYXJDbG9zZWRcIj5cbiAgPGRpdiBjbGFzcz1cIkNNTkQtY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50IC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiQ01ORC1iYWNrZHJvcFwiIChjbGljayk9XCJtb2JpbGVJc1NpZGViYXJDbG9zZWQgPSAhbW9iaWxlSXNTaWRlYmFyQ2xvc2VkXCI+PC9kaXY+XG48L21haW4+XG48YnV0dG9uIGNsYXNzPVwiQ01ORC1tb2JpbGUtc2lkZWJhci1idG5cIiAoY2xpY2spPVwibW9iaWxlSXNTaWRlYmFyQ2xvc2VkID0gIW1vYmlsZUlzU2lkZWJhckNsb3NlZFwiPlxuICA8bmctaWNvbiBjbGFzcz1cImljb25cIiBzaXplPVwiMjBcIiBbbmFtZV09XCJtb2JpbGVNZW51SWNvblwiPjwvbmctaWNvbj5cbjwvYnV0dG9uPlxuIl19