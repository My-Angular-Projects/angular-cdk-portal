import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}
