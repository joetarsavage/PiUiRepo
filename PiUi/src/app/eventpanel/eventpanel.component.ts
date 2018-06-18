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
  img: string;

  constructor(private eventService:EventService){}

  ngOnInit() {
    this.getEvents();

    $(document).ready(function(){
      $("#eventsList").on("click",".eventsListItem", function(){
        //alert($(this).children().text() + " clicked");
        $.ajax({
          url: 'http://localhost:8080/demo/getImageById/' + $(this).children().text(),
          success:(data)=>{
            //alert(data);
            this.img = data;
            //alert(this.img);
          }
        });

        //alert(this.eventService.getImageById("140"));
      });
    });
  }
  getEvents(): void{
    this.eventService.getEvents().subscribe(motionEvents => this.motionEvents = motionEvents);
  }

}
