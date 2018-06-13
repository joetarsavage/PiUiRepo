import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImagepanelComponent } from './imagepanel/imagepanel.component';
import { EventpanelComponent } from './eventpanel/eventpanel.component';
import { TemppanelComponent } from './temppanel/temppanel.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagepanelComponent,
    EventpanelComponent,
    TemppanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
