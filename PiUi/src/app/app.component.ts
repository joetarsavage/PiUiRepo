import { Component } from '@angular/core';
import {MotionEvent} from '../motion.event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pi UI';
  selectedEvent = -1;
  constructor(){}

  onClicked(bool){
    this.selectedEvent = bool.id;
  }

  ngOnInit() {

  }
}
