import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { USER_DATA } from '@shared/data';
import { PortalBridgeService } from '@shared/services';
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'pr-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent implements OnInit, OnDestroy {
  private readonly service = inject(PortalBridgeService);
  public readonly displayedColumns = ['name', 'lastName', 'profession'];

  public readonly dataSource = USER_DATA;

  @ViewChild(CdkPortal, { static: true })
  private readonly portalContent!: CdkPortal;

  ngOnInit(): void {
    this.service.setPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent.detach();
  }

  public handleClick(): void {
    console.log('click');
  }
}
