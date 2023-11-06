import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent, SidebarModule } from 'projects/sidebar/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
