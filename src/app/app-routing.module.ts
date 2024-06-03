import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersPageComponent } from '@components/users-page/users-page.component';
import { OrdersPageComponent } from '@components/orders-page/orders-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersPageComponent },
  { path: 'orders', component: OrdersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
