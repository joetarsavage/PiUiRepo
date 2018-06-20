import { Component, OnInit } from '@angular/core';
import {TempService} from '../temp.service';
import {EventService} from '../event.service';
import {TempEvent} from '../temp.event';

@Component({
  selector: 'app-paired-temp-panel',
  templateUrl: './paired-temp-panel.component.html',
  styleUrls: ['./paired-temp-panel.component.css']
})
export class PairedTempPanelComponent implements OnInit {



  temp: TempEvent;
  constructor(private eventService: EventService , private tempService: TempService) { }

  ngOnInit() {
    this.tempService.currentTempId.subscribe(tempDate =>  this.getTemp(tempDate));
  }

  getTemp(date: string): void {
    this.eventService.getTempByDate(date).subscribe(temp => this.temp = temp , err => console.log('Error happened in sub'));

  }


}
