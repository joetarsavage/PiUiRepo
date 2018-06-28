import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import * as $ from 'jquery';

@Component({
  selector: 'app-twitterpanel',
  templateUrl: './twitterpanel.component.html',
  styleUrls: ['./twitterpanel.component.css']
})
export class TwitterpanelComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  times: string [];
  prices: number [];

  selectedPrice: number[];

  stockData;
  xlabels;
  chartType = 'line';
  chartColor = [{ // grey
    backgroundColor: 'rgba(255,0,0,1)',
    borderColor: 'rgba(255,0,0,1)',
    pointBackgroundColor: 'rgba(255,0,0,1)',
    pointBorderColor: 'rgba(255,0,0)',
    pointHoverBackgroundColor: 'rgba(255,0,0)',
    pointHoverBorderColor: 'rgba(255,0,0,0.8)'},
    { // grey
    backgroundColor: 'rgba(75,247,69,0.2)',
    borderColor: 'rgba(75,247,69,1)',
    pointBackgroundColor: 'rgba(75,247,69,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(75,247,69,0.8)'}];


  @Input('stockDate') dateTime: string;
  date: string;
  time: string;



  constructor() { }
  setChart():void{
    this.stockData = [{data: this.selectedPrice,label:"Selected Price"},{data: this.prices,label: 'All Prices'}];
    console.log(this.stockData);
    this.xlabels = this.times;

  }
  ngOnInit() {
    var self = this;
    $(document).ready(function() {
      $('#stockDateH2').bind("DOMSubtreeModified",function(){
        var dateAndTime = self.dateTime.split(' ');
        self.date = dateAndTime[0].replace(/-/g,'');
        var timeArr = dateAndTime[1].split(":");
        self.time = timeArr[0].concat(":",timeArr[1]);
        $.ajax({
          url: 'https://api.iextrading.com/1.0/stock/jnj/chart/date/' + self.date,
          //url: 'http://localhost:8080/demo/getImageById/' + self.id,
          success:function(data){
            var arrTimes = [];
            var arrPrices = [];
            var arrSelectedPrice = [];
            var lastPrice = 0;
            $.each(data, function(i,stock){
              //pushes times to label arr
              arrTimes.push(stock.minute);
              //if time is equal, doesnt push data point
              if(self.time != stock.minute){
                if(stock.average == -1){
                  arrPrices.push(lastPrice);
                }else{
                  arrPrices.push(stock.average);
                  lastPrice = stock.average;
                }
              }else{
                arrPrices.push(null);
              }

              //for second list
              //only pushes data point for equal time
              if(self.time == stock.minute){
                if(stock.average == -1){
                  arrSelectedPrice.push(lastPrice);
                }else{
                  arrSelectedPrice.push(stock.average);
                }
              }else{
                arrSelectedPrice.push(null);
              }
            });

            self.times = arrTimes;
            self.prices = arrPrices;
            self.selectedPrice = arrSelectedPrice;
            self.setChart();
          }
        });

      });
    });
  }
}
