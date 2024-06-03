import { ChangeDetectionStrategy, Component } from '@angular/core';

import { USER_DATA } from '@shared/data';

@Component({
  selector: 'pr-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent {
  public readonly displayedColumns = ['name', 'lastName', 'profession'];
  public readonly dataSource = USER_DATA;
}
