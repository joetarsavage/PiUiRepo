import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EventService} from './event.service';

import { AppComponent } from './app.component';
import { ImagepanelComponent } from './imagepanel/imagepanel.component';
import { EventpanelComponent } from './eventpanel/eventpanel.component';
import { TemppanelComponent } from './temppanel/temppanel.component';
import { PairedTempPanelComponent } from './paired-temp-panel/paired-temp-panel.component';
import {ChartsModule} from 'ng2-charts';

import { NgxPaginationModule } from 'ngx-pagination';
import { TwitterpanelComponent } from './twitterpanel/twitterpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    ImagepanelComponent,
    EventpanelComponent,
    TemppanelComponent,
    PairedTempPanelComponent,
    TwitterpanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    NgxPaginationModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
