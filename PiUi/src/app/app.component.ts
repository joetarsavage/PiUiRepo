import { Component } from '@angular/core';
import {MotionEvent} from './motion.event';
import {TempService} from './temp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pi UI';
  selectedEvent = -1;
  constructor(private tempService: TempService){}

  onClicked(bool){
    this.selectedEvent = bool.id;
    this.changeTemp(bool.occurredTs.toString());
  }

  ngOnInit() {

  }

  changeTemp(date) {
    this.tempService.changeTemp(date);
  }
}
