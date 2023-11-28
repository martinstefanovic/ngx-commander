import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { PermissionAlertService } from '../services/permission-alert.service';
import { PermissionsService } from '../services/permissions.service';

@Directive({
  selector: '[checkPermission]',
  standalone: true,
})
export class PermissionsDirective implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  @Input({ required: true }) can!: string;

  constructor(
    private elRef: ElementRef,
    private alertService: PermissionAlertService,
    private permissions: PermissionsService
  ) {}

  ngOnInit(): void {
    const el = this.elRef.nativeElement;
    this.subscriptions.push(
      fromEvent(el, 'click', { capture: true }).subscribe((e: any) => {
        if (el && !this.isAvailableToUser()) {
          e.stopPropagation();
          this.showAlert();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  showAlert() {
    this.alertService.isAlertShown.next(true);
  }

  isAvailableToUser(): boolean {
    const [action, feature] = this.can.split(':');
    this.permissions.can(action, feature);

    return this.permissions.can(action, feature);
  }
}
