import {
  AfterViewInit,
  Component,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { Subscription } from 'rxjs';
import { PermissionAlertService } from '../../common/services/permission-alert.service';

@Component({
  selector: 'c-permissions-alert',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class PermissionsAlertContainerComponent implements AfterViewInit, OnDestroy {
  /**
   * Alert title
   */
  @Input() title!: string;
  /**
   * Alert body text
   */
  @Input() bodyText!: string;
  /**
   * Container for permission alert
   */
  popupContainer!: ComponentRef<PopupComponent>;
  /**
   * Document listener for closing alert when user click
   */
  documentClickListener: any;
  /**
   * Subscriptions
   */
  subscriptions: Subscription[] = [];

  constructor(
    private alertService: PermissionAlertService,
    private viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.subscribeToAlertService();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  subscribeToAlertService() {
    this.subscriptions.push(
      this.alertService.isAlertShown.subscribe((isAlertShown) => {
        if (isAlertShown) {
          this.onShowPopup();
        }
      })
    );
  }

  onRemovePopup() {
    this.viewContainerRef.clear();
    this.popupContainer.destroy();
  }

  onShowPopup() {
    this.popupContainer = this.viewContainerRef.createComponent(PopupComponent);
    this.subscribeToAlertDestory();

    const domElem = (this.popupContainer.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this.document.body, domElem);

    setTimeout(() => {
      this.bindDocumentClickListener();
    });
  }

  subscribeToAlertDestory() {
    this.popupContainer.onDestroy((res: any) => {
      this.unbindDocumentClickListener();
    });
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget: any = this.document;

      this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
        console.log('ISKLJUCI POPUP', event);
        this.onRemovePopup();
      });
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
}
