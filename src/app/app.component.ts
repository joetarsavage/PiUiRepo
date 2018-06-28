import { Component } from '@angular/core';
import {TempService} from './temp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GradTech JnJ 2018';
  selectedEvent = -1;
  stockDate = '';
  constructor(private tempService: TempService) {}

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
