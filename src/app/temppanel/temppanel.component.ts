import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {EventService} from '../event.service';
import {TempEvent} from '../temp.event';
import {BaseChartDirective} from 'ng2-charts';
import {TempService} from '../temp.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-temppanel',
  templateUrl: './temppanel.component.html',
  styleUrls: ['./temppanel.component.css'],
})
export class TemppanelComponent implements OnInit, AfterViewInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  temps: TempEvent[];
  i = 0;
  currentDate: Date;
  temperatureData;
  allTempData: number[];
  allHumidityData: string[];
  allDates: string[];
  prettyDates: string[];
  numOneDayBack: number;
  numOneWeekBack: number;
  chartType: any = 'line';
  xlabels;
  chartOptions: any = {'showXLabels': 8};
  chartColor = [{ // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'}];

  temp: TempEvent;
  constructor(private eventService: EventService , private tempService: TempService) { }


  ngOnInit() {
    // const refreshTimer = interval(10000);
    this.getAllTemps();
    this.tempService.currentTempDate.subscribe(tempDate =>  this.getTemp(tempDate));
    // refreshTimer.subscribe(n => this.getAllTemps());
  }
  getTemp(date: string): void {
    if(date!='0')
      this.eventService.getTempByDate(date).subscribe(temp => this.temp = temp , err => console.log('Error happened in sub'));

  }

  ngAfterViewInit() {

  }

  getAllTemps(): void {
    this.eventService.getAllTemps().subscribe(temp => this.tempDataUpdated(temp));
  }
  tempDataUpdated(temp: TempEvent[]): void {
    this.temps = temp;
    this.temps.sort(this.date_sort_asc);

    this.updateTempGraphData(this.temps);
  }
  updateTempGraphData(temp: TempEvent[]): void {
   /* temp.forEach(tEvent =>{
      tEvent.occurredTs = tEvent.occurredTs.slice(5).replace("-","/");
    });*/
    this.allTempData = temp.map(dat =>  dat.temp );
    this.allHumidityData = temp.map(dat => dat.humidity);
    this.allDates = temp.map(dat => dat.occurredTs);

    this.currentDate = new Date();
    this.numOneDayBack = this.numIterationsBack(new Date(new Date().setDate(new Date().getDate() - 1)));
    this.numOneWeekBack = this.numIterationsBack(new Date(new Date().setDate(new Date().getDate() - 5)));
    this.xlabels = this.allDates.slice(this.numOneDayBack);
    this.temperatureData = [{data: this.allTempData.slice(this.numOneDayBack), label: 'Temperature °F'},
      {data: this.allHumidityData.slice(this.numOneDayBack), label: 'Humidity %'}];
    console.log(this.temperatureData);
  }
  displayAll() {
    this.chart.labels = this.allDates.slice();

    this.temperatureData = [{data: this.allTempData.slice(), label: 'Temperature °F'},
      {data: this.allHumidityData.slice(), label: 'Humidity %'}];
    this.chart.ngOnChanges({});

  }
  displayPastWeek() {
    this.chart.labels = this.allDates.slice(this.numOneWeekBack);
    this.temperatureData = [{data: this.allTempData.slice(this.numOneWeekBack), label: 'Temperature °F'},
      {data: this.allHumidityData.slice(this.numOneWeekBack), label: 'Humidity %'}];
    this.chart.ngOnChanges({});
  }
  displayPastDay() {
    this.chart.labels = this.allDates.slice(this.numOneDayBack);
    this.temperatureData = [{data: this.allTempData.slice(this.numOneDayBack), label: 'Temperature °F'},
      {data: this.allHumidityData.slice(this.numOneDayBack), label: 'Humidity %'}];
    this.chart.ngOnChanges({});
  }
  numIterationsBack(date: Date): number {
    if ( new Date(this.allDates[this.allDates.length - 1]).getMonth() === date.getMonth()) {
      for (this.i = this.allDates.length - 1; this.i > 0 && new Date(this.allDates[this.i]).getDate() >= date.getDate() &&
      new Date(this.allDates[this.i]).getMonth() === date.getMonth(); this.i--) {
      }
      this.i += 1;
    } else if ( new Date(this.allDates[this.allDates.length - 1]).getMonth() > date.getMonth()) {
      for (this.i = this.allDates.length - 1; this.i > 0 && new Date(this.allDates[this.i]).getMonth() > date.getMonth(); this.i--) {
      }
      for ( this.i;  new Date(this.allDates[this.i]).getDate() >= date.getDate(); this.i--) {
      }
      this.i += 1;
    }

    if (this.i < 0) {
        this.i = 0 ;
    }
    return this.i;
  }

    date_sort_asc = function (te1, te2): any {

    if (te1.occurredTs > te2.occurredTs) {return 1; }
    if (te1.occurredTs < te2.occurredTs) {return -1; }
    return 0;
  };
}
