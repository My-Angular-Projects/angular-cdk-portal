import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortalBridgeService } from '@shared/services';

@Component({
  selector: 'pr-action-area',
  templateUrl: './action-area.component.html',
  styleUrl: './action-area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionAreaComponent {
  public readonly portal$ = inject(PortalBridgeService).portal$;
}
