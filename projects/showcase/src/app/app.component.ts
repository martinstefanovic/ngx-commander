import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PermissionsAlertContainerComponent } from './permissions/permissions-popup/permissions-popup.component';
import { PermissionsService } from './common/services/permissions.service';
import { PermissionsDirective } from './common/directives/permissions.directive';
import MultiplePermissions from './common/models/multiple-permissions.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PermissionsAlertContainerComponent, PermissionsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'showcase';
  currentRole = 'user';

  myPermissions: MultiplePermissions[] = [
    {
      feature: 'news',
      permissions: [
        {
          role: 'admin',
          can: ['manage', 'read', 'delete'],
        },
        {
          role: 'user',
          can: ['read'],
        },
      ],
    },
  ];

  constructor(private permissions: PermissionsService) {}

  ngOnInit(): void {
    this.permissions.setRole(this.currentRole);

    this.permissions.defineMultiple(this.myPermissions);

    this.permissions.define({
      role: 'user',
      can: 'share',
      feature: 'news',
    });
  }

  onTriggerAction() {
    alert('Success!');
  }
}
