import { Component, OnInit } from '@angular/core';

import {TempEvent} from '../temp.event';
import {MotionEvent} from '../motion.event';

import {EventService} from '../event.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-eventpanel',
  templateUrl: './eventpanel.component.html',
  styleUrls: ['./eventpanel.component.css']
})
export class EventpanelComponent implements OnInit {

  motionEvents: MotionEvent[];

  constructor(private eventService:EventService){}

  ngOnInit() {
    this.getEvents();
    $(document).ready(function(){
      alert("");
    });
  }
  getEvents(): void{
    this.eventService.getEvents().subscribe(motionEvents => this.motionEvents = motionEvents);
  }

}
