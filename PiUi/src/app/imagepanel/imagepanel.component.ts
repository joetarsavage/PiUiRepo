import { Component, OnInit } from '@angular/core';
import {EVENTS} from '../mock-events';

@Component({
  selector: 'app-imagepanel',
  templateUrl: './imagepanel.component.html',
  styleUrls: ['./imagepanel.component.css']
})
export class ImagepanelComponent implements OnInit {

  events = EVENTS;

  constructor() { }

  ngOnInit() {
  }

}
