import { ChangeDetectionStrategy, Component, Inject, InjectionToken, TemplateRef } from '@angular/core';

export type TooltipData = string | TemplateRef<void>;
export const TOOLTIP_DATA = new InjectionToken<TooltipData>('Data to display in tooltip');

@Component({
  selector: 'app-tooltip-container',
  template: `<ng-container *ngIf="asString as string">
      {{ string }}
    </ng-container>

    <ng-container *ngIf="asTemplate as template">
      <ng-template [ngTemplateOutlet]="template"></ng-template>
    </ng-container> `,
  styles: [
    `
      :host {
        display: block;
        max-width: 12rem;
        padding: 0.5rem;
        font-size: 0.8rem;
        color: #fff;
        background: #000;
        border-radius: 0.25rem;
        box-sizing: border-box;
        margin-left: 0.3rem;
      }

      :host-context(.top) {
        margin-bottom: 0.5rem;
      }

      :host-context(.bottom) {
        margin-top: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipContainerComponent {
  get asString(): string | false {
    return typeof this.tooltipData === 'string' ? this.tooltipData : false;
  }

  get asTemplate(): TemplateRef<void> | false {
    return this.tooltipData instanceof TemplateRef ? this.tooltipData : false;
  }

  constructor(@Inject(TOOLTIP_DATA) public tooltipData: TooltipData) {}
}
