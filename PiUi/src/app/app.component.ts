import { Component } from '@angular/core';
import {Events} from 'ionic-angular';

import {TempEvent} from './temp.event';
import {MotionEvent} from './motion.event';

import {EventService} from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pi UI';

  motionEvents: MotionEvent[];

  constructor(private eventService:EventService){}

  constructor(public events: Events){}


  ngOnInit() {
    this.getEvents();
  }
  getEvents(): void{
    this.eventService.getEvents().subscribe(motionEvents => this.motionEvents = motionEvents);
  }
}
