import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './popup.component.scss',
  template: `<div class="permissions-popup">
    <div class="backdrop"></div>
    <main>
      <img src="../../../assets/lock.jpg" alt="" />
      <h1>{{ title }}</h1>
      <p>{{ bodyText }}</p>
    </main>
  </div>`,
})
export class PopupComponent {
  @Input() title: string = 'Access Restricted';
  @Input() bodyText: string =
    'You dont`t have permission to perform this action. Please contact the owner of switch accounts.';
}
