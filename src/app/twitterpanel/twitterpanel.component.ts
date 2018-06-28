import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-twitterpanel',
  templateUrl: './twitterpanel.component.html',
  styleUrls: ['./twitterpanel.component.css']
})
export class TwitterpanelComponent implements OnInit, AfterViewInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  times: [];
  prices: [];

  @Input('stockDate') dateTime: string;
  date: string;
  time: string;



  constructor() { }

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
            });
            self.times = arrTimes;
            self.prices = arrPrices;
          }
        });
      });
    });
  }
}
