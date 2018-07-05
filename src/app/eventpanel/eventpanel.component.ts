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
  p: string;

  currentTopEvent: MotionEvent;
  lastTopEvent: MotionEvent;

  @Output() clicked = new EventEmitter<MotionEvent>();

  constructor(private eventService: EventService) {}

  click(bool: MotionEvent) {
    this.clicked.emit(bool);
    $('#alert').hide();
  }
  onRefreshed() {

    this.ringBell();
    $(document).ready(function() {
      const tdSelected = localStorage.getItem('tdSelected');

      if (tdSelected != null) {
        $('td').each(function() {
          if ($(this).text() === tdSelected) {
            $(this).addClass('selected');
            
          }
        });
      }
    });
  }
  // set global variable and reset css on refresh based on id
  ngOnInit() {
    const self = this;

    const refreshTimer = interval(2000);
    this.getEvents();
    refreshTimer.subscribe(n => this.getEvents());

    $('#alert').hide();
    $(document).ready(function() {
      localStorage.removeItem('tdSelected');
      $(document).on('click', '.data', function() {
        $('td').removeClass('selected');
        $(this).addClass('selected');
        localStorage.setItem('tdSelected', $(this).text());
      });
    });
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(
      motionEvents => this.motionEvents = motionEvents,
      err => this.onRefreshed(),
      () => this.onRefreshed());
  }
  ringBell(): void {
    if (this.lastTopEvent == null) {
      this.lastTopEvent = this.motionEvents[0];
      this.currentTopEvent = this.motionEvents[0];
    } else {
      this.currentTopEvent = this.motionEvents[0];
    }
    console.log(this.currentTopEvent.occurredTs);
    if (this.lastTopEvent.id == this.currentTopEvent.id) {
    } else {
      $('#alert').show();
      var audio = new Audio("https://www.soundjay.com/door/sounds/doorbell-7.mp3")
      audio.play();
      this.lastTopEvent = this.currentTopEvent;
    }

  }

}
