import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  ngOnInit() {
    this.getEvents();
    var self = this;
    $(document).ready(function(){
      
    });
  }

  getEvents(): void{
    this.eventService.getEvents().subscribe(motionEvents => this.motionEvents = motionEvents);
  }

}
