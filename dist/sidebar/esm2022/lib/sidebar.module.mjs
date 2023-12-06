import { heroBars4, heroChevronUp, heroChevronDown, heroChevronRight, heroArrowLeft, } from '@ng-icons/heroicons/outline';
import { NgModule } from '@angular/core';
import { SmallSidebarComponent } from './small-sidebar/small-sidebar.component';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './common/ui/tooltip/tooltip.directive';
import { TooltipContainerComponent } from './common/ui/tooltip/tooltip-container/tooltip-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgIconsModule } from '@ng-icons/core';
import { SidebarDropdownComponent } from './components/sidebar-dropdown/sidebar-dropdown.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SidebarTitleComponent } from './components/sidebar-title/sidebar-title.component';
import { RouterModule } from '@angular/router';
import { ResponsiveContainerComponent } from './responsive-container/responsive-container.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { ClassicThemeComponent } from './themes/classic-theme/classic-theme.component';
import { AngularThemeComponent } from './themes/angular-theme/angular-theme.component';
import * as i0 from "@angular/core";
import * as i1 from "@ng-icons/core";
export class SidebarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.3", ngImport: i0, type: SidebarModule, declarations: [SmallSidebarComponent,
            TooltipDirective,
            TooltipContainerComponent,
            SidebarComponent,
            SidebarDropdownComponent,
            SidebarItemComponent,
            SidebarTitleComponent,
            ResponsiveContainerComponent,
            SidebarHeaderComponent,
            ClassicThemeComponent,
            AngularThemeComponent], imports: [CommonModule,
            NgIconsModule,
            RouterModule, i1.NgIconsModule], exports: [SmallSidebarComponent, SidebarComponent, ResponsiveContainerComponent, SidebarHeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarModule, imports: [CommonModule,
            NgIconsModule,
            RouterModule,
            NgIconsModule.withIcons({ heroBars4, heroChevronDown, heroChevronUp, heroChevronRight, heroArrowLeft })] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SmallSidebarComponent,
                        TooltipDirective,
                        TooltipContainerComponent,
                        SidebarComponent,
                        SidebarDropdownComponent,
                        SidebarItemComponent,
                        SidebarTitleComponent,
                        ResponsiveContainerComponent,
                        SidebarHeaderComponent,
                        ClassicThemeComponent,
                        AngularThemeComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgIconsModule,
                        RouterModule,
                        NgIconsModule.withIcons({ heroBars4, heroChevronDown, heroChevronUp, heroChevronRight, heroArrowLeft }),
                    ],
                    exports: [SmallSidebarComponent, SidebarComponent, ResponsiveContainerComponent, SidebarHeaderComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaWRlYmFyL3NyYy9saWIvc2lkZWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxhQUFhLEVBQ2IsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixhQUFhLEdBQ2QsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUF3QnZGLE1BQU0sT0FBTyxhQUFhOzhHQUFiLGFBQWE7K0dBQWIsYUFBYSxpQkFwQnRCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIseUJBQXlCO1lBQ3pCLGdCQUFnQjtZQUNoQix3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQiw0QkFBNEI7WUFDNUIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixxQkFBcUIsYUFHckIsWUFBWTtZQUNaLGFBQWE7WUFDYixZQUFZLCtCQUdKLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLDRCQUE0QixFQUFFLHNCQUFzQjsrR0FFNUYsYUFBYSxZQVB0QixZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLENBQUM7OzJGQUk5RixhQUFhO2tCQXRCekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsZ0JBQWdCO3dCQUNoQix3QkFBd0I7d0JBQ3hCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQiw0QkFBNEI7d0JBQzVCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLENBQUM7cUJBQ3hHO29CQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLDRCQUE0QixFQUFFLHNCQUFzQixDQUFDO2lCQUN6RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGhlcm9CYXJzNCxcbiAgaGVyb0NoZXZyb25VcCxcbiAgaGVyb0NoZXZyb25Eb3duLFxuICBoZXJvQ2hldnJvblJpZ2h0LFxuICBoZXJvQXJyb3dMZWZ0LFxufSBmcm9tICdAbmctaWNvbnMvaGVyb2ljb25zL291dGxpbmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNtYWxsU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc21hbGwtc2lkZWJhci9zbWFsbC1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4vY29tbW9uL3VpL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uL3VpL3Rvb2x0aXAvdG9vbHRpcC1jb250YWluZXIvdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdJY29uc01vZHVsZSB9IGZyb20gJ0BuZy1pY29ucy9jb3JlJztcbmltcG9ydCB7IFNpZGViYXJEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyLWRyb3Bkb3duL3NpZGViYXItZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXItaXRlbS9zaWRlYmFyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyLXRpdGxlL3NpZGViYXItdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNwb25zaXZlLWNvbnRhaW5lci9yZXNwb25zaXZlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1oZWFkZXIvc2lkZWJhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENsYXNzaWNUaGVtZUNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2NsYXNzaWMtdGhlbWUvY2xhc3NpYy10aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ndWxhclRoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYW5ndWxhci10aGVtZS9hbmd1bGFyLXRoZW1lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNtYWxsU2lkZWJhckNvbXBvbmVudCxcbiAgICBUb29sdGlwRGlyZWN0aXZlLFxuICAgIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQsXG4gICAgU2lkZWJhckNvbXBvbmVudCxcbiAgICBTaWRlYmFyRHJvcGRvd25Db21wb25lbnQsXG4gICAgU2lkZWJhckl0ZW1Db21wb25lbnQsXG4gICAgU2lkZWJhclRpdGxlQ29tcG9uZW50LFxuICAgIFJlc3BvbnNpdmVDb250YWluZXJDb21wb25lbnQsXG4gICAgU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBDbGFzc2ljVGhlbWVDb21wb25lbnQsXG4gICAgQW5ndWxhclRoZW1lQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5nSWNvbnNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE5nSWNvbnNNb2R1bGUud2l0aEljb25zKHsgaGVyb0JhcnM0LCBoZXJvQ2hldnJvbkRvd24sIGhlcm9DaGV2cm9uVXAsIGhlcm9DaGV2cm9uUmlnaHQsIGhlcm9BcnJvd0xlZnQgfSksXG4gIF0sXG4gIGV4cG9ydHM6IFtTbWFsbFNpZGViYXJDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnQsIFJlc3BvbnNpdmVDb250YWluZXJDb21wb25lbnQsIFNpZGViYXJIZWFkZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTW9kdWxlIHt9XG4iXX0=