import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { USER_DATA } from '@shared/data';
import { PortalBridgeService } from '@shared/services';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'pr-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent implements OnInit {
  private readonly service = inject(PortalBridgeService);
  private readonly viewContainerRef = inject(ViewContainerRef);

  public readonly displayedColumns = ['name', 'lastName', 'profession'];
  public readonly dataSource = USER_DATA;

  @ViewChild('portalContent', { static: true })
  portalContent!: TemplateRef<unknown>;

  ngOnInit(): void {
    const portal = new TemplatePortal(
      this.portalContent,
      this.viewContainerRef,
    );
    this.service.setPortal(portal);
  }
}
