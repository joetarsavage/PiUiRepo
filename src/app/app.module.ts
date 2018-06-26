import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EventService} from './event.service';

import { AppComponent } from './app.component';
import { ImagepanelComponent } from './imagepanel/imagepanel.component';
import { EventpanelComponent } from './eventpanel/eventpanel.component';
import { TemppanelComponent } from './temppanel/temppanel.component';
import { PairedTempPanelComponent } from './paired-temp-panel/paired-temp-panel.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ImagepanelComponent,
    EventpanelComponent,
    TemppanelComponent,
    PairedTempPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
