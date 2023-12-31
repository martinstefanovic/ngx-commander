import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { TooltipContainerComponent, TooltipData, TOOLTIP_DATA } from './tooltip-container/tooltip-container.component';
@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input() appTooltip!: TooltipData;
  @Input() disableTooltip = false;

  private overlayRef: OverlayRef | null = null;

  constructor(
    private element: ElementRef<HTMLElement>,
    private overlay: Overlay,
    private viewContainer: ViewContainerRef
  ) {}

  @HostListener('mouseenter')
  @HostListener('focus')
  showTooltip(): void {
    if (this.overlayRef?.hasAttached() === true) {
      return;
    }

    if (!this.disableTooltip) this.attachTooltip();
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  hideTooltip(): void {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
    }
  }

  ngOnDestroy(): void {
    this.overlayRef?.dispose();
  }

  private attachTooltip(): void {
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

  private getPositionStrategy(): PositionStrategy {
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
}
