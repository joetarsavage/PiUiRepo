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
  i= 0;
  currentDate: Date;
  temperatureData;
  allTempData: number[];
  allDates: string[];
  numOneDayBack: number;
  numOneWeekBack: number;
  dateOneWeekBack: Date;
  dateOneDayBack: Date;
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
    console.log(this.temperatureData);
    this.currentDate = new Date();
    this.numOneDayBack = this.numIterationsBack(new Date(new Date().setDate(new Date().getDate()-1)));
    this.numOneWeekBack = this.numIterationsBack(new Date(new Date().setDate(new Date().getDate()-5)));
  }
  displayAll() {
    this.chart.labels = this.allDates.slice();

    this.temperatureData = [{data: this.allTempData.slice(), label: 'Temperature °F'}];
    this.chart.ngOnChanges({});

  }
  displayPastWeek() {
    this.chart.labels = this.allDates.slice(-this.numOneWeekBack);
    this.temperatureData = [{data: this.allTempData.slice(-this.numOneWeekBack), label: 'Temperature °F'}];
    this.chart.ngOnChanges({});
  }
  displayPastDay() {
    this.chart.labels = this.allDates.slice(-this.numOneDayBack);
    this.temperatureData = [{data: this.allTempData.slice(-this.numOneDayBack), label: 'Temperature °F'}];
    this.chart.ngOnChanges({});
  }
  numIterationsBack(date: Date): number {
    for ( this.i = this.allDates.length - 1; new Date(this.allDates[this.i]).getDate() >= date.getDate(); this.i--){
    }
      if (this.i <0) this.i=0;
      return this.i;
  }
}
