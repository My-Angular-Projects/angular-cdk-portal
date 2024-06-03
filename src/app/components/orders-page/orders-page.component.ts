import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ORDERS_DATA } from '@shared/data';

@Component({
  selector: 'pr-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersPageComponent {
  public readonly displayedColumns = ['item', 'address', 'country'];
  public readonly dataSource = ORDERS_DATA;
}
