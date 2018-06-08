import { Component, OnInit } from '@angular/core';
import {EVENTS} from '../mock-events';

@Component({
  selector: 'app-eventpanel',
  templateUrl: './eventpanel.component.html',
  styleUrls: ['./eventpanel.component.css']
})
export class EventpanelComponent implements OnInit {

  events = EVENTS;

  constructor() { }

  ngOnInit() {

  }

}
