import {ViewChild} from '@angular/core'
import { Component } from '@angular/core';
import {TempService} from './temp.service';
import { EventpanelComponent }  from './eventpanel/eventpanel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(EventpanelComponent)
  private epComponent: EventpanelComponent;

  title = 'GradTech JnJ 2018';
  selectedEvent = -1;
  stockDate = '';
  constructor(private tempService: TempService) {}

  alertClick(){
    this.epComponent.click(this.epComponent.currentTopEvent);
  }
  onClicked(bool) {
    this.selectedEvent = bool.id;
    this.changeTempDate(bool.occurredTs);
    this.stockDate = bool.occurredTs;
  }

  ngOnInit() {

  }

  changeTempDate(date) {

    this.tempService.changeTempDate(date);
  }
}
