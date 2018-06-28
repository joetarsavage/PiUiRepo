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
    backgroundColor: 'rgba(75,247,69,0.2)',
    borderColor: 'rgba(75,247,69,1)',
    pointBackgroundColor: 'rgba(75,247,69,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(75,247,69,0.8)'},
    { // grey
      backgroundColor: 'rgba(255,0,0,0.2)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(255,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,0,0,0.8)'}];


  @Input('stockDate') dateTime: string;
  date: string;
  time: string;



  constructor() { }
  setChart():void{
    this.stockData = [{data: this.prices,label: 'Price'},{data: this.selectedPrice,label:"sup"}];
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
            var lastPrice = 0;
            $.each(data, function(i,stock){
              arrTimes.push(stock.minute);
              if(stock.average == -1){
                arrPrices.push(lastPrice);
              }else{
                arrPrices.push(stock.average);
                lastPrice = stock.average;
              }
              if(self.time == stock.minute){
                if(stock.average == -1){
                  self.selectedPrice = [lastPrice];
                }else{
                  self.selectedPrice = [stock.average];
                }
              }
            });

            self.times = arrTimes;
            self.prices = arrPrices;
            self.setChart();
          }
        });

      });
    });
  }
}
