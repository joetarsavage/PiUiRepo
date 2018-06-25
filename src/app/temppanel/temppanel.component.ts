import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {EventService} from '../event.service';
import {TempEvent} from '../temp.event';
import {interval} from 'rxjs';
import {BaseChartDirective} from 'ng2-charts';


@Component({
  selector: 'app-temppanel',
  templateUrl: './temppanel.component.html',
  styleUrls: ['./temppanel.component.css'],
})
export class TemppanelComponent implements OnInit, AfterViewInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  temps: TempEvent[];

  temperatureData;
  allTempData: number[];
  weekTempData: number[];
  DayTempData: number[];
  tempdateData: String[];
  allDates: String[];
  chartType = 'line';
  xlabels;
 // chartOptions = {'showXLabels': 5};
  chartColor = [{ // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'}];


  constructor(private eventService: EventService) { }

  ngOnInit() {
    // const refreshTimer = interval(10000);
    this.getAllTemps();
    // refreshTimer.subscribe(n => this.getAllTemps());
  }

  ngAfterViewInit() {
  }

  getAllTemps(): void {
    this.eventService.getAllTemps().subscribe(temp => this.tempDataUpdated(temp), err => console.log('Error happened in sub'));
  }
  tempDataUpdated(temp: TempEvent[]): void {
    this.temps = temp;
    this.updateTempGraphData(temp);
  }
  updateTempGraphData(temp: TempEvent[]): void {
    this.allTempData = temp.map(dat =>  dat.temp );
    this.allDates = temp.map(dat => dat.occurredTs);
    this.xlabels = this.allDates.slice();
    this.temperatureData = [{data: this.allTempData.slice(), label: 'Temperature °F'}];
  }
  displayAll() {
    this.chart.labels = this.allDates.slice(0);

    this.temperatureData = [{data: this.allTempData.slice(), label: 'Temperature °F'}];
  }
  displayPastWeek() {
    this.temperatureData = [{data: this.allTempData, label: 'Temperature °F'}];
  }
  displayPastDay() {
    this.chart.labels = this.allDates.slice(0, 10);
    this.temperatureData = [{data: this.allTempData.slice(0, 10), label: 'Temperature °F'}];
  }
}
