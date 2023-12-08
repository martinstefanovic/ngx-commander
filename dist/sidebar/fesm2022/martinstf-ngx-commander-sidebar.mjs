import * as i0 from '@angular/core';
import { Injectable, NgModule, InjectionToken, TemplateRef, Component, ChangeDetectionStrategy, Inject, Injector, Directive, Input, HostListener, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { heroBars4, heroChevronDown, heroChevronUp, heroChevronRight, heroArrowLeft } from '@ng-icons/heroicons/outline';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@ng-icons/core';
import { NgIconsModule } from '@ng-icons/core';
import * as i4 from '@angular/router';
import { RouterModule } from '@angular/router';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i1 from '@angular/cdk/overlay';

class SidebarService {
    constructor() {
        this.isSidebarClosed = new BehaviorSubject(false);
        this.sidebarItemClick = new BehaviorSubject(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class SidebarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: SidebarModule, imports: [CommonModule,
            NgIconsModule,
            RouterModule, i3.NgIconsModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarModule, imports: [CommonModule,
            NgIconsModule,
            RouterModule,
            NgIconsModule.withIcons({ heroBars4, heroChevronDown, heroChevronUp, heroChevronRight, heroArrowLeft })] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        NgIconsModule,
                        RouterModule,
                        NgIconsModule.withIcons({ heroBars4, heroChevronDown, heroChevronUp, heroChevronRight, heroArrowLeft }),
                    ],
                    exports: [],
                }]
        }] });

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipContainerComponent, deps: [{ token: TOOLTIP_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TooltipContainerComponent, isStandalone: true, selector: "app-tooltip-container", ngImport: i0, template: `<ng-container *ngIf="asString as string">
      {{ string }}
    </ng-container>

    <ng-container *ngIf="asTemplate as template">
      <ng-template [ngTemplateOutlet]="template"></ng-template>
    </ng-container> `, isInline: true, styles: [":host{display:block;max-width:12rem;padding:.5rem;font-size:.8rem;color:#fff;background:#000;border-radius:.25rem;box-sizing:border-box;margin-left:.3rem}:host-context(.top){margin-bottom:.5rem}:host-context(.bottom){margin-top:.5rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
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

var ClickType;
(function (ClickType) {
    ClickType["ITEM"] = "sidebarItem";
    ClickType["DROPDOWN"] = "dropdown";
    ClickType["DROPDOWN_ITEM"] = "dropdownItem";
})(ClickType || (ClickType = {}));

class SmallSidebarComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.isSidebarClosed = false;
    }
    ngOnInit() {
        this.activeItemIndex = this.defaultSelectedIndex;
        setTimeout(() => {
            this.height = this.config?.style?.height;
        }, 2000);
    }
    onSelectItem(event, itemIndex, item) {
        this.activeItemIndex = itemIndex;
        this.sidebarService.sidebarItemClick.next({
            event,
            data: item,
            index: itemIndex,
            type: ClickType.ITEM,
            sidebarType: 'small',
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SmallSidebarComponent, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SmallSidebarComponent, isStandalone: true, selector: "c-small-sidebar", inputs: { config: "config", defaultSelectedIndex: "defaultSelectedIndex" }, ngImport: i0, template: "<article\n  class=\"ngxCommander-small-sidebar\"\n  [style]=\"{\n    height: config['style']?.height,\n    width: config['style']?.width\n  }\"\n>\n  <section #contentRef>\n    <ng-content />\n  </section>\n\n  @if (contentRef.childNodes.length === 0) {\n    @for (item of config['routes']; track item.title; let index = $index) {\n      <div\n        class=\"item\"\n        (click)=\"onSelectItem($event, index, item)\"\n        [class.active]=\"activeItemIndex === index\"\n        [appTooltip]=\"item.title\"\n        [ngClass]=\"item.class\"\n      >\n        <span>{{ item.icon }}</span>\n      </div>\n    }\n  }\n</article>\n", styles: [".ngxCommander-small-sidebar{width:55px;height:100%;display:flex;flex-direction:column;align-items:center;padding-top:20px;border-right:1px solid #efeff0;background-color:var(--ngx-commander-small-sidebar-background);overflow-x:hidden;overflow-y:auto}.ngxCommander-small-sidebar::-webkit-scrollbar{width:2px!important}.ngxCommander-small-sidebar::-webkit-scrollbar-track{background:#f4fafe}.ngxCommander-small-sidebar::-webkit-scrollbar-thumb{background:var(--ngx-commander-small-sidebar-active-text)}.ngxCommander-small-sidebar::-webkit-scrollbar-thumb:hover{background:var(--ngx-commander-small-sidebar-active-text)}.ngxCommander-small-sidebar .item{min-width:32px;min-height:32px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;background-color:var(--ngx-commander-small-sidebar-item-background);color:#000;border-radius:10px;margin-bottom:10px;cursor:pointer;border:2px solid var(--ngx-commander-small-sidebar-background);outline:2px solid transparent;transition:all .2s}.ngxCommander-small-sidebar .item span{font-size:.8rem!important}.ngxCommander-small-sidebar .item:hover{color:var(--ngx-commander-small-sidebar-active-text);background-color:var(--ngx-commander-small-sidebar-item-background)}.ngxCommander-small-sidebar .item.active{color:var(--ngx-commander-small-sidebar-active-text);outline:2px solid var(--ngx-commander-small-sidebar-active-border)}\n", ":root{--ngx-commander-small-sidebar-background: #f5f7f9;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #e6ebef;--ngx-commander-small-sidebar-item-background: #e6ebef;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}.wrapper:not(:empty){width:100%}.wrapper:not(:empty)+.default{display:none}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"], dependencies: [{ kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SmallSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-small-sidebar', encapsulation: ViewEncapsulation.None, standalone: true, imports: [TooltipDirective, CommonModule], template: "<article\n  class=\"ngxCommander-small-sidebar\"\n  [style]=\"{\n    height: config['style']?.height,\n    width: config['style']?.width\n  }\"\n>\n  <section #contentRef>\n    <ng-content />\n  </section>\n\n  @if (contentRef.childNodes.length === 0) {\n    @for (item of config['routes']; track item.title; let index = $index) {\n      <div\n        class=\"item\"\n        (click)=\"onSelectItem($event, index, item)\"\n        [class.active]=\"activeItemIndex === index\"\n        [appTooltip]=\"item.title\"\n        [ngClass]=\"item.class\"\n      >\n        <span>{{ item.icon }}</span>\n      </div>\n    }\n  }\n</article>\n", styles: [".ngxCommander-small-sidebar{width:55px;height:100%;display:flex;flex-direction:column;align-items:center;padding-top:20px;border-right:1px solid #efeff0;background-color:var(--ngx-commander-small-sidebar-background);overflow-x:hidden;overflow-y:auto}.ngxCommander-small-sidebar::-webkit-scrollbar{width:2px!important}.ngxCommander-small-sidebar::-webkit-scrollbar-track{background:#f4fafe}.ngxCommander-small-sidebar::-webkit-scrollbar-thumb{background:var(--ngx-commander-small-sidebar-active-text)}.ngxCommander-small-sidebar::-webkit-scrollbar-thumb:hover{background:var(--ngx-commander-small-sidebar-active-text)}.ngxCommander-small-sidebar .item{min-width:32px;min-height:32px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;background-color:var(--ngx-commander-small-sidebar-item-background);color:#000;border-radius:10px;margin-bottom:10px;cursor:pointer;border:2px solid var(--ngx-commander-small-sidebar-background);outline:2px solid transparent;transition:all .2s}.ngxCommander-small-sidebar .item span{font-size:.8rem!important}.ngxCommander-small-sidebar .item:hover{color:var(--ngx-commander-small-sidebar-active-text);background-color:var(--ngx-commander-small-sidebar-item-background)}.ngxCommander-small-sidebar .item.active{color:var(--ngx-commander-small-sidebar-active-text);outline:2px solid var(--ngx-commander-small-sidebar-active-border)}\n", ":root{--ngx-commander-small-sidebar-background: #f5f7f9;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #e6ebef;--ngx-commander-small-sidebar-item-background: #e6ebef;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}.wrapper:not(:empty){width:100%}.wrapper:not(:empty)+.default{display:none}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"] }]
        }], ctorParameters: () => [{ type: SidebarService }], propDecorators: { config: [{
                type: Input
            }], defaultSelectedIndex: [{
                type: Input
            }] } });

class SidebarTitleComponent {
    constructor() {
        this.isSidebarClosed = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SidebarTitleComponent, isStandalone: true, selector: "app-sidebar-title", inputs: { item: "item", isSidebarClosed: "isSidebarClosed" }, ngImport: i0, template: "@if (!item?.path && !item.children) {\n  <p class=\"sidebar-section-title\" [appTooltip]=\"item.title\" [disableTooltip]=\"!isSidebarClosed\">\n    <span>{{ item.title }}</span>\n  </p>\n}\n", styles: [""], dependencies: [{ kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-title', encapsulation: ViewEncapsulation.None, standalone: true, imports: [TooltipDirective], template: "@if (!item?.path && !item.children) {\n  <p class=\"sidebar-section-title\" [appTooltip]=\"item.title\" [disableTooltip]=\"!isSidebarClosed\">\n    <span>{{ item.title }}</span>\n  </p>\n}\n" }]
        }], propDecorators: { item: [{
                type: Input
            }], isSidebarClosed: [{
                type: Input
            }] } });

class SidebarItemComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarItemComponent, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SidebarItemComponent, isStandalone: true, selector: "app-sidebar-item", inputs: { isSidebarClosed: "isSidebarClosed", item: "item", showIcon: "showIcon" }, outputs: { itemClick: "itemClick" }, ngImport: i0, template: "@if (item?.path) {\n  <div\n    class=\"sidebar-single-item\"\n    [class.closed-sidebar]=\"isSidebarClosed\"\n    [routerLink]=\"item.path\"\n    routerLinkActive=\"active\"\n    [appTooltip]=\"item.title\"\n    [disableTooltip]=\"!isSidebarClosed\"\n    (click)=\"onClick($event, item)\"\n    [ngClass]=\"item.class\"\n  >\n    @if (showIcon) {\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\" />\n    }\n    <span class=\"item-title\"> {{ item.title }} </span>\n  </div>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }, { kind: "ngmodule", type: NgIconsModule }, { kind: "component", type: i3.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i4.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i4.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-item', encapsulation: ViewEncapsulation.None, standalone: true, imports: [CommonModule, TooltipDirective, NgIconsModule, RouterModule], template: "@if (item?.path) {\n  <div\n    class=\"sidebar-single-item\"\n    [class.closed-sidebar]=\"isSidebarClosed\"\n    [routerLink]=\"item.path\"\n    routerLinkActive=\"active\"\n    [appTooltip]=\"item.title\"\n    [disableTooltip]=\"!isSidebarClosed\"\n    (click)=\"onClick($event, item)\"\n    [ngClass]=\"item.class\"\n  >\n    @if (showIcon) {\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\" />\n    }\n    <span class=\"item-title\"> {{ item.title }} </span>\n  </div>\n}\n" }]
        }], ctorParameters: () => [{ type: SidebarService }], propDecorators: { isSidebarClosed: [{
                type: Input
            }], item: [{
                type: Input
            }], showIcon: [{
                type: Input
            }], itemClick: [{
                type: Output
            }] } });

class SidebarDropdownComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.ClickType = ClickType;
        this.isDropdownOpen = false;
        this.subscriptions = [];
        this.isSidebarClosed = false;
    }
    onClick(event, data, type) {
        this.sidebarService.sidebarItemClick.next({ event, data, type, sidebarType: 'regular' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarDropdownComponent, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SidebarDropdownComponent, isStandalone: true, selector: "app-sidebar-dropdown", inputs: { item: "item", isSidebarClosed: "isSidebarClosed", styleClass: "styleClass" }, ngImport: i0, template: "@if (item.children) {\n  <section>\n    <div\n      class=\"sidebar-dropdown-item\"\n      tooltipPosition=\"right\"\n      [class]=\"styleClass\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n      [class.active-dropdown]=\"isDropdownOpen\"\n      (click)=\"isDropdownOpen = !isDropdownOpen\"\n      [appTooltip]=\"item.title\"\n      [disableTooltip]=\"!isSidebarClosed\"\n      (click)=\"onClick($event, item, ClickType.DROPDOWN)\"\n      [ngClass]=\"item.class\"\n    >\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\" />\n      <p>{{ item.title }}</p>\n      @if (!isSidebarClosed) {\n        @if (isDropdownOpen) {\n          <ng-icon class=\"sidebar-dropdown-icon\" name=\"heroChevronUp\" />\n        } @else {\n          <ng-icon class=\"sidebar-dropdown-icon\" name=\"heroChevronDown\" />\n        }\n      }\n    </div>\n\n    <div\n      class=\"sidebar-dropdown-subitems\"\n      [ngClass]=\"isDropdownOpen ? 'opened' : ''\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n    >\n      @for (subItem of item.children; track subItem) {\n        @if (subItem.path) {\n          <div\n            (click)=\"onClick($event, subItem, ClickType.DROPDOWN_ITEM)\"\n            class=\"sidebar-dropdown-item sidebar-dropdown-subitem\"\n            [routerLink]=\"subItem.path\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            [appTooltip]=\"subItem.title\"\n            [disableTooltip]=\"!isSidebarClosed\"\n          >\n            <i class=\"line-connector\" [ngClass]=\"{ 'hide-line-connector': isSidebarClosed }\"></i>\n            @if (!isSidebarClosed) {\n              <span>\n                {{ subItem.title }}\n              </span>\n            } @else {\n              <ng-icon size=\"15\" class=\"icon\" [name]=\"subItem.icon\"></ng-icon>\n            }\n          </div>\n        }\n        @if (subItem?.children) {\n          <app-sidebar-dropdown\n            styleClass=\"bg-transparent subdropdown\"\n            [item]=\"subItem\"\n            [isSidebarClosed]=\"isSidebarClosed\"\n          />\n        }\n      }\n    </div>\n  </section>\n}\n", styles: [".classic-sidebar .closed-sidebar .subdropdown{padding-left:0rem!important;margin-left:-5px!important}.classic-sidebar .closed-sidebar .sidebar-dropdown-subitems.closed-sidebar{margin-left:0!important}\n"], dependencies: [{ kind: "component", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: ["item", "isSidebarClosed", "styleClass"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }, { kind: "ngmodule", type: NgIconsModule }, { kind: "component", type: i3.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i4.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i4.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar-dropdown', encapsulation: ViewEncapsulation.None, standalone: true, imports: [CommonModule, TooltipDirective, NgIconsModule, RouterModule], template: "@if (item.children) {\n  <section>\n    <div\n      class=\"sidebar-dropdown-item\"\n      tooltipPosition=\"right\"\n      [class]=\"styleClass\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n      [class.active-dropdown]=\"isDropdownOpen\"\n      (click)=\"isDropdownOpen = !isDropdownOpen\"\n      [appTooltip]=\"item.title\"\n      [disableTooltip]=\"!isSidebarClosed\"\n      (click)=\"onClick($event, item, ClickType.DROPDOWN)\"\n      [ngClass]=\"item.class\"\n    >\n      <ng-icon size=\"15\" class=\"icon\" [name]=\"item.icon\" />\n      <p>{{ item.title }}</p>\n      @if (!isSidebarClosed) {\n        @if (isDropdownOpen) {\n          <ng-icon class=\"sidebar-dropdown-icon\" name=\"heroChevronUp\" />\n        } @else {\n          <ng-icon class=\"sidebar-dropdown-icon\" name=\"heroChevronDown\" />\n        }\n      }\n    </div>\n\n    <div\n      class=\"sidebar-dropdown-subitems\"\n      [ngClass]=\"isDropdownOpen ? 'opened' : ''\"\n      [class.closed-sidebar]=\"isSidebarClosed\"\n    >\n      @for (subItem of item.children; track subItem) {\n        @if (subItem.path) {\n          <div\n            (click)=\"onClick($event, subItem, ClickType.DROPDOWN_ITEM)\"\n            class=\"sidebar-dropdown-item sidebar-dropdown-subitem\"\n            [routerLink]=\"subItem.path\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            [appTooltip]=\"subItem.title\"\n            [disableTooltip]=\"!isSidebarClosed\"\n          >\n            <i class=\"line-connector\" [ngClass]=\"{ 'hide-line-connector': isSidebarClosed }\"></i>\n            @if (!isSidebarClosed) {\n              <span>\n                {{ subItem.title }}\n              </span>\n            } @else {\n              <ng-icon size=\"15\" class=\"icon\" [name]=\"subItem.icon\"></ng-icon>\n            }\n          </div>\n        }\n        @if (subItem?.children) {\n          <app-sidebar-dropdown\n            styleClass=\"bg-transparent subdropdown\"\n            [item]=\"subItem\"\n            [isSidebarClosed]=\"isSidebarClosed\"\n          />\n        }\n      }\n    </div>\n  </section>\n}\n", styles: [".classic-sidebar .closed-sidebar .subdropdown{padding-left:0rem!important;margin-left:-5px!important}.classic-sidebar .closed-sidebar .sidebar-dropdown-subitems.closed-sidebar{margin-left:0!important}\n"] }]
        }], ctorParameters: () => [{ type: SidebarService }], propDecorators: { item: [{
                type: Input
            }], isSidebarClosed: [{
                type: Input
            }], styleClass: [{
                type: Input
            }] } });

var OS;
(function (OS) {
    OS[OS["MACOS"] = 1] = "MACOS";
    OS[OS["IOS"] = 2] = "IOS";
    OS[OS["WINDOWS"] = 3] = "WINDOWS";
    OS[OS["ANDROID"] = 4] = "ANDROID";
    OS[OS["LINUX"] = 5] = "LINUX";
})(OS || (OS = {}));

function detectOS() {
    let userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'], iosPlatforms = ['iPhone', 'iPad', 'iPod'], os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = OS.MACOS;
    }
    else if (iosPlatforms.indexOf(platform) !== -1) {
        os = OS.IOS;
    }
    else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = OS.WINDOWS;
    }
    else if (/Android/.test(userAgent)) {
        os = OS.ANDROID;
    }
    else if (!os && /Linux/.test(platform)) {
        os = OS.LINUX;
    }
    return os;
}
function setOsShortcut() {
    const currentOS = detectOS();
    let osKey = '';
    switch (currentOS) {
        case OS.MACOS:
            osKey = '⌘';
            break;
        case OS.WINDOWS:
            osKey = 'Ctrl';
            break;
        default:
            osKey = 'Ctrl';
            break;
    }
    return osKey;
}

class ClassicThemeComponent {
    onKeyPress(event) {
        if ((event.metaKey || event.ctrlKey) && event.key === 'j') {
            event.preventDefault();
            this.onToggleSidebar();
        }
    }
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        /**
         * Inputs
         */
        this.isSidebarClosed = false;
    }
    ngOnInit() {
        this.osKey = setOsShortcut();
    }
    /* ====================================
    *                HELPERS
    ======================================= */
    onToggleSidebar() {
        this.isSidebarClosed = !this.isSidebarClosed;
        this.sidebarService.isSidebarClosed.next(this.isSidebarClosed);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ClassicThemeComponent, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ClassicThemeComponent, isStandalone: true, selector: "c-classic-theme", inputs: { isSidebarClosed: "isSidebarClosed", config: "config" }, host: { listeners: { "window:keydown": "onKeyPress($event)" } }, ngImport: i0, template: "<main\n  class=\"classic-sidebar\"\n  [ngClass]=\"{ closed: isSidebarClosed }\"\n  [ngStyle]=\"{ height: config?.style?.height ?? 'calc(100vh - 65px)' }\"\n>\n  <!-- HEADER -->\n  @if (config?.layout?.header?.show) {\n    <div class=\"classic-sidebar-header\" [style.flex]=\"config?.layout?.header?.flex\">\n      <div class=\"wrapper\">\n        <ng-content select=\"[header]\" />\n      </div>\n      <div class=\"default\">\n        @if (config?.title) {\n          <h3 class=\"sidebar-title\">\n            {{ config?.title }}\n          </h3>\n        }\n      </div>\n    </div>\n  }\n\n  <!-- BODY -->\n  <div class=\"classic-sidebar-body\" [style.flex]=\"config?.layout?.body?.flex\">\n    @for (menuItem of config?.routes; track menuItem; let i = $index) {\n      <app-sidebar-item [isSidebarClosed]=\"isSidebarClosed\" [item]=\"menuItem\" />\n      <app-sidebar-dropdown [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n      <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n    }\n  </div>\n\n  <!-- FOOTER -->\n  @if (config?.layout?.footer?.show) {\n    <div class=\"classic-sidebar-footer\" [style.flex]=\"config?.layout?.footer?.flex\">\n      <div class=\"wrapper\">\n        <ng-content select=\"[footer]\" />\n      </div>\n      <div class=\"default\" appTooltip=\"Collapse sidebar\" (click)=\"onToggleSidebar()\">\n        <kbd class=\"button-key\">{{ osKey }}</kbd>\n        <kbd class=\"button-key\">J</kbd>\n      </div>\n    </div>\n  }\n</main>\n", styles: [".sidebar-section-title{color:var(--ngx-commander-large-sidebar-text);font-weight:400;text-transform:uppercase;min-width:140px;padding:.5rem .85rem;margin-top:.7rem}.sidebar-section-title span{font-size:.75rem}.closed .sidebar-section-title{width:100%;min-width:0px;height:20px;border-bottom:1px solid #e0e0e0;padding:.5rem .85rem;margin-top:.7rem}.closed .sidebar-section-title span{visibility:hidden;opacity:0}@media (max-width: 575.98px){c-sidebar,c-classic-theme{width:100%}}.classic-sidebar{height:calc(100vh - 65px);width:230px;transition:all .3s ease-in-out;display:flex;flex-flow:column;background-color:var(--ngx-commander-large-sidebar-background);border-right:1px solid #efeff0}@media (min-width: 1200px) and (max-width: 3000px){.classic-sidebar{width:290px}}@media (min-width: 992px) and (max-width: 1199.98px){.classic-sidebar{width:260px}}@media (max-width: 575.98px){.classic-sidebar{min-width:0px;width:100%;box-shadow:none;border-right:1px solid transparent}}@media (min-width: 1200px) and (max-width: 1536.98px){.classic-sidebar{width:230px}}.classic-sidebar .sidebar-single-item{display:flex;align-items:center;padding:.5rem .85rem;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);height:3rem;background-color:var(--ngx-commander-large-sidebar-item-background);border-radius:10px;position:relative}.classic-sidebar .sidebar-single-item:hover .item-title{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-single-item:hover .icon{color:var(--ngx-commander-large-sidebar-active-icon)}.classic-sidebar .sidebar-single-item .icon{color:var(--ngx-commander-large-sidebar-icon);transition:all .3s}.classic-sidebar .sidebar-single-item .item-title{-webkit-user-select:none;user-select:none;transition:all .5s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.5rem;color:var(--ngx-commander-large-sidebar-text)}.classic-sidebar .sidebar-single-item.active .item-title{color:var(--main-color)}.classic-sidebar .sidebar-single-item.closed-sidebar .icon{margin-left:.4rem}.classic-sidebar .sidebar-single-item.closed-sidebar .item-title{opacity:0;width:0px;color:#fff;overflow:hidden;margin:0}.classic-sidebar .sidebar-dropdown-item{display:flex;align-items:center;padding:.5rem .85rem;width:100%;cursor:pointer;height:3rem;background-color:var(--ngx-commander-large-sidebar-item-background);transition:all .3s;border-radius:10px;position:relative}.classic-sidebar .sidebar-dropdown-item:hover p{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-dropdown-item:hover .icon{color:var(--ngx-commander-large-sidebar-active-icon)}.classic-sidebar .sidebar-dropdown-item .icon{color:var(--ngx-commander-large-sidebar-icon);transition:all .3s}.classic-sidebar .sidebar-dropdown-item p{-webkit-user-select:none;user-select:none;transition:all .5s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.5rem;color:var(--ngx-commander-large-sidebar-text)}.classic-sidebar .sidebar-dropdown-item.closed-sidebar .icon{margin-left:.4rem}.classic-sidebar .sidebar-dropdown-item.closed-sidebar p{opacity:0;width:0px;color:#fff;overflow:hidden;margin:0}.classic-sidebar .sidebar-dropdown-item.active-dropdown{background-color:var(--ngx-commander-large-sidebar-item-active-background)}.classic-sidebar .sidebar-dropdown-item .sidebar-dropdown-icon{position:absolute;right:.5rem;top:50%;transform:translateY(-50%)}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem{pointer-events:all;padding-left:0}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem span{color:var(--ngx-commander-large-sidebar-text);transition:all .2s;min-width:150px}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem.active span,.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem:hover span{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem .line-connector{width:15px;height:10px;border-bottom:2px solid #f0f4f6;border-left:2px solid #f0f4f6;margin-right:10px;border-bottom-left-radius:8px;margin-bottom:9px;margin-left:-2px;transition:all .3s}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem .line-connector.hide-line-connector{width:0px;height:0px;border-bottom:2px solid transparent;border-left:2px solid transparent;margin:0}.classic-sidebar .sidebar-dropdown-subitems{margin-left:2.1rem;display:none;border-left:2px solid #f0f4f6;border-bottom-left-radius:40px;transition:all .3s}.classic-sidebar .sidebar-dropdown-subitems.opened{display:block}.classic-sidebar .sidebar-dropdown-subitems.closed-sidebar{border-left:2px solid transparent;margin-left:15px}.classic-sidebar .sidebar-title{color:var(--ngx-commander-large-sidebar-text);font-size:.9rem;font-weight:400;margin-left:1rem;text-transform:uppercase;transition:all .3s;min-width:140px}.classic-sidebar-header{flex:1;display:flex;align-items:center;padding:0px 1rem}.classic-sidebar-body{overflow-x:hidden;overflow-y:auto;flex:8;padding:0px 1rem}.classic-sidebar-body::-webkit-scrollbar{width:3px!important;cursor:pointer}.classic-sidebar-body::-webkit-scrollbar-track{background:#f4fafe}.classic-sidebar-body::-webkit-scrollbar-thumb{background:#f6f5f6}.classic-sidebar-body::-webkit-scrollbar-thumb:hover{background:#dbd9db}.classic-sidebar-footer{flex:1;display:flex;align-items:center;padding:0px 1rem}.classic-sidebar-footer .button-key{display:flex;align-items:center;justify-content:center;min-width:21px;height:21px;min-height:21px;color:#495057;cursor:pointer;position:relative;border:1px solid #f7f5f5;box-shadow:0 1px #0003,0 0 0 2px #fbfbfb inset;text-shadow:0 1px 0 #fbfbfb;border-radius:3px;display:inline-block;font-family:sans-serif;line-height:1.5;margin:0 .1em;padding:1px .4em;vertical-align:middle;text-align:center}.classic-sidebar-footer .button-key:hover{box-shadow:0 .5px #0003,0 0 0 2px #fbfbfb inset;top:1px px}.classic-sidebar-footer .button-key:first-child{margin-right:.2rem}.classic-sidebar-footer span{font-size:.7rem;margin-left:.4rem;color:#495057cc;transition:all .3s;min-width:100px;opacity:1}.classic-sidebar.closed{width:80px;padding:0;justify-content:center}.classic-sidebar.closed .button-key{font-size:11px}.classic-sidebar.closed .sidebar-title{opacity:0}.hide{opacity:0!important;visibility:hidden;position:absolute;bottom:-300px}\n", ":root{--ngx-commander-small-sidebar-background: #f5f7f9;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #e6ebef;--ngx-commander-small-sidebar-item-background: #e6ebef;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}.wrapper:not(:empty){width:100%}.wrapper:not(:empty)+.default{display:none}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"], dependencies: [{ kind: "component", type: SidebarTitleComponent, selector: "app-sidebar-title", inputs: ["item", "isSidebarClosed"] }, { kind: "component", type: SidebarItemComponent, selector: "app-sidebar-item", inputs: ["isSidebarClosed", "item", "showIcon"], outputs: ["itemClick"] }, { kind: "component", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: ["item", "isSidebarClosed", "styleClass"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: TooltipDirective, selector: "[appTooltip]", inputs: ["appTooltip", "disableTooltip"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ClassicThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-classic-theme', encapsulation: ViewEncapsulation.None, standalone: true, imports: [SidebarTitleComponent, SidebarItemComponent, SidebarDropdownComponent, CommonModule, TooltipDirective], template: "<main\n  class=\"classic-sidebar\"\n  [ngClass]=\"{ closed: isSidebarClosed }\"\n  [ngStyle]=\"{ height: config?.style?.height ?? 'calc(100vh - 65px)' }\"\n>\n  <!-- HEADER -->\n  @if (config?.layout?.header?.show) {\n    <div class=\"classic-sidebar-header\" [style.flex]=\"config?.layout?.header?.flex\">\n      <div class=\"wrapper\">\n        <ng-content select=\"[header]\" />\n      </div>\n      <div class=\"default\">\n        @if (config?.title) {\n          <h3 class=\"sidebar-title\">\n            {{ config?.title }}\n          </h3>\n        }\n      </div>\n    </div>\n  }\n\n  <!-- BODY -->\n  <div class=\"classic-sidebar-body\" [style.flex]=\"config?.layout?.body?.flex\">\n    @for (menuItem of config?.routes; track menuItem; let i = $index) {\n      <app-sidebar-item [isSidebarClosed]=\"isSidebarClosed\" [item]=\"menuItem\" />\n      <app-sidebar-dropdown [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n      <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n    }\n  </div>\n\n  <!-- FOOTER -->\n  @if (config?.layout?.footer?.show) {\n    <div class=\"classic-sidebar-footer\" [style.flex]=\"config?.layout?.footer?.flex\">\n      <div class=\"wrapper\">\n        <ng-content select=\"[footer]\" />\n      </div>\n      <div class=\"default\" appTooltip=\"Collapse sidebar\" (click)=\"onToggleSidebar()\">\n        <kbd class=\"button-key\">{{ osKey }}</kbd>\n        <kbd class=\"button-key\">J</kbd>\n      </div>\n    </div>\n  }\n</main>\n", styles: [".sidebar-section-title{color:var(--ngx-commander-large-sidebar-text);font-weight:400;text-transform:uppercase;min-width:140px;padding:.5rem .85rem;margin-top:.7rem}.sidebar-section-title span{font-size:.75rem}.closed .sidebar-section-title{width:100%;min-width:0px;height:20px;border-bottom:1px solid #e0e0e0;padding:.5rem .85rem;margin-top:.7rem}.closed .sidebar-section-title span{visibility:hidden;opacity:0}@media (max-width: 575.98px){c-sidebar,c-classic-theme{width:100%}}.classic-sidebar{height:calc(100vh - 65px);width:230px;transition:all .3s ease-in-out;display:flex;flex-flow:column;background-color:var(--ngx-commander-large-sidebar-background);border-right:1px solid #efeff0}@media (min-width: 1200px) and (max-width: 3000px){.classic-sidebar{width:290px}}@media (min-width: 992px) and (max-width: 1199.98px){.classic-sidebar{width:260px}}@media (max-width: 575.98px){.classic-sidebar{min-width:0px;width:100%;box-shadow:none;border-right:1px solid transparent}}@media (min-width: 1200px) and (max-width: 1536.98px){.classic-sidebar{width:230px}}.classic-sidebar .sidebar-single-item{display:flex;align-items:center;padding:.5rem .85rem;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);height:3rem;background-color:var(--ngx-commander-large-sidebar-item-background);border-radius:10px;position:relative}.classic-sidebar .sidebar-single-item:hover .item-title{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-single-item:hover .icon{color:var(--ngx-commander-large-sidebar-active-icon)}.classic-sidebar .sidebar-single-item .icon{color:var(--ngx-commander-large-sidebar-icon);transition:all .3s}.classic-sidebar .sidebar-single-item .item-title{-webkit-user-select:none;user-select:none;transition:all .5s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.5rem;color:var(--ngx-commander-large-sidebar-text)}.classic-sidebar .sidebar-single-item.active .item-title{color:var(--main-color)}.classic-sidebar .sidebar-single-item.closed-sidebar .icon{margin-left:.4rem}.classic-sidebar .sidebar-single-item.closed-sidebar .item-title{opacity:0;width:0px;color:#fff;overflow:hidden;margin:0}.classic-sidebar .sidebar-dropdown-item{display:flex;align-items:center;padding:.5rem .85rem;width:100%;cursor:pointer;height:3rem;background-color:var(--ngx-commander-large-sidebar-item-background);transition:all .3s;border-radius:10px;position:relative}.classic-sidebar .sidebar-dropdown-item:hover p{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-dropdown-item:hover .icon{color:var(--ngx-commander-large-sidebar-active-icon)}.classic-sidebar .sidebar-dropdown-item .icon{color:var(--ngx-commander-large-sidebar-icon);transition:all .3s}.classic-sidebar .sidebar-dropdown-item p{-webkit-user-select:none;user-select:none;transition:all .5s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.5rem;color:var(--ngx-commander-large-sidebar-text)}.classic-sidebar .sidebar-dropdown-item.closed-sidebar .icon{margin-left:.4rem}.classic-sidebar .sidebar-dropdown-item.closed-sidebar p{opacity:0;width:0px;color:#fff;overflow:hidden;margin:0}.classic-sidebar .sidebar-dropdown-item.active-dropdown{background-color:var(--ngx-commander-large-sidebar-item-active-background)}.classic-sidebar .sidebar-dropdown-item .sidebar-dropdown-icon{position:absolute;right:.5rem;top:50%;transform:translateY(-50%)}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem{pointer-events:all;padding-left:0}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem span{color:var(--ngx-commander-large-sidebar-text);transition:all .2s;min-width:150px}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem.active span,.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem:hover span{color:var(--ngx-commander-large-sidebar-active-text)}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem .line-connector{width:15px;height:10px;border-bottom:2px solid #f0f4f6;border-left:2px solid #f0f4f6;margin-right:10px;border-bottom-left-radius:8px;margin-bottom:9px;margin-left:-2px;transition:all .3s}.classic-sidebar .sidebar-dropdown-item.sidebar-dropdown-subitem .line-connector.hide-line-connector{width:0px;height:0px;border-bottom:2px solid transparent;border-left:2px solid transparent;margin:0}.classic-sidebar .sidebar-dropdown-subitems{margin-left:2.1rem;display:none;border-left:2px solid #f0f4f6;border-bottom-left-radius:40px;transition:all .3s}.classic-sidebar .sidebar-dropdown-subitems.opened{display:block}.classic-sidebar .sidebar-dropdown-subitems.closed-sidebar{border-left:2px solid transparent;margin-left:15px}.classic-sidebar .sidebar-title{color:var(--ngx-commander-large-sidebar-text);font-size:.9rem;font-weight:400;margin-left:1rem;text-transform:uppercase;transition:all .3s;min-width:140px}.classic-sidebar-header{flex:1;display:flex;align-items:center;padding:0px 1rem}.classic-sidebar-body{overflow-x:hidden;overflow-y:auto;flex:8;padding:0px 1rem}.classic-sidebar-body::-webkit-scrollbar{width:3px!important;cursor:pointer}.classic-sidebar-body::-webkit-scrollbar-track{background:#f4fafe}.classic-sidebar-body::-webkit-scrollbar-thumb{background:#f6f5f6}.classic-sidebar-body::-webkit-scrollbar-thumb:hover{background:#dbd9db}.classic-sidebar-footer{flex:1;display:flex;align-items:center;padding:0px 1rem}.classic-sidebar-footer .button-key{display:flex;align-items:center;justify-content:center;min-width:21px;height:21px;min-height:21px;color:#495057;cursor:pointer;position:relative;border:1px solid #f7f5f5;box-shadow:0 1px #0003,0 0 0 2px #fbfbfb inset;text-shadow:0 1px 0 #fbfbfb;border-radius:3px;display:inline-block;font-family:sans-serif;line-height:1.5;margin:0 .1em;padding:1px .4em;vertical-align:middle;text-align:center}.classic-sidebar-footer .button-key:hover{box-shadow:0 .5px #0003,0 0 0 2px #fbfbfb inset;top:1px px}.classic-sidebar-footer .button-key:first-child{margin-right:.2rem}.classic-sidebar-footer span{font-size:.7rem;margin-left:.4rem;color:#495057cc;transition:all .3s;min-width:100px;opacity:1}.classic-sidebar.closed{width:80px;padding:0;justify-content:center}.classic-sidebar.closed .button-key{font-size:11px}.classic-sidebar.closed .sidebar-title{opacity:0}.hide{opacity:0!important;visibility:hidden;position:absolute;bottom:-300px}\n", ":root{--ngx-commander-small-sidebar-background: #f5f7f9;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #e6ebef;--ngx-commander-small-sidebar-item-background: #e6ebef;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}.wrapper:not(:empty){width:100%}.wrapper:not(:empty)+.default{display:none}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"] }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AngularThemeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AngularThemeComponent, isStandalone: true, selector: "c-angular-theme", inputs: { isSidebarClosed: "isSidebarClosed", config: "config" }, ngImport: i0, template: "<main\n  class=\"angular-sidebar\"\n  [ngClass]=\"{ closed: isSidebarClosed }\"\n  [ngStyle]=\"{ height: config?.style?.height ?? '90vh' }\"\n>\n  <!-- HEADER -->\n  @if (config?.layout?.header?.show) {\n    <div class=\"angular-sidebar-header\" [style.flex]=\"config?.layout?.header?.flex\">\n      <div class=\"wrapper\">\n        <ng-content select=\"[header]\" />\n      </div>\n      <div class=\"default\">\n        @if (config?.title) {\n          <h3 class=\"sidebar-title\">\n            {{ config?.title }}\n          </h3>\n        }\n      </div>\n    </div>\n  }\n\n  <!-- BODY -->\n  <div class=\"angular-sidebar-body\" [style.flex]=\"config?.layout?.body?.flex\">\n    <section class=\"screen screen-1\" [ngClass]=\"{ 'hide-screen': isDropdownOpened }\">\n      @for (menuItem of config?.routes; track menuItem; let i = $index) {\n        @if (menuItem?.path) {\n          <app-sidebar-item [showIcon]=\"false\" [isSidebarClosed]=\"isSidebarClosed\" [item]=\"menuItem\" />\n        }\n\n        <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n\n        @if (menuItem.children) {\n          <p class=\"open-screen-btn\" (click)=\"onOpenDropdown(menuItem)\">\n            <span class=\"item-title\"> {{ menuItem.title }} </span>\n            <ng-icon size=\"15\" class=\"icon\" name=\"heroChevronRight\" />\n          </p>\n        }\n      }\n    </section>\n    <section class=\"screen screen-2\" [ngClass]=\"{ 'show-screen': isDropdownOpened }\">\n      <div class=\"dropdown-header\" (click)=\"isDropdownOpened = false\">\n        <ng-icon size=\"20\" class=\"icon\" name=\"heroArrowLeft\" />\n        <span>{{ selectedDropdown?.title }}</span>\n      </div>\n\n      @for (menuItem of selectedDropdown?.children; track menuItem) {\n        <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n        @if (menuItem?.path) {\n          <app-sidebar-item [showIcon]=\"false\" [isSidebarClosed]=\"isSidebarClosed\" [item]=\"menuItem\" />\n        }\n        <app-sidebar-dropdown [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n      }\n    </section>\n  </div>\n\n  <!-- FOOTER -->\n  @if (config?.layout?.footer?.show) {\n    <div class=\"angular-sidebar-footer\" [style.flex]=\"config?.layout?.footer?.flex\">\n      <div class=\"wrapper\">\n        <ng-content select=\"[footer]\" />\n      </div>\n    </div>\n  }\n</main>\n", styles: [".angular-sidebar{height:90vh;width:20rem;transition:all .3s ease-in-out;display:flex;flex-flow:column;background-color:var(--ngx-commander-large-sidebar-background);border-right:1px solid #efeff0;font-family:Inter,sans-serif!important;position:relative}.angular-sidebar-header{flex:1;display:flex;align-items:center;padding:0px 1rem}.angular-sidebar-body{display:flex;overflow-x:hidden;position:relative;flex:8}.angular-sidebar-body .dropdown-header{display:flex;align-items:center;margin-bottom:1.2rem;cursor:pointer}.angular-sidebar-body .dropdown-header span{font-size:.9rem;margin-left:.5rem;font-weight:700}.angular-sidebar-body .screen{padding:0px 1.2rem;padding-right:0;width:100%;position:absolute;transition:all .5s;overflow-x:hidden;overflow-y:auto;height:100%;padding:0px 1rem;flex:20}@media (max-width: 575.98px){.angular-sidebar-body .screen{transition:all .3s}}.angular-sidebar-body .screen::-webkit-scrollbar{width:5px!important;cursor:pointer}.angular-sidebar-body .screen::-webkit-scrollbar-track{background:#f4fafe}.angular-sidebar-body .screen::-webkit-scrollbar-thumb{background:#f6f5f6}.angular-sidebar-body .screen::-webkit-scrollbar-thumb:hover{background:#dbd9db}.angular-sidebar-body .screen-1{left:0}.angular-sidebar-body .screen-1.hide-screen{left:-500px}.angular-sidebar-body .screen-2{height:100%;left:300px}.angular-sidebar-body .screen-2.show-screen{left:0}.angular-sidebar-footer{flex:1;display:flex;align-items:center;padding:0px 1rem}.angular-sidebar .sidebar-section-title{color:var(--ngx-commander-large-sidebar-text);font-weight:500;min-width:140px;padding:.5rem 0rem;margin:.7rem 0}.angular-sidebar .sidebar-section-title span{color:#000;font-size:.9rem}.angular-sidebar .sidebar-single-item{display:flex;align-items:center;padding:1rem;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);background-color:var(--ngx-commander-large-sidebar-item-background);border-left:1px solid #efeff0;position:relative}.angular-sidebar .sidebar-single-item:before{content:\"\";width:2px;height:60%;opacity:0;background:#a5a4a8;position:absolute;left:-1px;transition:all .3s ease-in-out}.angular-sidebar .sidebar-single-item:hover:before{opacity:.9}.angular-sidebar .sidebar-single-item:hover .item-title{color:#000;opacity:.8}.angular-sidebar .sidebar-single-item .item-title{-webkit-user-select:none;user-select:none;transition:all .3s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.2rem;font-size:.9rem;color:var(--ngx-commander-large-sidebar-text)}.angular-sidebar .sidebar-single-item.active:hover:before{height:100%}.angular-sidebar .sidebar-single-item.active:before{opacity:1;height:90%;background:var(--ngx-commander-large-sidebar-active-icon)}.angular-sidebar .sidebar-single-item.active .item-title{color:var(--ngx-commander-large-sidebar-active-text);font-weight:700}.angular-sidebar .open-screen-btn{display:flex;align-items:center;padding:1rem;padding-right:0;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);background-color:var(--ngx-commander-large-sidebar-item-background);border-left:1px solid #e4e3e6;position:relative}.angular-sidebar .open-screen-btn:before{content:\"\";width:2px;height:60%;opacity:0;background:#a5a4a8;position:absolute;left:-1px;transition:all .3s ease-in-out}.angular-sidebar .open-screen-btn:hover:before{opacity:.9}.angular-sidebar .open-screen-btn:hover .item-title,.angular-sidebar .open-screen-btn:hover .icon{color:#000;opacity:.8}.angular-sidebar .open-screen-btn .icon{transition:all .3s}.angular-sidebar .open-screen-btn .item-title{-webkit-user-select:none;user-select:none;transition:all .3s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.2rem;font-size:.9rem;color:var(--ngx-commander-large-sidebar-text)}\n", ":root{--ngx-commander-small-sidebar-background: #f5f7f9;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #e6ebef;--ngx-commander-small-sidebar-item-background: #e6ebef;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}.wrapper:not(:empty){width:100%}.wrapper:not(:empty)+.default{display:none}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: NgIconsModule }, { kind: "component", type: i3.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }, { kind: "component", type: SidebarTitleComponent, selector: "app-sidebar-title", inputs: ["item", "isSidebarClosed"] }, { kind: "component", type: SidebarDropdownComponent, selector: "app-sidebar-dropdown", inputs: ["item", "isSidebarClosed", "styleClass"] }, { kind: "component", type: SidebarItemComponent, selector: "app-sidebar-item", inputs: ["isSidebarClosed", "item", "showIcon"], outputs: ["itemClick"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AngularThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-angular-theme', encapsulation: ViewEncapsulation.None, standalone: true, imports: [CommonModule, NgIconsModule, SidebarTitleComponent, SidebarDropdownComponent, SidebarItemComponent], template: "<main\n  class=\"angular-sidebar\"\n  [ngClass]=\"{ closed: isSidebarClosed }\"\n  [ngStyle]=\"{ height: config?.style?.height ?? '90vh' }\"\n>\n  <!-- HEADER -->\n  @if (config?.layout?.header?.show) {\n    <div class=\"angular-sidebar-header\" [style.flex]=\"config?.layout?.header?.flex\">\n      <div class=\"wrapper\">\n        <ng-content select=\"[header]\" />\n      </div>\n      <div class=\"default\">\n        @if (config?.title) {\n          <h3 class=\"sidebar-title\">\n            {{ config?.title }}\n          </h3>\n        }\n      </div>\n    </div>\n  }\n\n  <!-- BODY -->\n  <div class=\"angular-sidebar-body\" [style.flex]=\"config?.layout?.body?.flex\">\n    <section class=\"screen screen-1\" [ngClass]=\"{ 'hide-screen': isDropdownOpened }\">\n      @for (menuItem of config?.routes; track menuItem; let i = $index) {\n        @if (menuItem?.path) {\n          <app-sidebar-item [showIcon]=\"false\" [isSidebarClosed]=\"isSidebarClosed\" [item]=\"menuItem\" />\n        }\n\n        <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n\n        @if (menuItem.children) {\n          <p class=\"open-screen-btn\" (click)=\"onOpenDropdown(menuItem)\">\n            <span class=\"item-title\"> {{ menuItem.title }} </span>\n            <ng-icon size=\"15\" class=\"icon\" name=\"heroChevronRight\" />\n          </p>\n        }\n      }\n    </section>\n    <section class=\"screen screen-2\" [ngClass]=\"{ 'show-screen': isDropdownOpened }\">\n      <div class=\"dropdown-header\" (click)=\"isDropdownOpened = false\">\n        <ng-icon size=\"20\" class=\"icon\" name=\"heroArrowLeft\" />\n        <span>{{ selectedDropdown?.title }}</span>\n      </div>\n\n      @for (menuItem of selectedDropdown?.children; track menuItem) {\n        <app-sidebar-title [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n        @if (menuItem?.path) {\n          <app-sidebar-item [showIcon]=\"false\" [isSidebarClosed]=\"isSidebarClosed\" [item]=\"menuItem\" />\n        }\n        <app-sidebar-dropdown [item]=\"menuItem\" [isSidebarClosed]=\"isSidebarClosed\" />\n      }\n    </section>\n  </div>\n\n  <!-- FOOTER -->\n  @if (config?.layout?.footer?.show) {\n    <div class=\"angular-sidebar-footer\" [style.flex]=\"config?.layout?.footer?.flex\">\n      <div class=\"wrapper\">\n        <ng-content select=\"[footer]\" />\n      </div>\n    </div>\n  }\n</main>\n", styles: [".angular-sidebar{height:90vh;width:20rem;transition:all .3s ease-in-out;display:flex;flex-flow:column;background-color:var(--ngx-commander-large-sidebar-background);border-right:1px solid #efeff0;font-family:Inter,sans-serif!important;position:relative}.angular-sidebar-header{flex:1;display:flex;align-items:center;padding:0px 1rem}.angular-sidebar-body{display:flex;overflow-x:hidden;position:relative;flex:8}.angular-sidebar-body .dropdown-header{display:flex;align-items:center;margin-bottom:1.2rem;cursor:pointer}.angular-sidebar-body .dropdown-header span{font-size:.9rem;margin-left:.5rem;font-weight:700}.angular-sidebar-body .screen{padding:0px 1.2rem;padding-right:0;width:100%;position:absolute;transition:all .5s;overflow-x:hidden;overflow-y:auto;height:100%;padding:0px 1rem;flex:20}@media (max-width: 575.98px){.angular-sidebar-body .screen{transition:all .3s}}.angular-sidebar-body .screen::-webkit-scrollbar{width:5px!important;cursor:pointer}.angular-sidebar-body .screen::-webkit-scrollbar-track{background:#f4fafe}.angular-sidebar-body .screen::-webkit-scrollbar-thumb{background:#f6f5f6}.angular-sidebar-body .screen::-webkit-scrollbar-thumb:hover{background:#dbd9db}.angular-sidebar-body .screen-1{left:0}.angular-sidebar-body .screen-1.hide-screen{left:-500px}.angular-sidebar-body .screen-2{height:100%;left:300px}.angular-sidebar-body .screen-2.show-screen{left:0}.angular-sidebar-footer{flex:1;display:flex;align-items:center;padding:0px 1rem}.angular-sidebar .sidebar-section-title{color:var(--ngx-commander-large-sidebar-text);font-weight:500;min-width:140px;padding:.5rem 0rem;margin:.7rem 0}.angular-sidebar .sidebar-section-title span{color:#000;font-size:.9rem}.angular-sidebar .sidebar-single-item{display:flex;align-items:center;padding:1rem;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);background-color:var(--ngx-commander-large-sidebar-item-background);border-left:1px solid #efeff0;position:relative}.angular-sidebar .sidebar-single-item:before{content:\"\";width:2px;height:60%;opacity:0;background:#a5a4a8;position:absolute;left:-1px;transition:all .3s ease-in-out}.angular-sidebar .sidebar-single-item:hover:before{opacity:.9}.angular-sidebar .sidebar-single-item:hover .item-title{color:#000;opacity:.8}.angular-sidebar .sidebar-single-item .item-title{-webkit-user-select:none;user-select:none;transition:all .3s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.2rem;font-size:.9rem;color:var(--ngx-commander-large-sidebar-text)}.angular-sidebar .sidebar-single-item.active:hover:before{height:100%}.angular-sidebar .sidebar-single-item.active:before{opacity:1;height:90%;background:var(--ngx-commander-large-sidebar-active-icon)}.angular-sidebar .sidebar-single-item.active .item-title{color:var(--ngx-commander-large-sidebar-active-text);font-weight:700}.angular-sidebar .open-screen-btn{display:flex;align-items:center;padding:1rem;padding-right:0;width:100%;cursor:pointer;color:var(--ngx-commander-large-sidebar-text);background-color:var(--ngx-commander-large-sidebar-item-background);border-left:1px solid #e4e3e6;position:relative}.angular-sidebar .open-screen-btn:before{content:\"\";width:2px;height:60%;opacity:0;background:#a5a4a8;position:absolute;left:-1px;transition:all .3s ease-in-out}.angular-sidebar .open-screen-btn:hover:before{opacity:.9}.angular-sidebar .open-screen-btn:hover .item-title,.angular-sidebar .open-screen-btn:hover .icon{color:#000;opacity:.8}.angular-sidebar .open-screen-btn .icon{transition:all .3s}.angular-sidebar .open-screen-btn .item-title{-webkit-user-select:none;user-select:none;transition:all .3s ease-in-out;width:100%;min-width:150px;opacity:1;margin-left:.2rem;font-size:.9rem;color:var(--ngx-commander-large-sidebar-text)}\n", ":root{--ngx-commander-small-sidebar-background: #f5f7f9;--ngx-commander-small-sidebar-active-text: #215bde;--ngx-commander-small-sidebar-text: black;--ngx-commander-small-sidebar-item-active-background: #e6ebef;--ngx-commander-small-sidebar-item-background: #e6ebef;--ngx-commander-small-sidebar-active-border: #215bde;--ngx-commander-small-sidebar-font: \"Inter\", sans-serif}:root{--ngx-commander-large-sidebar-background: #fff;--ngx-commander-large-sidebar-icon: #9194a1;--ngx-commander-large-sidebar-active-icon: #215bde;--ngx-commander-large-sidebar-active-text: #215bde;--ngx-commander-large-sidebar-text: #9194a1;--ngx-commander-large-sidebar-item-active-background: #f0f4f6;--ngx-commander-large-sidebar-item-background: #fff;--ngx-commander-large-sidebar-font: \"Inter\", sans-serif;--ngx-commander-large-sidebar-menu-btn-color: #215bde}*{font-family:var(--ngx-commander-large-sidebar-font)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.bg-transparent{background-color:transparent!important}.wrapper:not(:empty){width:100%}.wrapper:not(:empty)+.default{display:none}*{font-size:.9rem;box-sizing:border-box;padding:0;margin:0}\n"] }]
        }], propDecorators: { isSidebarClosed: [{
                type: Input
            }], config: [{
                type: Input
            }] } });

class ResponsiveContainerComponent {
    constructor() {
        this.mobileIsSidebarClosed = false;
        this.isMobile = window.innerWidth < 550;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ResponsiveContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ResponsiveContainerComponent, isStandalone: true, selector: "c-responsive-container", inputs: { burgerMenuIcon: "burgerMenuIcon" }, ngImport: i0, template: "<main class=\"CMND-responsive-container\" [class.CMND-hidden]=\"mobileIsSidebarClosed\">\n  <div class=\"CMND-content\">\n    <ng-content />\n  </div>\n  <div class=\"CMND-backdrop\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\"></div>\n</main>\n<button class=\"CMND-mobile-sidebar-btn\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\">\n  @if (burgerMenuIcon) {\n    <ng-icon class=\"icon\" size=\"20\" [name]=\"burgerMenuIcon\" />\n  } @else {\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25px\" class=\"ionicon\" viewBox=\"0 0 512 512\">\n      <path\n        fill=\"none\"\n        stroke=\"currentColor\"\n        stroke-linecap=\"round\"\n        stroke-miterlimit=\"10\"\n        stroke-width=\"32\"\n        d=\"M80 160h352M80 256h352M80 352h352\"\n      />\n    </svg>\n  }\n</button>\n", styles: [".CMND-mobile-sidebar-btn{position:fixed;top:0;left:0;z-index:9999;height:55px;width:55px;background-color:var(--ngx-commander-large-sidebar-menu-btn-color);color:#fff;border:none;display:flex;align-items:center;justify-content:center;display:none;transition:all .3s}.CMND-mobile-sidebar-btn .icon{width:50px}@media (max-width: 575.98px){.CMND-mobile-sidebar-btn{display:block}}.CMND-responsive-container{display:flex;width:100%;justify-content:space-around;flex-flow:row wrap;align-items:stretch;transition:all 1s}@media (max-width: 575.98px){.CMND-responsive-container{position:fixed;top:0;left:0;z-index:99999}.CMND-responsive-container ::ng-deep c-large-sidebar{width:100%}}.CMND-responsive-container.CMND-hidden{visibility:hidden;opacity:0;left:-1000px}.CMND-responsive-container.CMND-hidden .backdrop{opacity:0;background-color:transparent}.CMND-responsive-container .CMND-content{flex:4}.CMND-responsive-container .CMND-backdrop{flex:1;background-color:#00000043;transition:all 1s ease-out}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: NgIconsModule }, { kind: "component", type: i3.NgIcon, selector: "ng-icon", inputs: ["name", "size", "strokeWidth", "color"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ResponsiveContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-responsive-container', standalone: true, imports: [CommonModule, NgIconsModule], template: "<main class=\"CMND-responsive-container\" [class.CMND-hidden]=\"mobileIsSidebarClosed\">\n  <div class=\"CMND-content\">\n    <ng-content />\n  </div>\n  <div class=\"CMND-backdrop\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\"></div>\n</main>\n<button class=\"CMND-mobile-sidebar-btn\" (click)=\"mobileIsSidebarClosed = !mobileIsSidebarClosed\">\n  @if (burgerMenuIcon) {\n    <ng-icon class=\"icon\" size=\"20\" [name]=\"burgerMenuIcon\" />\n  } @else {\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25px\" class=\"ionicon\" viewBox=\"0 0 512 512\">\n      <path\n        fill=\"none\"\n        stroke=\"currentColor\"\n        stroke-linecap=\"round\"\n        stroke-miterlimit=\"10\"\n        stroke-width=\"32\"\n        d=\"M80 160h352M80 256h352M80 352h352\"\n      />\n    </svg>\n  }\n</button>\n", styles: [".CMND-mobile-sidebar-btn{position:fixed;top:0;left:0;z-index:9999;height:55px;width:55px;background-color:var(--ngx-commander-large-sidebar-menu-btn-color);color:#fff;border:none;display:flex;align-items:center;justify-content:center;display:none;transition:all .3s}.CMND-mobile-sidebar-btn .icon{width:50px}@media (max-width: 575.98px){.CMND-mobile-sidebar-btn{display:block}}.CMND-responsive-container{display:flex;width:100%;justify-content:space-around;flex-flow:row wrap;align-items:stretch;transition:all 1s}@media (max-width: 575.98px){.CMND-responsive-container{position:fixed;top:0;left:0;z-index:99999}.CMND-responsive-container ::ng-deep c-large-sidebar{width:100%}}.CMND-responsive-container.CMND-hidden{visibility:hidden;opacity:0;left:-1000px}.CMND-responsive-container.CMND-hidden .backdrop{opacity:0;background-color:transparent}.CMND-responsive-container .CMND-content{flex:4}.CMND-responsive-container .CMND-backdrop{flex:1;background-color:#00000043;transition:all 1s ease-out}\n"] }]
        }], propDecorators: { burgerMenuIcon: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarHeaderComponent, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SidebarHeaderComponent, isStandalone: true, selector: "c-sidebar-header", inputs: { config: "config" }, ngImport: i0, template: "<section class=\"sidebar-header\">\n  @if (config) {\n    <img\n      class=\"main-logo\"\n      [class.small-logo]=\"isSidebarClosed\"\n      [src]=\"isSidebarClosed ? config?.collapsedLogo?.url : config?.logo?.url\"\n      [ngStyle]=\"{\n        height: isSidebarClosed ? config?.collapsedLogo?.height : config['logo']?.height,\n        width: isSidebarClosed ? config?.collapsedLogo?.width : config['logo']?.width\n      }\"\n    />\n  }\n</section>\n", styles: [".sidebar-header{background-color:#fff;height:65px;display:flex;align-items:center;padding:0px 1rem;border-bottom:1px solid #efeff0;width:100%;border-right:1px solid #efeff0}.sidebar-header .main-logo{width:100px;height:auto;transition:all .3s}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-header', standalone: true, imports: [CommonModule], template: "<section class=\"sidebar-header\">\n  @if (config) {\n    <img\n      class=\"main-logo\"\n      [class.small-logo]=\"isSidebarClosed\"\n      [src]=\"isSidebarClosed ? config?.collapsedLogo?.url : config?.logo?.url\"\n      [ngStyle]=\"{\n        height: isSidebarClosed ? config?.collapsedLogo?.height : config['logo']?.height,\n        width: isSidebarClosed ? config?.collapsedLogo?.width : config['logo']?.width\n      }\"\n    />\n  }\n</section>\n", styles: [".sidebar-header{background-color:#fff;height:65px;display:flex;align-items:center;padding:0px 1rem;border-bottom:1px solid #efeff0;width:100%;border-right:1px solid #efeff0}.sidebar-header .main-logo{width:100px;height:auto;transition:all .3s}\n"] }]
        }], ctorParameters: () => [{ type: SidebarService }], propDecorators: { config: [{
                type: Input
            }] } });

class SidebarComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidebarComponent, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
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
        }], ctorParameters: () => [{ type: SidebarService }], propDecorators: { logoConfig: [{
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

var SidebarTheme;
(function (SidebarTheme) {
    SidebarTheme[SidebarTheme["Classic"] = 1] = "Classic";
    SidebarTheme[SidebarTheme["Angular"] = 2] = "Angular";
})(SidebarTheme || (SidebarTheme = {}));

/*
 * Public API Surface of sidebar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ResponsiveContainerComponent, SidebarComponent, SidebarHeaderComponent, SidebarModule, SidebarService, SidebarTheme, SmallSidebarComponent };
//# sourceMappingURL=martinstf-ngx-commander-sidebar.mjs.map
