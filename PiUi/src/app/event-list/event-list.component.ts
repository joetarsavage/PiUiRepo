import { Component, OnInit } from '@angular/core';
import {EVENTS} from '../mock-events';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events = EVENTS;
  
  constructor() { }

  ngOnInit() {
  }

}
