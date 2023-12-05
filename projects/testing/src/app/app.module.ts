import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  CmdSidebarComponent,
  ResponsiveContainerComponent,
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarModule,
  SmallSidebarComponent,
} from 'projects/sidebar/src/public-api';

import { NgIconsModule } from '@ng-icons/core';
import { heroUsers, heroPresentationChartBar } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    SidebarHeaderComponent,
    SidebarComponent,
    SmallSidebarComponent,
    ResponsiveContainerComponent,
    CmdSidebarComponent,
    NgIconsModule.withIcons({ heroUsers, heroPresentationChartBar }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
