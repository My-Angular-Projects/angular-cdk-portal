import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { ORDERS_DATA } from '@shared/data';
import { CdkPortal } from '@angular/cdk/portal';
import { PortalBridgeService } from '@shared/services';

@Component({
  selector: 'pr-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersPageComponent implements OnInit, OnDestroy {
  private readonly service = inject(PortalBridgeService);
  public readonly displayedColumns = ['item', 'address', 'country'];
  public readonly dataSource = ORDERS_DATA;

  @ViewChild(CdkPortal, { static: true })
  private readonly portalContent!: CdkPortal;

  ngOnInit(): void {
    this.service.setPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent.detach();
  }
}
