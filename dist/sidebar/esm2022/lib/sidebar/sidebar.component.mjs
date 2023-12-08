import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ClassicThemeComponent } from '../themes/classic-theme/classic-theme.component';
import { AngularThemeComponent } from '../themes/angular-theme/angular-theme.component';
import { ResponsiveContainerComponent } from '../responsive-container/responsive-container.component';
import { SidebarHeaderComponent } from '../sidebar-header/sidebar-header.component';
import { SmallSidebarComponent } from '../small-sidebar/small-sidebar.component';
import { CommonModule } from '@angular/common';
import { SidebarTheme } from '../../public-api';
import * as i0 from "@angular/core";
import * as i1 from "../common/services/sidebar.service";
import * as i2 from "@angular/common";
export class SidebarComponent {
    set sidebarConfig(value) {
        this.lgSidebarConfig = {
            ...value,
            style: { ...value.style, height: this.logoConfig ? `calc(${this.height} - 65px)` : this.height },
            layout: {
                header: {
                    show: true,
                    flex: 1,
                    ...value.layout?.header,
                },
                body: {
                    flex: 8,
                    ...value.layout?.body,
                },
                footer: {
                    show: true,
                    flex: 1,
                    ...value.layout?.footer,
                },
                ...value.layout,
            },
        };
    }
    /**
     * Inputs small sidebar
     */
    set smallSidebarConfig(value) {
        this.smSidebarConfig = {
            ...value,
            style: {
                ...value.style,
                height: this.logoConfig ? `calc(${this.height} - 65px)` : this.height,
                width: value?.style?.width ?? `55px`,
            },
        };
    }
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        /**
         * Private
         */
        this.SidebarTheme = SidebarTheme;
        this.subscriptions = [];
        /**
         * Inputs sidebar
         */
        this.height = '100vh';
        /**
         * Outputs
         */
        this.onItemClick = new EventEmitter();
    }
    /* ====================================
    *              LIFECYCLES
    ======================================= */
    ngOnInit() {
        this.listenClickEvents();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    /* ====================================
    *                HELPERS
    ======================================= */
    listenClickEvents() {
        this.subscriptions.push(this.sidebarService.sidebarItemClick.subscribe((value) => {
            this.onItemClick.emit(value);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarComponent, deps: [{ token: i1.SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SidebarComponent, isStandalone: true, selector: "c-sidebar", inputs: { logoConfig: "logoConfig", burgerMenuIcon: "burgerMenuIcon", height: "height", sidebarConfig: "sidebarConfig", smallSidebarConfig: "smallSidebarConfig", smallSidebarDefaultIndex: "smallSidebarDefaultIndex" }, outputs: { onItemClick: "onItemClick" }, ngImport: i0, template: "<div style=\"display: flex; overflow: hidden\" [style.height]=\"height\">\n  <c-responsive-container [burgerMenuIcon]=\"burgerMenuIcon\">\n    <div>\n      @if (logoConfig) {\n        <c-sidebar-header [config]=\"logoConfig\" />\n      }\n\n      <div style=\"display: flex; height: 100%\">\n        @if (smSidebarConfig) {\n          <c-small-sidebar [config]=\"smSidebarConfig\" [defaultSelectedIndex]=\"smallSidebarDefaultIndex\">\n            <ng-content select=\"[smallSidebar]\" />\n          </c-small-sidebar>\n        }\n\n        <ng-template #header>\n          <ng-content select=\"[header]\" />\n        </ng-template>\n        <ng-template #body>\n          <ng-content select=\"[body]\" />\n        </ng-template>\n        <ng-template #footer>\n          <ng-content select=\"[footer]\" />\n        </ng-template>\n        @if (lgSidebarConfig) {\n          @switch (lgSidebarConfig.theme) {\n            @case (SidebarTheme.Classic) {\n              <c-classic-theme [config]=\"lgSidebarConfig\">\n                @if (lgSidebarConfig['layout']?.header?.show) {\n                  <ng-container header>\n                    <ng-container *ngTemplateOutlet=\"header\" />\n                  </ng-container>\n                }\n                @if (lgSidebarConfig['layout']?.footer?.show) {\n                  <ng-container footer>\n                    <ng-container *ngTemplateOutlet=\"footer\" />\n                  </ng-container>\n                }\n              </c-classic-theme>\n            }\n            @case (SidebarTheme.Angular) {\n              <c-angular-theme [config]=\"lgSidebarConfig\">\n                @if (lgSidebarConfig['layout']?.header?.show) {\n                  <ng-container header>\n                    <ng-container [ngTemplateOutlet]=\"header\" />\n                  </ng-container>\n                }\n                @if (lgSidebarConfig['layout']?.footer?.show) {\n                  <ng-container footer>\n                    <ng-container *ngTemplateOutlet=\"footer\" />\n                  </ng-container>\n                }\n              </c-angular-theme>\n            }\n          }\n        }\n      </div>\n    </div>\n  </c-responsive-container>\n</div>\n", styles: [":is() c-responsive-container{height:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: ClassicThemeComponent, selector: "c-classic-theme", inputs: ["isSidebarClosed", "config"] }, { kind: "component", type: AngularThemeComponent, selector: "c-angular-theme", inputs: ["isSidebarClosed", "config"] }, { kind: "component", type: ResponsiveContainerComponent, selector: "c-responsive-container", inputs: ["burgerMenuIcon"] }, { kind: "component", type: SidebarHeaderComponent, selector: "c-sidebar-header", inputs: ["config"] }, { kind: "component", type: SmallSidebarComponent, selector: "c-small-sidebar", inputs: ["config", "defaultSelectedIndex"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar', encapsulation: ViewEncapsulation.None, standalone: true, imports: [
                        CommonModule,
                        ClassicThemeComponent,
                        AngularThemeComponent,
                        ResponsiveContainerComponent,
                        SidebarHeaderComponent,
                        SmallSidebarComponent,
                    ], template: "<div style=\"display: flex; overflow: hidden\" [style.height]=\"height\">\n  <c-responsive-container [burgerMenuIcon]=\"burgerMenuIcon\">\n    <div>\n      @if (logoConfig) {\n        <c-sidebar-header [config]=\"logoConfig\" />\n      }\n\n      <div style=\"display: flex; height: 100%\">\n        @if (smSidebarConfig) {\n          <c-small-sidebar [config]=\"smSidebarConfig\" [defaultSelectedIndex]=\"smallSidebarDefaultIndex\">\n            <ng-content select=\"[smallSidebar]\" />\n          </c-small-sidebar>\n        }\n\n        <ng-template #header>\n          <ng-content select=\"[header]\" />\n        </ng-template>\n        <ng-template #body>\n          <ng-content select=\"[body]\" />\n        </ng-template>\n        <ng-template #footer>\n          <ng-content select=\"[footer]\" />\n        </ng-template>\n        @if (lgSidebarConfig) {\n          @switch (lgSidebarConfig.theme) {\n            @case (SidebarTheme.Classic) {\n              <c-classic-theme [config]=\"lgSidebarConfig\">\n                @if (lgSidebarConfig['layout']?.header?.show) {\n                  <ng-container header>\n                    <ng-container *ngTemplateOutlet=\"header\" />\n                  </ng-container>\n                }\n                @if (lgSidebarConfig['layout']?.footer?.show) {\n                  <ng-container footer>\n                    <ng-container *ngTemplateOutlet=\"footer\" />\n                  </ng-container>\n                }\n              </c-classic-theme>\n            }\n            @case (SidebarTheme.Angular) {\n              <c-angular-theme [config]=\"lgSidebarConfig\">\n                @if (lgSidebarConfig['layout']?.header?.show) {\n                  <ng-container header>\n                    <ng-container [ngTemplateOutlet]=\"header\" />\n                  </ng-container>\n                }\n                @if (lgSidebarConfig['layout']?.footer?.show) {\n                  <ng-container footer>\n                    <ng-container *ngTemplateOutlet=\"footer\" />\n                  </ng-container>\n                }\n              </c-angular-theme>\n            }\n          }\n        }\n      </div>\n    </div>\n  </c-responsive-container>\n</div>\n", styles: [":is() c-responsive-container{height:100%}\n"] }]
        }], ctorParameters: () => [{ type: i1.SidebarService }], propDecorators: { logoConfig: [{
                type: Input
            }], burgerMenuIcon: [{
                type: Input
            }], height: [{
                type: Input
            }], sidebarConfig: [{
                type: Input
            }], smallSidebarConfig: [{
                type: Input
            }], smallSidebarDefaultIndex: [{
                type: Input
            }], onItemClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaWRlYmFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NpZGViYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQXlCaEQsTUFBTSxPQUFPLGdCQUFnQjtJQW1CM0IsSUFBYSxhQUFhLENBQUMsS0FBeUI7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNyQixHQUFHLEtBQUs7WUFDUixLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hHLE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLElBQUk7b0JBQ1YsSUFBSSxFQUFFLENBQUM7b0JBQ1AsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU07aUJBQ3hCO2dCQUNELElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsQ0FBQztvQkFDUCxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSTtpQkFDdEI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxJQUFJO29CQUNWLElBQUksRUFBRSxDQUFDO29CQUNQLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNO2lCQUN4QjtnQkFDRCxHQUFHLEtBQUssQ0FBQyxNQUFNO2FBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWEsa0JBQWtCLENBQUMsS0FBeUI7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNyQixHQUFHLEtBQUs7WUFDUixLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxLQUFLLENBQUMsS0FBSztnQkFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUNyRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLElBQUksTUFBTTthQUNyQztTQUNGLENBQUM7SUFDSixDQUFDO0lBUUQsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBOURsRDs7V0FFRztRQUNNLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBR3JDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQVFuQzs7V0FFRztRQUNNLFdBQU0sR0FBVyxPQUFPLENBQUM7UUF3Q2xDOztXQUVHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRUssQ0FBQztJQUV0RDs7OENBRTBDO0lBRTFDLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7OzhDQUUwQztJQUUxQyxpQkFBaUI7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs4R0F2RlUsZ0JBQWdCO2tHQUFoQixnQkFBZ0Isd1VDcEM3Qix5cUVBMkRBLG9HRHZDSSxZQUFZLHNNQUNaLHFCQUFxQixtR0FDckIscUJBQXFCLG1HQUNyQiw0QkFBNEIsK0ZBQzVCLHNCQUFzQixpRkFDdEIscUJBQXFCOzsyRkFXWixnQkFBZ0I7a0JBdEI1QixTQUFTOytCQUNFLFdBQVcsaUJBRU4saUJBQWlCLENBQUMsSUFBSSxjQUN6QixJQUFJLFdBQ1A7d0JBQ1AsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsNEJBQTRCO3dCQUM1QixzQkFBc0I7d0JBQ3RCLHFCQUFxQjtxQkFDdEI7bUZBc0JRLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFLRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ08sYUFBYTtzQkFBekIsS0FBSztnQkEyQk8sa0JBQWtCO3NCQUE5QixLQUFLO2dCQVVHLHdCQUF3QjtzQkFBaEMsS0FBSztnQkFLSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhcmdlU2lkZWJhckNvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvbGFyZ2Utc2lkZWJhci1jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgQ2xhc3NpY1RoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi4vdGhlbWVzL2NsYXNzaWMtdGhlbWUvY2xhc3NpYy10aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ndWxhclRoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi4vdGhlbWVzL2FuZ3VsYXItdGhlbWUvYW5ndWxhci10aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL3Jlc3BvbnNpdmUtY29udGFpbmVyL3Jlc3BvbnNpdmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2lkZWJhci1oZWFkZXIvc2lkZWJhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNtYWxsU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4uL3NtYWxsLXNpZGViYXIvc21hbGwtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU21hbGxTaWRlYmFyQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL21vZGVscy9zbWFsbC1zaWRlYmFyLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaWRlYmFyVGhlbWUgfSBmcm9tICcuLi8uLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7IFNpZGViYXJMb2dvQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL21vZGVscy9zaWRlYmFyLWxvZ28tY29uZmlnLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1zaWRlYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENsYXNzaWNUaGVtZUNvbXBvbmVudCxcbiAgICBBbmd1bGFyVGhlbWVDb21wb25lbnQsXG4gICAgUmVzcG9uc2l2ZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIFNtYWxsU2lkZWJhckNvbXBvbmVudCxcbiAgXSxcbiAgc3R5bGVzOiBgXG4gIDo6bmctZGVlcCB7XG4gICAgYy1yZXNwb25zaXZlLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQcml2YXRlXG4gICAqL1xuICByZWFkb25seSBTaWRlYmFyVGhlbWUgPSBTaWRlYmFyVGhlbWU7XG4gIGxnU2lkZWJhckNvbmZpZyE6IExhcmdlU2lkZWJhckNvbmZpZztcbiAgc21TaWRlYmFyQ29uZmlnITogU21hbGxTaWRlYmFyQ29uZmlnO1xuICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbnB1dHMgbG9nb1xuICAgKi9cbiAgQElucHV0KCkgbG9nb0NvbmZpZyE6IFNpZGViYXJMb2dvQ29uZmlnO1xuICBASW5wdXQoKSBidXJnZXJNZW51SWNvbiE6IHN0cmluZztcblxuICAvKipcbiAgICogSW5wdXRzIHNpZGViYXJcbiAgICovXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nID0gJzEwMHZoJztcbiAgQElucHV0KCkgc2V0IHNpZGViYXJDb25maWcodmFsdWU6IExhcmdlU2lkZWJhckNvbmZpZykge1xuICAgIHRoaXMubGdTaWRlYmFyQ29uZmlnID0ge1xuICAgICAgLi4udmFsdWUsXG4gICAgICBzdHlsZTogeyAuLi52YWx1ZS5zdHlsZSwgaGVpZ2h0OiB0aGlzLmxvZ29Db25maWcgPyBgY2FsYygke3RoaXMuaGVpZ2h0fSAtIDY1cHgpYCA6IHRoaXMuaGVpZ2h0IH0sXG4gICAgICBsYXlvdXQ6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgIC4uLnZhbHVlLmxheW91dD8uaGVhZGVyLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgZmxleDogOCxcbiAgICAgICAgICAuLi52YWx1ZS5sYXlvdXQ/LmJvZHksXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAuLi52YWx1ZS5sYXlvdXQ/LmZvb3RlcixcbiAgICAgICAgfSxcbiAgICAgICAgLi4udmFsdWUubGF5b3V0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIElucHV0cyBzbWFsbCBzaWRlYmFyXG4gICAqL1xuICBASW5wdXQoKSBzZXQgc21hbGxTaWRlYmFyQ29uZmlnKHZhbHVlOiBTbWFsbFNpZGViYXJDb25maWcpIHtcbiAgICB0aGlzLnNtU2lkZWJhckNvbmZpZyA9IHtcbiAgICAgIC4uLnZhbHVlLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4udmFsdWUuc3R5bGUsXG4gICAgICAgIGhlaWdodDogdGhpcy5sb2dvQ29uZmlnID8gYGNhbGMoJHt0aGlzLmhlaWdodH0gLSA2NXB4KWAgOiB0aGlzLmhlaWdodCxcbiAgICAgICAgd2lkdGg6IHZhbHVlPy5zdHlsZT8ud2lkdGggPz8gYDU1cHhgLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHNtYWxsU2lkZWJhckRlZmF1bHRJbmRleCE6IG51bWJlcjtcblxuICAvKipcbiAgICogT3V0cHV0c1xuICAgKi9cbiAgQE91dHB1dCgpIG9uSXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2UpIHt9XG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICogICAgICAgICAgICAgIExJRkVDWUNMRVNcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5DbGlja0V2ZW50cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnNjcmlwdGlvbikgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICogICAgICAgICAgICAgICAgSEVMUEVSU1xuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuICBsaXN0ZW5DbGlja0V2ZW50cygpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2Uuc2lkZWJhckl0ZW1DbGljay5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMub25JdGVtQ2xpY2suZW1pdCh2YWx1ZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBvdmVyZmxvdzogaGlkZGVuXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIj5cbiAgPGMtcmVzcG9uc2l2ZS1jb250YWluZXIgW2J1cmdlck1lbnVJY29uXT1cImJ1cmdlck1lbnVJY29uXCI+XG4gICAgPGRpdj5cbiAgICAgIEBpZiAobG9nb0NvbmZpZykge1xuICAgICAgICA8Yy1zaWRlYmFyLWhlYWRlciBbY29uZmlnXT1cImxvZ29Db25maWdcIiAvPlxuICAgICAgfVxuXG4gICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgaGVpZ2h0OiAxMDAlXCI+XG4gICAgICAgIEBpZiAoc21TaWRlYmFyQ29uZmlnKSB7XG4gICAgICAgICAgPGMtc21hbGwtc2lkZWJhciBbY29uZmlnXT1cInNtU2lkZWJhckNvbmZpZ1wiIFtkZWZhdWx0U2VsZWN0ZWRJbmRleF09XCJzbWFsbFNpZGViYXJEZWZhdWx0SW5kZXhcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbWFsbFNpZGViYXJdXCIgLz5cbiAgICAgICAgICA8L2Mtc21hbGwtc2lkZWJhcj5cbiAgICAgICAgfVxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjaGVhZGVyPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJdXCIgLz5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNib2R5PlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltib2R5XVwiIC8+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZm9vdGVyPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJdXCIgLz5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgQGlmIChsZ1NpZGViYXJDb25maWcpIHtcbiAgICAgICAgICBAc3dpdGNoIChsZ1NpZGViYXJDb25maWcudGhlbWUpIHtcbiAgICAgICAgICAgIEBjYXNlIChTaWRlYmFyVGhlbWUuQ2xhc3NpYykge1xuICAgICAgICAgICAgICA8Yy1jbGFzc2ljLXRoZW1lIFtjb25maWddPVwibGdTaWRlYmFyQ29uZmlnXCI+XG4gICAgICAgICAgICAgICAgQGlmIChsZ1NpZGViYXJDb25maWdbJ2xheW91dCddPy5oZWFkZXI/LnNob3cpIHtcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAaWYgKGxnU2lkZWJhckNvbmZpZ1snbGF5b3V0J10/LmZvb3Rlcj8uc2hvdykge1xuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBmb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2MtY2xhc3NpYy10aGVtZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBjYXNlIChTaWRlYmFyVGhlbWUuQW5ndWxhcikge1xuICAgICAgICAgICAgICA8Yy1hbmd1bGFyLXRoZW1lIFtjb25maWddPVwibGdTaWRlYmFyQ29uZmlnXCI+XG4gICAgICAgICAgICAgICAgQGlmIChsZ1NpZGViYXJDb25maWdbJ2xheW91dCddPy5oZWFkZXI/LnNob3cpIHtcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGlmIChsZ1NpZGViYXJDb25maWdbJ2xheW91dCddPy5mb290ZXI/LnNob3cpIHtcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgZm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9jLWFuZ3VsYXItdGhlbWU+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9jLXJlc3BvbnNpdmUtY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=