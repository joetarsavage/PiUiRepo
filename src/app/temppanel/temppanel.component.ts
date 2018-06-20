import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {TempEvent} from '../temp.event';

@Component({
  selector: 'app-temppanel',
  templateUrl: './temppanel.component.html',
  styleUrls: ['./temppanel.component.css']
})
export class TemppanelComponent implements OnInit {

  temps: TempEvent[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getAllTemps();
  }


  getAllTemps(): void{
    this.eventService.getAllTemps().subscribe(temp => this.temps = temp , err => console.log('Error happened in sub'));  }
}
