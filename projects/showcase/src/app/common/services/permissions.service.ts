import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import MultiplePermissions from '../models/multiple-permissions.model';

export default interface SinglePermission {
  role: string | number;
  can: string;
  feature: string;
}

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  private allPermisions = new BehaviorSubject<SinglePermission[]>([]);
  private currentUserRole!: string | number;

  constructor() {}

  setRole(role: string | number) {
    this.currentUserRole = role;
  }

  getRole() {
    return this.currentUserRole;
  }

  define(permission: SinglePermission) {
    this.allPermisions.next([...this.allPermisions.value, permission]);
  }

  defineMultiple(multipleDefinitions: MultiplePermissions[]) {
    multipleDefinitions.forEach((definition) => {
      definition.permissions.forEach((permission) => {
        permission.can.forEach((action) => {
          this.allPermisions.next([
            ...this.allPermisions.value,
            {
              role: permission.role,
              can: action,
              feature: definition.feature,
            },
          ]);
        });
      });
    });
  }

  can(action: string, feature: string) {
    if (!this.currentUserRole)
      throw new Error('You need to provide current user role! Use setRole() to provide current role.');

    return this.checkIfPermissionExsist({ role: this.currentUserRole, can: action, feature });
  }

  private checkIfPermissionExsist(permission: SinglePermission): boolean {
    const arrayOfPermissions = this.allPermisions.value;

    return arrayOfPermissions.some(
      (obj) => obj.role === permission.role && obj.can === permission.can && obj.feature === permission.feature
    );
  }
}
