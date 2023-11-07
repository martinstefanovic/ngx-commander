import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'projects/sidebar/src/public-api';

import { NgIconsModule } from '@ng-icons/core';
import { heroUsers, heroBars4, heroPresentationChartBar } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    NgIconsModule.withIcons({ heroUsers, heroPresentationChartBar }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
