import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pr-action-area',
  templateUrl: './action-area.component.html',
  styleUrl: './action-area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionAreaComponent {}
