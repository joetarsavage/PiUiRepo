import { Component, OnInit } from '@angular/core';
import {TempService} from '../temp.service';
import {EventService} from '../event.service';
import {TempEvent} from '../temp.event';

@Component({
  selector: 'app-temppanel',
  templateUrl: './temppanel.component.html',
  styleUrls: ['./temppanel.component.css']
})
export class TemppanelComponent implements OnInit {

  temp: TempEvent;
  constructor(private eventService: EventService , private tempService: TempService) { }

  ngOnInit() {
    this.tempService.currentTemp.subscribe(tempDate =>  this.getTemp(tempDate));
  }

  getTemp(date: string): void {

    this.eventService.getTempByDate(date).subscribe(temp => this.temp = temp , err => console.log('Error happened in sub'));
  }
}
