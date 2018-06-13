import { Component } from '@angular/core';

import {Event} from './event';
import {EventService} from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pi UI';

  events: Event[];

  constructor(private eventService:EventService){}

  ngOnInit() {
    this.getEvents();
  }
  getEvents(): void{
    this.eventService.getEvents().subscribe(events => this.events = events);
  }
}
