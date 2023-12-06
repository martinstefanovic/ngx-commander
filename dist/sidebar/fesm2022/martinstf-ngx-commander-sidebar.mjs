import * as i0 from '@angular/core';
import { Injectable, InjectionToken, TemplateRef, Component, ChangeDetectionStrategy, Inject, Injector, Directive, Input, HostListener, EventEmitter, ViewEncapsulation, Output, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { heroBars4, heroChevronDown, heroChevronUp, heroChevronRight, heroArrowLeft } from '@ng-icons/heroicons/outline';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i1$1 from '@angular/cdk/overlay';
import * as i2 from '@ng-icons/core';
import { NgIconsModule } from '@ng-icons/core';
import * as i3 from '@angular/router';
import { RouterModule } from '@angular/router';

class SidebarService {
    constructor() {
        this.isSidebarClosed = new BehaviorSubject(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const TOOLTIP_DATA = new InjectionToken('Data to display in tooltip');
class TooltipContainerComponent {
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

class TooltipDirective {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ElementRef }, { token: i1$1.Overlay }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.3", type: TooltipDirective, selector: "[appTooltip]", inputs: { appTooltip: "appTooltip", disableTooltip: "disableTooltip" }, host: { listeners: { "mouseenter": "showTooltip()", "focus": "showTooltip()", "mouseleave": "hideTooltip()", "blur": "hideTooltip()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appTooltip]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1$1.Overlay }, { type: i0.ViewContainerRef }], propDecorators: { appTooltip: [{
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

class SmallSidebarComponent {
    constructor() {
        this.selectItem = new EventEmitter();
        this.toggleSidebar = new EventEmitter();
        this.defaultColors = {
            background: '#eaeaea',
            text: 'black',
            activeBackground: '#eaeaea',
            activeBorder: '#215bde',
            activeText: '#215bde',
        };
        this.isSidebarClosed = false;
    }
    set colors(colors) {
        this.defaultColors = { ...this.defaultColors, ...colors };
    }
    ngOnInit() {
        this.activeItemIndex = this.defaultSelectedIndex;
    }
    onSelectItem(itemIndex, item) {
        this.activeItemIndex = itemIndex;
        this.selectItem.emit({ index: itemIndex, item });
    }
    onSidebarToggle() {
        this.isSidebarClosed = !this.isSidebarClosed;
        this.toggleSidebar.emit(this.isSidebarClosed);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SmallSidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: SmallSidebarComponent, selector: "c-small-sidebar", inputs: { config: "config", defaultSelectedIndex: "defaultSelectedIndex", colors: "colors" }, outputs: { selectItem: "selectItem", toggleSidebar: "toggleSidebar" }, ngImport: i0, template: "<article class=\"ngxCommander-small-sidebar\">\n  <div\n    *ngFor=\"let item of config?.routes; let index = index\"\n    class=\"item\"\n    (click)=\"onSelectItem(index, item)\"\n    [class.active]=\"activeItemIndex === index\"\n    [appTooltip]=\"item.title\"\n  >\n    <span>{{ item.icon }}</span>\n  </div>\n</article>\n", styles: [".ngxCommander-small-sidebar{width:55px;height:100%;display:flex;flex-direction:column;align-items:center;padding-top:20px;border-right:1px solid #efeff0;background-color:var(--ngx-commander-small-sidebar-background);overflow-x:hidden;overflow-y:auto}.ngxCommander-small-sidebar::-webkit-scrollbar{width:2px!important}.ngxCommander-small-sidebar::-webkit-scrollbar-track{background:#f4fafe}.ngxCommander-small-sidebar::-webkit-scrollbar-thumb{background:var(--ngx-commander-small-sidebar-active-text)}.ngxCommander-small-sidebar::-webkit-scrollbar-thumb:hover{background:var(--ngx-commander-small-sidebar-active-text)}.ngxCommander-small-sidebar .item{min-width:32px;min-height:32px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;background-color:var(--ngx-commander-small-sidebar-item-background);color:#000;border-radius:10px;margin-bottom:10px;cursor:pointer;border:2px solid #fff;outline:2px solid transparent;transition:all .2s}.ngxCommander-small-sidebar .item span{font-size:.8rem!important}.ngxCommander-small-sidebar .item:hover{color:var(--ngx-commander-small-sidebar-active-text);background-color:var(--ngx-commander-small-sidebar-item-background)}.ngxCommander-small-sidebar .item.active{color:var(--ngx-commander-small-sidebar-active-text);outline:2px solid var(--ngx-commander-small-sidebar-active-border)}\n", ":root{--ngx-commander-small-sidebar-background: #fafafa;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #eaeaea;--ngx-commander-small-sidebar-item-background: #eaeaea;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}:root{--ngx-commander-font-size: \"12px\"}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SmallSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-small-sidebar', encapsulation: ViewEncapsulation.None, template: "<article class=\"ngxCommander-small-sidebar\">\n  <div\n    *ngFor=\"let item of config?.routes; let index = index\"\n    class=\"item\"\n    (click)=\"onSelectItem(index, item)\"\n    [class.active]=\"activeItemIndex === index\"\n    [appTooltip]=\"item.title\"\n  >\n    <span>{{ item.icon }}</span>\n  </div>\n</article>\n", styles: [".ngxCommander-small-sidebar{width:55px;height:100%;display:flex;flex-direction:column;align-items:center;padding-top:20px;border-right:1px solid #efeff0;background-color:var(--ngx-commander-small-sidebar-background);overflow-x:hidden;overflow-y:auto}.ngxCommander-small-sidebar::-webkit-scrollbar{width:2px!important}.ngxCommander-small-sidebar::-webkit-scrollbar-track{background:#f4fafe}.ngxCommander-small-sidebar::-webkit-scrollbar-thumb{background:var(--ngx-commander-small-sidebar-active-text)}.ngxCommander-small-sidebar::-webkit-scrollbar-thumb:hover{background:var(--ngx-commander-small-sidebar-active-text)}.ngxCommander-small-sidebar .item{min-width:32px;min-height:32px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;background-color:var(--ngx-commander-small-sidebar-item-background);color:#000;border-radius:10px;margin-bottom:10px;cursor:pointer;border:2px solid #fff;outline:2px solid transparent;transition:all .2s}.ngxCommander-small-sidebar .item span{font-size:.8rem!important}.ngxCommander-small-sidebar .item:hover{color:var(--ngx-commander-small-sidebar-active-text);background-color:var(--ngx-commander-small-sidebar-item-background)}.ngxCommander-small-sidebar .item.active{color:var(--ngx-commander-small-sidebar-active-text);outline:2px solid var(--ngx-commander-small-sidebar-active-border)}\n", ":root{--ngx-commander-small-sidebar-background: #fafafa;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #eaeaea;--ngx-commander-small-sidebar-item-background: #eaeaea;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}:root{--ngx-commander-font-size: \"12px\"}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"] }]
        }], propDecorators: { selectItem: [{
                type: Output
            }], toggleSidebar: [{
                type: Output
            }], config: [{
                type: Input
            }], defaultSelectedIndex: [{
                type: Input
            }], colors: [{
                type: Input
            }] } });

class SidebarDropdownComponent {
    constructor() {
        this.isDropdownOpen = false;
        this.subscriptions = [];
        this.isSidebarClosed = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarDropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: { item: "item", isSidebarClosed: "isSidebarClosed", styleClass: "styleClass" }, ngImport: i0, template: "<ng-container *ngIf=\"item.children\">\n  <section>\n    <div\n      class=\"sidebar-dropdown-item\"\n      tooltipPosition=\"right\"\n      [ngClass]=\"{ 'active-dropdown': isDropdownOpen }\"\n      [class]=\"styleClass\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n      (click)=\"isDropdownOpen = !isDropdownOpen\"\n      [appTooltip]=\"item.title\"\n      [disableTooltip]=\"!isSidebarClosed\"\n    >\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\"></ng-icon>\n      <p>{{ item.title }}</p>\n      <ng-container *ngIf=\"isDropdownOpen; else iconUp\">\n        <ng-icon *ngIf=\"!isSidebarClosed\" class=\"sidebar-dropdown-icon\" name=\"heroChevronUp\"></ng-icon>\n      </ng-container>\n      <ng-template #iconUp>\n        <ng-icon *ngIf=\"!isSidebarClosed\" class=\"sidebar-dropdown-icon\" name=\"heroChevronDown\"></ng-icon>\n      </ng-template>\n    </div>\n\n    <div\n      class=\"sidebar-dropdown-subitems\"\n      [ngClass]=\"isDropdownOpen ? 'opened' : ''\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n    >\n      <ng-container *ngFor=\"let subItem of item.children\">\n        <ng-container *ngIf=\"subItem.path\">\n          <div\n            class=\"sidebar-dropdown-item sidebar-dropdown-subitem\"\n            [routerLink]=\"subItem.path\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            [appTooltip]=\"subItem.title\"\n            [disableTooltip]=\"!isSidebarClosed\"\n          >\n            <i class=\"line-connector\" [ngClass]=\"{ 'hide-line-connector': isSidebarClosed }\"></i>\n            <span *ngIf=\"!isSidebarClosed\">\n              {{ subItem.title }}\n            </span>\n            <ng-icon size=\"15\" *ngIf=\"isSidebarClosed\" class=\"icon\" [name]=\"subItem.icon\"></ng-icon>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"subItem?.children\">\n          <app-sidebar-dropdown\n            styleClass=\"bg-transparent subdropdown\"\n            [item]=\"subItem\"\n            [isSidebarClosed]=\"isSidebarClosed\"\n          />\n        </ng-container>\n      </ng-container>\n    </div>\n  </section>\n</ng-container>\n", styles: [".classic-sidebar .closed-sidebar .subdropdown{padding-left:0rem!important;margin-left:-5px!important}.classic-sidebar .closed-sidebar .sidebar-dropdown-subitems.closed-sidebar{margin-left:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }, { kind: "component", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: ["item", "isSidebarClosed", "styleClass"] }], encapsulation: i0.ViewEncapsulation.None }); }
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

class SidebarItemComponent {
    constructor() {
        this.showIcon = true;
        this.isSidebarClosed = false;
        innerWidth = window.innerWidth;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: SidebarItemComponent, selector: "app-sidebar-item", inputs: { item: "item", showIcon: "showIcon", isSidebarClosed: "isSidebarClosed" }, ngImport: i0, template: "<ng-container *ngIf=\"item?.path\">\n  <div\n    class=\"sidebar-single-item\"\n    [class.closed-sidebar]=\"isSidebarClosed\"\n    [routerLink]=\"item.path\"\n    routerLinkActive=\"active\"\n    [appTooltip]=\"item.title\"\n    [disableTooltip]=\"!isSidebarClosed\"\n  >\n    <ng-icon *ngIf=\"showIcon\" size=\"15\" class=\"icon\" [name]=\"item.icon\"></ng-icon>\n    <span class=\"item-title\"> {{ item.title }} </span>\n  </div>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-item', encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"item?.path\">\n  <div\n    class=\"sidebar-single-item\"\n    [class.closed-sidebar]=\"isSidebarClosed\"\n    [routerLink]=\"item.path\"\n    routerLinkActive=\"active\"\n    [appTooltip]=\"item.title\"\n    [disableTooltip]=\"!isSidebarClosed\"\n  >\n    <ng-icon *ngIf=\"showIcon\" size=\"15\" class=\"icon\" [name]=\"item.icon\"></ng-icon>\n    <span class=\"item-title\"> {{ item.title }} </span>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: () => [], propDecorators: { item: [{
                type: Input
            }], showIcon: [{
                type: Input
            }], isSidebarClosed: [{
                type: Input
            }] } });

class SidebarTitleComponent {
    constructor() {
        this.isSidebarClosed = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: SidebarTitleComponent, selector: "app-sidebar-title", inputs: { item: "item", isSidebarClosed: "isSidebarClosed" }, ngImport: i0, template: "<p\n  *ngIf=\"!item?.path && !item.children\"\n  class=\"sidebar-section-title\"\n  [appTooltip]=\"item.title\"\n  [disableTooltip]=\"!isSidebarClosed\"\n>\n  <span>{{ item.title }}</span>\n</p>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-title', encapsulation: ViewEncapsulation.None, template: "<p\n  *ngIf=\"!item?.path && !item.children\"\n  class=\"sidebar-section-title\"\n  [appTooltip]=\"item.title\"\n  [disableTooltip]=\"!isSidebarClosed\"\n>\n  <span>{{ item.title }}</span>\n</p>\n" }]
        }], propDecorators: { item: [{
                type: Input
            }], isSidebarClosed: [{
                type: Input
            }] } });

class ClassicThemeComponent {
    onKeyPress(event) {
        if ((event.metaKey || event.ctrlKey) && event.key === 'l') {
            event.preventDefault();
            this.onToggleSidebar();
        }
    }
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.isSidebarClosed = false;
    }
    onToggleSidebar() {
        this.isSidebarClosed = !this.isSidebarClosed;
        this.sidebarService.isSidebarClosed.next(this.isSidebarClosed);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ClassicThemeComponent, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: ClassicThemeComponent, selector: "c-classic-theme", inputs: { isSidebarClosed: "isSidebarClosed", config: "config" }, host: { listeners: { "window:keydown": "onKeyPress($event)" } }, ngImport: i0, template: "<main\nclass=\"classic-sidebar\"\n[ngClass]=\"{ closed: isSidebarClosed }\"\n[ngStyle]=\"{ height: config?.style?.height ?? '90vh' }\"\n>\n<div class=\"classic-sidebar-header\">\n  <h3 *ngIf=\"config?.title\" class=\"sidebar-title\">\n    {{ config?.title }}\n  </h3>\n</div>\n<div class=\"classic-sidebar-body\">\n  <ng-container *ngFor=\"let menuItem of config?.routes; let i = index\">\n    <app-sidebar-item [isSidebarClosed]=\"isSidebarClosed\" [item]=\"menuItem\" *ngIf=\"menuItem?.path\" />\n    <app-sidebar-dropdown [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n    <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n  </ng-container>\n</div>\n<div class=\"classic-sidebar-footer\" (click)=\"onToggleSidebar()\">\n  <kbd class=\"button-key\">\u2318</kbd>\n  <kbd class=\"button-key\">L</kbd>\n  <span [class.hide]=\"isSidebarClosed\">Collapse sidebar</span>\n</div>\n</main>", styles: [".sidebar-section-title{color:var(--ngx-commander-large-sidebar-text);font-weight:400;text-transform:uppercase;min-width:140px;padding:.5rem .85rem;margin-top:.7rem}.sidebar-section-title span{font-size:.75rem}.closed .sidebar-section-title{width:100%;min-width:0px;height:20px;border-bottom:1px solid #e0e0e0;padding:.5rem .85rem;margin-top:.7rem}.closed .sidebar-section-title span{visibility:hidden;opacity:0}.classic-sidebar{height:90vh;width:230px;transition:all .3s ease-in-out;display:flex;flex-flow:column;background-color:var(--ngx-commander-large-sidebar-background);padding-top:20px;border-right:1px solid #efeff0}@media (min-width: 1200px) and (max-width: 3000px){.classic-sidebar{width:290px}}@media (min-width: 992px) and (max-width: 1199.98px){.classic-sidebar{width:260px}}@media (max-width: 575.98px){.classic-sidebar{min-width:0px;width:100%;box-shadow:none}}@media (min-width: 1200px) and (max-width: 1536.98px){.classic-sidebar{width:230px}}.classic-sidebar .sidebar-single-item{display:flex;align-items:center;padding:.5rem .85rem;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);height:3rem;background-color:var(--ngx-commander-large-sidebar-item-background)}.classic-sidebar .sidebar-single-item:hover .item-title{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-single-item:hover .icon{color:var(--ngx-commander-large-sidebar-active-icon)}.classic-sidebar .sidebar-single-item .icon{color:var(--ngx-commander-large-sidebar-icon);transition:all .3s}.classic-sidebar .sidebar-single-item .item-title{-webkit-user-select:none;user-select:none;transition:all .5s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.5rem;color:var(--ngx-commander-large-sidebar-text)}.classic-sidebar .sidebar-single-item.active .item-title{color:var(--main-color)}.classic-sidebar .sidebar-single-item.closed-sidebar .icon{margin-left:.4rem}.classic-sidebar .sidebar-single-item.closed-sidebar .item-title{opacity:0;width:0px;color:#fff;overflow:hidden;margin:0}.classic-sidebar .sidebar-dropdown-item{display:flex;align-items:center;padding:.5rem .85rem;width:100%;cursor:pointer;height:3rem;background-color:var(--ngx-commander-large-sidebar-item-background);position:relative;transition:all .3s}.classic-sidebar .sidebar-dropdown-item:hover p{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-dropdown-item:hover .icon{color:var(--ngx-commander-large-sidebar-active-icon)}.classic-sidebar .sidebar-dropdown-item .icon{color:var(--ngx-commander-large-sidebar-icon);transition:all .3s}.classic-sidebar .sidebar-dropdown-item p{-webkit-user-select:none;user-select:none;transition:all .5s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.5rem;color:var(--ngx-commander-large-sidebar-text)}.classic-sidebar .sidebar-dropdown-item.closed-sidebar .icon{margin-left:.4rem}.classic-sidebar .sidebar-dropdown-item.closed-sidebar p{opacity:0;width:0px;color:#fff;overflow:hidden;margin:0}.classic-sidebar .sidebar-dropdown-item.active-dropdown{background-color:var(--ngx-commander-large-sidebar-item-active-background);border-radius:10px}.classic-sidebar .sidebar-dropdown-item .sidebar-dropdown-icon{position:absolute;right:.5rem;top:50%;transform:translateY(-50%)}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem{pointer-events:all;padding-left:0}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem span{color:var(--ngx-commander-large-sidebar-text);transition:all .2s}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem.active span,.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem:hover span{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem .line-connector{width:15px;height:10px;border-bottom:2px solid #f0f4f6;border-left:2px solid #f0f4f6;margin-right:10px;border-bottom-left-radius:8px;margin-bottom:9px;margin-left:-2px;transition:all .3s}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem .line-connector.hide-line-connector{width:0px;height:0px;border-bottom:2px solid transparent;border-left:2px solid transparent;margin:0}.classic-sidebar .sidebar-dropdown-subitems{margin-left:2.1rem;display:none;border-left:2px solid #f0f4f6;border-bottom-left-radius:40px;transition:all .3s}.classic-sidebar .sidebar-dropdown-subitems.opened{display:block}.classic-sidebar .sidebar-dropdown-subitems.closed-sidebar{border-left:2px solid transparent;margin-left:15px}.classic-sidebar .sidebar-title{color:var(--ngx-commander-large-sidebar-text);font-size:.9rem;font-weight:400;margin-left:2rem;margin-bottom:.5rem;text-transform:uppercase;transition:all .3s;min-width:140px}.classic-sidebar-header{flex:1}.classic-sidebar-body{overflow-x:hidden;overflow-y:auto;height:100%;padding:0px 1rem;flex:20}.classic-sidebar-body::-webkit-scrollbar{width:2px!important}.classic-sidebar-body::-webkit-scrollbar-track{background:#f4fafe}.classic-sidebar-body::-webkit-scrollbar-thumb{background:var(--ngx-commander-small-sidebar-active-text)}.classic-sidebar-body::-webkit-scrollbar-thumb:hover{background:var(--ngx-commander-small-sidebar-active-text)}.classic-sidebar-footer{flex:1;height:50px;display:flex;align-items:center;margin-bottom:10px;padding:0px 1rem;margin-top:20px}.classic-sidebar-footer .button-key{display:flex;align-items:center;justify-content:center;width:21px;min-width:21px;height:21px;min-height:21px;color:#495057;cursor:pointer;position:relative;border:1px solid #f7f5f5;box-shadow:0 1px #0003,0 0 0 2px #fbfbfb inset;text-shadow:0 1px 0 #fbfbfb;border-radius:3px;display:inline-block;font-family:sans-serif;line-height:1.5;margin:0 .1em;padding:1px .4em;vertical-align:middle;text-align:center}.classic-sidebar-footer .button-key:hover{box-shadow:0 .5px #0003,0 0 0 2px #fbfbfb inset;top:1px px}.classic-sidebar-footer .button-key:first-child{margin-right:.2rem}.classic-sidebar-footer span{font-size:.7rem;margin-left:.4rem;color:#495057cc;transition:all .3s;min-width:100px;opacity:1}.classic-sidebar.closed{width:80px;padding:30px 0 0;justify-content:center}.classic-sidebar.closed .sidebar-title{opacity:0}.hide{opacity:0!important;visibility:hidden;position:absolute;bottom:-300px}\n", ":root{--ngx-commander-small-sidebar-background: #fafafa;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #eaeaea;--ngx-commander-small-sidebar-item-background: #eaeaea;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}:root{--ngx-commander-font-size: \"12px\"}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: ["item", "isSidebarClosed", "styleClass"] }, { kind: "component", type: SidebarItemComponent, selector: "app-sidebar-item", inputs: ["item", "showIcon", "isSidebarClosed"] }, { kind: "component", type: SidebarTitleComponent, selector: "app-sidebar-title", inputs: ["item", "isSidebarClosed"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ClassicThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-classic-theme', encapsulation: ViewEncapsulation.None, template: "<main\nclass=\"classic-sidebar\"\n[ngClass]=\"{ closed: isSidebarClosed }\"\n[ngStyle]=\"{ height: config?.style?.height ?? '90vh' }\"\n>\n<div class=\"classic-sidebar-header\">\n  <h3 *ngIf=\"config?.title\" class=\"sidebar-title\">\n    {{ config?.title }}\n  </h3>\n</div>\n<div class=\"classic-sidebar-body\">\n  <ng-container *ngFor=\"let menuItem of config?.routes; let i = index\">\n    <app-sidebar-item [isSidebarClosed]=\"isSidebarClosed\" [item]=\"menuItem\" *ngIf=\"menuItem?.path\" />\n    <app-sidebar-dropdown [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n    <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n  </ng-container>\n</div>\n<div class=\"classic-sidebar-footer\" (click)=\"onToggleSidebar()\">\n  <kbd class=\"button-key\">\u2318</kbd>\n  <kbd class=\"button-key\">L</kbd>\n  <span [class.hide]=\"isSidebarClosed\">Collapse sidebar</span>\n</div>\n</main>", styles: [".sidebar-section-title{color:var(--ngx-commander-large-sidebar-text);font-weight:400;text-transform:uppercase;min-width:140px;padding:.5rem .85rem;margin-top:.7rem}.sidebar-section-title span{font-size:.75rem}.closed .sidebar-section-title{width:100%;min-width:0px;height:20px;border-bottom:1px solid #e0e0e0;padding:.5rem .85rem;margin-top:.7rem}.closed .sidebar-section-title span{visibility:hidden;opacity:0}.classic-sidebar{height:90vh;width:230px;transition:all .3s ease-in-out;display:flex;flex-flow:column;background-color:var(--ngx-commander-large-sidebar-background);padding-top:20px;border-right:1px solid #efeff0}@media (min-width: 1200px) and (max-width: 3000px){.classic-sidebar{width:290px}}@media (min-width: 992px) and (max-width: 1199.98px){.classic-sidebar{width:260px}}@media (max-width: 575.98px){.classic-sidebar{min-width:0px;width:100%;box-shadow:none}}@media (min-width: 1200px) and (max-width: 1536.98px){.classic-sidebar{width:230px}}.classic-sidebar .sidebar-single-item{display:flex;align-items:center;padding:.5rem .85rem;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);height:3rem;background-color:var(--ngx-commander-large-sidebar-item-background)}.classic-sidebar .sidebar-single-item:hover .item-title{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-single-item:hover .icon{color:var(--ngx-commander-large-sidebar-active-icon)}.classic-sidebar .sidebar-single-item .icon{color:var(--ngx-commander-large-sidebar-icon);transition:all .3s}.classic-sidebar .sidebar-single-item .item-title{-webkit-user-select:none;user-select:none;transition:all .5s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.5rem;color:var(--ngx-commander-large-sidebar-text)}.classic-sidebar .sidebar-single-item.active .item-title{color:var(--main-color)}.classic-sidebar .sidebar-single-item.closed-sidebar .icon{margin-left:.4rem}.classic-sidebar .sidebar-single-item.closed-sidebar .item-title{opacity:0;width:0px;color:#fff;overflow:hidden;margin:0}.classic-sidebar .sidebar-dropdown-item{display:flex;align-items:center;padding:.5rem .85rem;width:100%;cursor:pointer;height:3rem;background-color:var(--ngx-commander-large-sidebar-item-background);position:relative;transition:all .3s}.classic-sidebar .sidebar-dropdown-item:hover p{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-dropdown-item:hover .icon{color:var(--ngx-commander-large-sidebar-active-icon)}.classic-sidebar .sidebar-dropdown-item .icon{color:var(--ngx-commander-large-sidebar-icon);transition:all .3s}.classic-sidebar .sidebar-dropdown-item p{-webkit-user-select:none;user-select:none;transition:all .5s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.5rem;color:var(--ngx-commander-large-sidebar-text)}.classic-sidebar .sidebar-dropdown-item.closed-sidebar .icon{margin-left:.4rem}.classic-sidebar .sidebar-dropdown-item.closed-sidebar p{opacity:0;width:0px;color:#fff;overflow:hidden;margin:0}.classic-sidebar .sidebar-dropdown-item.active-dropdown{background-color:var(--ngx-commander-large-sidebar-item-active-background);border-radius:10px}.classic-sidebar .sidebar-dropdown-item .sidebar-dropdown-icon{position:absolute;right:.5rem;top:50%;transform:translateY(-50%)}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem{pointer-events:all;padding-left:0}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem span{color:var(--ngx-commander-large-sidebar-text);transition:all .2s}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem.active span,.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem:hover span{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem .line-connector{width:15px;height:10px;border-bottom:2px solid #f0f4f6;border-left:2px solid #f0f4f6;margin-right:10px;border-bottom-left-radius:8px;margin-bottom:9px;margin-left:-2px;transition:all .3s}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem .line-connector.hide-line-connector{width:0px;height:0px;border-bottom:2px solid transparent;border-left:2px solid transparent;margin:0}.classic-sidebar .sidebar-dropdown-subitems{margin-left:2.1rem;display:none;border-left:2px solid #f0f4f6;border-bottom-left-radius:40px;transition:all .3s}.classic-sidebar .sidebar-dropdown-subitems.opened{display:block}.classic-sidebar .sidebar-dropdown-subitems.closed-sidebar{border-left:2px solid transparent;margin-left:15px}.classic-sidebar .sidebar-title{color:var(--ngx-commander-large-sidebar-text);font-size:.9rem;font-weight:400;margin-left:2rem;margin-bottom:.5rem;text-transform:uppercase;transition:all .3s;min-width:140px}.classic-sidebar-header{flex:1}.classic-sidebar-body{overflow-x:hidden;overflow-y:auto;height:100%;padding:0px 1rem;flex:20}.classic-sidebar-body::-webkit-scrollbar{width:2px!important}.classic-sidebar-body::-webkit-scrollbar-track{background:#f4fafe}.classic-sidebar-body::-webkit-scrollbar-thumb{background:var(--ngx-commander-small-sidebar-active-text)}.classic-sidebar-body::-webkit-scrollbar-thumb:hover{background:var(--ngx-commander-small-sidebar-active-text)}.classic-sidebar-footer{flex:1;height:50px;display:flex;align-items:center;margin-bottom:10px;padding:0px 1rem;margin-top:20px}.classic-sidebar-footer .button-key{display:flex;align-items:center;justify-content:center;width:21px;min-width:21px;height:21px;min-height:21px;color:#495057;cursor:pointer;position:relative;border:1px solid #f7f5f5;box-shadow:0 1px #0003,0 0 0 2px #fbfbfb inset;text-shadow:0 1px 0 #fbfbfb;border-radius:3px;display:inline-block;font-family:sans-serif;line-height:1.5;margin:0 .1em;padding:1px .4em;vertical-align:middle;text-align:center}.classic-sidebar-footer .button-key:hover{box-shadow:0 .5px #0003,0 0 0 2px #fbfbfb inset;top:1px px}.classic-sidebar-footer .button-key:first-child{margin-right:.2rem}.classic-sidebar-footer span{font-size:.7rem;margin-left:.4rem;color:#495057cc;transition:all .3s;min-width:100px;opacity:1}.classic-sidebar.closed{width:80px;padding:30px 0 0;justify-content:center}.classic-sidebar.closed .sidebar-title{opacity:0}.hide{opacity:0!important;visibility:hidden;position:absolute;bottom:-300px}\n", ":root{--ngx-commander-small-sidebar-background: #fafafa;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #eaeaea;--ngx-commander-small-sidebar-item-background: #eaeaea;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}:root{--ngx-commander-font-size: \"12px\"}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"] }]
        }], ctorParameters: () => [{ type: SidebarService }], propDecorators: { isSidebarClosed: [{
                type: Input
            }], config: [{
                type: Input
            }], onKeyPress: [{
                type: HostListener,
                args: ['window:keydown', ['$event']]
            }] } });

class AngularThemeComponent {
    constructor() {
        this.isSidebarClosed = false;
        this.isDropdownOpened = false;
    }
    onOpenDropdown(menuItem) {
        this.selectedDropdown = menuItem;
        this.isDropdownOpened = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AngularThemeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: AngularThemeComponent, selector: "c-angular-theme", inputs: { isSidebarClosed: "isSidebarClosed", config: "config" }, ngImport: i0, template: "<main\n  class=\"angular-sidebar\"\n  [ngClass]=\"{ closed: isSidebarClosed }\"\n  [ngStyle]=\"{ height: config?.style?.height ?? '90vh' }\"\n>\n  <div class=\"angular-sidebar-body\">\n    <section class=\"screen screen-1\" [ngClass]=\"{ 'hide-screen': isDropdownOpened }\">\n      <ng-container *ngFor=\"let menuItem of config?.routes; let i = index\">\n        <app-sidebar-item\n          [showIcon]=\"false\"\n          [isSidebarClosed]=\"isSidebarClosed\"\n          [item]=\"menuItem\"\n          *ngIf=\"menuItem?.path\"\n        />\n        <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n        <p class=\"open-screen-btn\" *ngIf=\"menuItem.children\" (click)=\"onOpenDropdown(menuItem)\">\n          <span class=\"item-title\"> {{ menuItem.title }} </span>\n          <ng-icon size=\"15\" class=\"icon\" name=\"heroChevronRight\"></ng-icon>\n        </p>\n      </ng-container>\n    </section>\n    <section class=\"screen screen-2\" [ngClass]=\"{ 'show-screen': isDropdownOpened }\">\n      <div class=\"dropdown-header\" (click)=\"isDropdownOpened = false\">\n        <ng-icon size=\"20\" class=\"icon\" name=\"heroArrowLeft\"></ng-icon>\n        <span>{{ selectedDropdown?.title }}</span>\n      </div>\n\n      <ng-container *ngFor=\"let menuItem of selectedDropdown?.children\">\n        <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n        <app-sidebar-item\n          [showIcon]=\"false\"\n          [isSidebarClosed]=\"isSidebarClosed\"\n          [item]=\"menuItem\"\n          *ngIf=\"menuItem?.path\"\n        />\n        <app-sidebar-dropdown [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n      </ng-container>\n    </section>\n  </div>\n</main>\n", styles: [".angular-sidebar{height:90vh;width:20rem;transition:all .3s ease-in-out;display:flex;flex-flow:column;background-color:var(--ngx-commander-large-sidebar-background);padding-top:20px;border-right:1px solid #efeff0;font-family:Inter,sans-serif!important;position:relative}.angular-sidebar .angular-sidebar-body{display:flex;overflow-x:hidden;position:relative;height:100%}.angular-sidebar .angular-sidebar-body .dropdown-header{display:flex;align-items:center;margin-bottom:1.2rem;cursor:pointer}.angular-sidebar .angular-sidebar-body .dropdown-header span{font-size:.9rem;margin-left:.5rem;font-weight:700}.angular-sidebar .angular-sidebar-body .screen{padding:0px 1.2rem;padding-right:0;width:100%;position:absolute;transition:all .7s;overflow-x:hidden;overflow-y:auto;height:100%;padding:0px 1rem;flex:20}.angular-sidebar .angular-sidebar-body .screen::-webkit-scrollbar{width:5px!important;cursor:pointer}.angular-sidebar .angular-sidebar-body .screen::-webkit-scrollbar-track{background:#f4fafe}.angular-sidebar .angular-sidebar-body .screen::-webkit-scrollbar-thumb{background:#f6f5f6}.angular-sidebar .angular-sidebar-body .screen::-webkit-scrollbar-thumb:hover{background:#dbd9db}.angular-sidebar .angular-sidebar-body .screen-1{left:0}.angular-sidebar .angular-sidebar-body .screen-1.hide-screen{left:-500px}.angular-sidebar .angular-sidebar-body .screen-2{height:100%;left:300px}.angular-sidebar .angular-sidebar-body .screen-2.show-screen{left:0}.angular-sidebar .sidebar-section-title{color:var(--ngx-commander-large-sidebar-text);font-weight:500;min-width:140px;padding:.5rem 0rem;margin:.7rem 0}.angular-sidebar .sidebar-section-title span{color:#000;font-size:.9rem}.angular-sidebar .sidebar-single-item{display:flex;align-items:center;padding:1rem;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);background-color:var(--ngx-commander-large-sidebar-item-background);border-left:1px solid #e4e3e6;position:relative}.angular-sidebar .sidebar-single-item:before{content:\"\";width:2px;height:60%;opacity:0;background:#a5a4a8;position:absolute;left:-1px;transition:all .3s ease-in-out}.angular-sidebar .sidebar-single-item:hover:before{opacity:.9}.angular-sidebar .sidebar-single-item:hover .item-title{color:#000;opacity:.8}.angular-sidebar .sidebar-single-item .item-title{-webkit-user-select:none;user-select:none;transition:all .3s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.2rem;font-size:.9rem;color:var(--ngx-commander-large-sidebar-text)}.angular-sidebar .sidebar-single-item.active:hover:before{height:100%}.angular-sidebar .sidebar-single-item.active:before{opacity:1;height:90%;background:linear-gradient(0deg,#8514f5 0%,oklch(69.02% .277 332.77) 100%)}.angular-sidebar .sidebar-single-item.active .item-title{color:#d234c2;font-weight:700}.angular-sidebar .open-screen-btn{display:flex;align-items:center;padding:1rem;padding-right:0;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);background-color:var(--ngx-commander-large-sidebar-item-background);border-left:1px solid #e4e3e6;position:relative}.angular-sidebar .open-screen-btn:before{content:\"\";width:2px;height:60%;opacity:0;background:#a5a4a8;position:absolute;left:-1px;transition:all .3s ease-in-out}.angular-sidebar .open-screen-btn:hover:before{opacity:.9}.angular-sidebar .open-screen-btn:hover .item-title,.angular-sidebar .open-screen-btn:hover .icon{color:#000;opacity:.8}.angular-sidebar .open-screen-btn .icon{transition:all .3s}.angular-sidebar .open-screen-btn .item-title{-webkit-user-select:none;user-select:none;transition:all .3s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.2rem;font-size:.9rem;color:var(--ngx-commander-large-sidebar-text)}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }, { kind: "component", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: ["item", "isSidebarClosed", "styleClass"] }, { kind: "component", type: SidebarItemComponent, selector: "app-sidebar-item", inputs: ["item", "showIcon", "isSidebarClosed"] }, { kind: "component", type: SidebarTitleComponent, selector: "app-sidebar-title", inputs: ["item", "isSidebarClosed"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: AngularThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-angular-theme', encapsulation: ViewEncapsulation.None, template: "<main\n  class=\"angular-sidebar\"\n  [ngClass]=\"{ closed: isSidebarClosed }\"\n  [ngStyle]=\"{ height: config?.style?.height ?? '90vh' }\"\n>\n  <div class=\"angular-sidebar-body\">\n    <section class=\"screen screen-1\" [ngClass]=\"{ 'hide-screen': isDropdownOpened }\">\n      <ng-container *ngFor=\"let menuItem of config?.routes; let i = index\">\n        <app-sidebar-item\n          [showIcon]=\"false\"\n          [isSidebarClosed]=\"isSidebarClosed\"\n          [item]=\"menuItem\"\n          *ngIf=\"menuItem?.path\"\n        />\n        <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n        <p class=\"open-screen-btn\" *ngIf=\"menuItem.children\" (click)=\"onOpenDropdown(menuItem)\">\n          <span class=\"item-title\"> {{ menuItem.title }} </span>\n          <ng-icon size=\"15\" class=\"icon\" name=\"heroChevronRight\"></ng-icon>\n        </p>\n      </ng-container>\n    </section>\n    <section class=\"screen screen-2\" [ngClass]=\"{ 'show-screen': isDropdownOpened }\">\n      <div class=\"dropdown-header\" (click)=\"isDropdownOpened = false\">\n        <ng-icon size=\"20\" class=\"icon\" name=\"heroArrowLeft\"></ng-icon>\n        <span>{{ selectedDropdown?.title }}</span>\n      </div>\n\n      <ng-container *ngFor=\"let menuItem of selectedDropdown?.children\">\n        <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n        <app-sidebar-item\n          [showIcon]=\"false\"\n          [isSidebarClosed]=\"isSidebarClosed\"\n          [item]=\"menuItem\"\n          *ngIf=\"menuItem?.path\"\n        />\n        <app-sidebar-dropdown [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n      </ng-container>\n    </section>\n  </div>\n</main>\n", styles: [".angular-sidebar{height:90vh;width:20rem;transition:all .3s ease-in-out;display:flex;flex-flow:column;background-color:var(--ngx-commander-large-sidebar-background);padding-top:20px;border-right:1px solid #efeff0;font-family:Inter,sans-serif!important;position:relative}.angular-sidebar .angular-sidebar-body{display:flex;overflow-x:hidden;position:relative;height:100%}.angular-sidebar .angular-sidebar-body .dropdown-header{display:flex;align-items:center;margin-bottom:1.2rem;cursor:pointer}.angular-sidebar .angular-sidebar-body .dropdown-header span{font-size:.9rem;margin-left:.5rem;font-weight:700}.angular-sidebar .angular-sidebar-body .screen{padding:0px 1.2rem;padding-right:0;width:100%;position:absolute;transition:all .7s;overflow-x:hidden;overflow-y:auto;height:100%;padding:0px 1rem;flex:20}.angular-sidebar .angular-sidebar-body .screen::-webkit-scrollbar{width:5px!important;cursor:pointer}.angular-sidebar .angular-sidebar-body .screen::-webkit-scrollbar-track{background:#f4fafe}.angular-sidebar .angular-sidebar-body .screen::-webkit-scrollbar-thumb{background:#f6f5f6}.angular-sidebar .angular-sidebar-body .screen::-webkit-scrollbar-thumb:hover{background:#dbd9db}.angular-sidebar .angular-sidebar-body .screen-1{left:0}.angular-sidebar .angular-sidebar-body .screen-1.hide-screen{left:-500px}.angular-sidebar .angular-sidebar-body .screen-2{height:100%;left:300px}.angular-sidebar .angular-sidebar-body .screen-2.show-screen{left:0}.angular-sidebar .sidebar-section-title{color:var(--ngx-commander-large-sidebar-text);font-weight:500;min-width:140px;padding:.5rem 0rem;margin:.7rem 0}.angular-sidebar .sidebar-section-title span{color:#000;font-size:.9rem}.angular-sidebar .sidebar-single-item{display:flex;align-items:center;padding:1rem;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);background-color:var(--ngx-commander-large-sidebar-item-background);border-left:1px solid #e4e3e6;position:relative}.angular-sidebar .sidebar-single-item:before{content:\"\";width:2px;height:60%;opacity:0;background:#a5a4a8;position:absolute;left:-1px;transition:all .3s ease-in-out}.angular-sidebar .sidebar-single-item:hover:before{opacity:.9}.angular-sidebar .sidebar-single-item:hover .item-title{color:#000;opacity:.8}.angular-sidebar .sidebar-single-item .item-title{-webkit-user-select:none;user-select:none;transition:all .3s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.2rem;font-size:.9rem;color:var(--ngx-commander-large-sidebar-text)}.angular-sidebar .sidebar-single-item.active:hover:before{height:100%}.angular-sidebar .sidebar-single-item.active:before{opacity:1;height:90%;background:linear-gradient(0deg,#8514f5 0%,oklch(69.02% .277 332.77) 100%)}.angular-sidebar .sidebar-single-item.active .item-title{color:#d234c2;font-weight:700}.angular-sidebar .open-screen-btn{display:flex;align-items:center;padding:1rem;padding-right:0;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);background-color:var(--ngx-commander-large-sidebar-item-background);border-left:1px solid #e4e3e6;position:relative}.angular-sidebar .open-screen-btn:before{content:\"\";width:2px;height:60%;opacity:0;background:#a5a4a8;position:absolute;left:-1px;transition:all .3s ease-in-out}.angular-sidebar .open-screen-btn:hover:before{opacity:.9}.angular-sidebar .open-screen-btn:hover .item-title,.angular-sidebar .open-screen-btn:hover .icon{color:#000;opacity:.8}.angular-sidebar .open-screen-btn .icon{transition:all .3s}.angular-sidebar .open-screen-btn .item-title{-webkit-user-select:none;user-select:none;transition:all .3s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.2rem;font-size:.9rem;color:var(--ngx-commander-large-sidebar-text)}\n"] }]
        }], propDecorators: { isSidebarClosed: [{
                type: Input
            }], config: [{
                type: Input
            }] } });

class SidebarComponent {
    constructor() {
        this.isSidebarClosed = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: SidebarComponent, selector: "c-sidebar", inputs: { isSidebarClosed: "isSidebarClosed", config: "config" }, ngImport: i0, template: "<span [ngSwitch]=\"config?.theme\">\n  <p *ngSwitchCase=\"'classic'\">\n    <c-classic-theme [config]=\"config\" />\n  </p>\n  <p *ngSwitchCase=\"'angular'\">\n    <c-angular-theme [config]=\"config\" />\n  </p>\n  <p *ngSwitchDefault>\n    <c-classic-theme [config]=\"config\" />\n  </p>\n</span>\n", dependencies: [{ kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: ClassicThemeComponent, selector: "c-classic-theme", inputs: ["isSidebarClosed", "config"] }, { kind: "component", type: AngularThemeComponent, selector: "c-angular-theme", inputs: ["isSidebarClosed", "config"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar', encapsulation: ViewEncapsulation.None, template: "<span [ngSwitch]=\"config?.theme\">\n  <p *ngSwitchCase=\"'classic'\">\n    <c-classic-theme [config]=\"config\" />\n  </p>\n  <p *ngSwitchCase=\"'angular'\">\n    <c-angular-theme [config]=\"config\" />\n  </p>\n  <p *ngSwitchDefault>\n    <c-classic-theme [config]=\"config\" />\n  </p>\n</span>\n" }]
        }], propDecorators: { isSidebarClosed: [{
                type: Input
            }], config: [{
                type: Input
            }] } });

class ResponsiveContainerComponent {
    constructor() {
        this.mobileMenuIcon = 'heroBars4';
        this.mobileIsSidebarClosed = false;
        this.isMobile = window.innerWidth < 550;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ResponsiveContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: ResponsiveContainerComponent, selector: "c-responsive-container", inputs: { mobileMenuIcon: "mobileMenuIcon" }, ngImport: i0, template: "<main class=\"CMND-responsive-container\" [class.CMND-hidden]=\"mobileIsSidebarClosed\">\n  <div class=\"CMND-content\">\n    <ng-content />\n  </div>\n  <div class=\"CMND-backdrop\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\"></div>\n</main>\n<button class=\"CMND-mobile-sidebar-btn\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\">\n  <ng-icon class=\"icon\" size=\"20\" [name]=\"mobileMenuIcon\"></ng-icon>\n</button>\n", styles: [".CMND-mobile-sidebar-btn{position:fixed;top:0;left:0;z-index:9999;height:55px;width:55px;background-color:var(--ngx-commander-large-sidebar-menu-btn-color);color:#fff;border:none;display:flex;align-items:center;justify-content:center;display:none;transition:all .3s}.CMND-mobile-sidebar-btn .icon{width:50px}@media (max-width: 575.98px){.CMND-mobile-sidebar-btn{display:block}}.CMND-responsive-container{display:flex;width:100%;justify-content:space-around;flex-flow:row wrap;align-items:stretch;transition:all 1s}@media (max-width: 575.98px){.CMND-responsive-container{position:fixed;top:0;left:0;z-index:99999}.CMND-responsive-container ::ng-deep c-large-sidebar{width:100%}}.CMND-responsive-container.CMND-hidden{visibility:hidden;opacity:0;left:-1000px}.CMND-responsive-container.CMND-hidden .backdrop{opacity:0;background-color:transparent}.CMND-responsive-container .CMND-content{flex:4}.CMND-responsive-container .CMND-backdrop{flex:1;background-color:#00000043;transition:all 1s ease-out}\n"], dependencies: [{ kind: "component", type: i2.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ResponsiveContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-responsive-container', template: "<main class=\"CMND-responsive-container\" [class.CMND-hidden]=\"mobileIsSidebarClosed\">\n  <div class=\"CMND-content\">\n    <ng-content />\n  </div>\n  <div class=\"CMND-backdrop\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\"></div>\n</main>\n<button class=\"CMND-mobile-sidebar-btn\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\">\n  <ng-icon class=\"icon\" size=\"20\" [name]=\"mobileMenuIcon\"></ng-icon>\n</button>\n", styles: [".CMND-mobile-sidebar-btn{position:fixed;top:0;left:0;z-index:9999;height:55px;width:55px;background-color:var(--ngx-commander-large-sidebar-menu-btn-color);color:#fff;border:none;display:flex;align-items:center;justify-content:center;display:none;transition:all .3s}.CMND-mobile-sidebar-btn .icon{width:50px}@media (max-width: 575.98px){.CMND-mobile-sidebar-btn{display:block}}.CMND-responsive-container{display:flex;width:100%;justify-content:space-around;flex-flow:row wrap;align-items:stretch;transition:all 1s}@media (max-width: 575.98px){.CMND-responsive-container{position:fixed;top:0;left:0;z-index:99999}.CMND-responsive-container ::ng-deep c-large-sidebar{width:100%}}.CMND-responsive-container.CMND-hidden{visibility:hidden;opacity:0;left:-1000px}.CMND-responsive-container.CMND-hidden .backdrop{opacity:0;background-color:transparent}.CMND-responsive-container .CMND-content{flex:4}.CMND-responsive-container .CMND-backdrop{flex:1;background-color:#00000043;transition:all 1s ease-out}\n"] }]
        }], propDecorators: { mobileMenuIcon: [{
                type: Input
            }] } });

class SidebarHeaderComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.subscriptions = [];
        this.isSidebarClosed = false;
    }
    ngOnInit() {
        this.subscriptions.push(this.sidebarService.isSidebarClosed.subscribe((isSidebarClosed) => {
            this.isSidebarClosed = isSidebarClosed;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarHeaderComponent, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: SidebarHeaderComponent, selector: "c-sidebar-header", inputs: { config: "config" }, ngImport: i0, template: "<section class=\"sidebar-header\">\n  <img\n    *ngIf=\"config\"\n    class=\"main-logo\"\n    [class.small-logo]=\"isSidebarClosed\"\n    [src]=\"isSidebarClosed ? config?.collapsedLogo?.url : config?.logo?.url\"\n    [ngStyle]=\"{\n      height: isSidebarClosed ? config?.collapsedLogo?.height : config?.logo?.height,\n      width: isSidebarClosed ? config?.collapsedLogo?.width : config?.logo?.width\n    }\"\n  />\n</section>\n", styles: [".sidebar-header{background-color:#fff;height:65px;display:flex;align-items:center;padding:0px 1rem;border-bottom:1px solid #efeff0;width:100%;border-right:1px solid #efeff0}.sidebar-header .main-logo{width:100px;height:auto;transition:all .3s}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SidebarHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-header', template: "<section class=\"sidebar-header\">\n  <img\n    *ngIf=\"config\"\n    class=\"main-logo\"\n    [class.small-logo]=\"isSidebarClosed\"\n    [src]=\"isSidebarClosed ? config?.collapsedLogo?.url : config?.logo?.url\"\n    [ngStyle]=\"{\n      height: isSidebarClosed ? config?.collapsedLogo?.height : config?.logo?.height,\n      width: isSidebarClosed ? config?.collapsedLogo?.width : config?.logo?.width\n    }\"\n  />\n</section>\n", styles: [".sidebar-header{background-color:#fff;height:65px;display:flex;align-items:center;padding:0px 1rem;border-bottom:1px solid #efeff0;width:100%;border-right:1px solid #efeff0}.sidebar-header .main-logo{width:100px;height:auto;transition:all .3s}\n"] }]
        }], ctorParameters: () => [{ type: SidebarService }], propDecorators: { config: [{
                type: Input
            }] } });

class SidebarModule {
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
            RouterModule, i2.NgIconsModule], exports: [SmallSidebarComponent, SidebarComponent, ResponsiveContainerComponent, SidebarHeaderComponent] }); }
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

/*
 * Public API Surface of sidebar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ResponsiveContainerComponent, SidebarComponent, SidebarHeaderComponent, SidebarModule, SidebarService, SmallSidebarComponent };
//# sourceMappingURL=martinstf-ngx-commander-sidebar.mjs.map
