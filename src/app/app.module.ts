import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UsersPageComponent } from '@components/users-page/users-page.component';
import { OrdersPageComponent } from '@components/orders-page/orders-page.component';
import { HeaderComponent } from '@components/header/header.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { ActionAreaComponent } from '@components/action-area/action-area.component';
import { MaterialsModule } from '@shared/modules';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    OrdersPageComponent,
    HeaderComponent,
    SidebarComponent,
    ActionAreaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialsModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
