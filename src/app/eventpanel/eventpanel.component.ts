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

  constructor(private eventService: EventService){}

  click(bool: boolean){
    this.clicked.emit(bool);
  }
  onRefresh(){
    this.getEvents();
  }
  //set global variable and reset css on refresh based on id
  ngOnInit() {
    var self = this;

    const refreshTimer = interval(2000);
    this.getEvents();
    refreshTimer.subscribe(n => this.onRefresh());

    $(document).on("click",".eventsListItem",function(){
      $('li').removeClass("selected");
      $(this).addClass("selected");
    });
  }

  getEvents(): void{
    this.eventService.getEvents().subscribe(motionEvents => this.motionEvents = motionEvents);
  }



}
