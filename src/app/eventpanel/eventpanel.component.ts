import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

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



  @Output() clicked = new EventEmitter<boolean>();

  constructor(private eventService:EventService){}

  click(bool: boolean){
    this.clicked.emit(bool);
  }
  onRefresh(){
    this.getEvents();
  }

  ngOnInit() {
    const refreshTimer = interval(2000);
    this.getEvents();
    refreshTimer.subscribe(n => this.onRefresh());
  }

  getEvents(): void{
    this.eventService.getEvents().subscribe(motionEvents => this.motionEvents = motionEvents);
  }

}
