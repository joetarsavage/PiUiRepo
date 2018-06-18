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

  @Output() img = new EventEmitter<string>();

  constructor(private eventService:EventService){}

  selectEvent(data: string){
    this.img.emit(data);
  }

  ngOnInit() {
    this.getEvents();

    var self = this;

    $(document).ready(function(){
      $("#eventsList").on("click",".eventsListItem", function(){
        //alert($(this).children().text() + " clicked");
        $.ajax({
          url: 'http://localhost:8080/demo/getImageById/' + $(this).children().text(),
          success:function(data){
            alert("Data: " + data);//shows right data
            self.selectEvent(data);
            alert("Event Fired");//fires, so previous line didnt crash
          }
        });
      });
    });
  }

  getEvents(): void{
    this.eventService.getEvents().subscribe(motionEvents => this.motionEvents = motionEvents);
  }

}
