import { Component, OnInit } from '@angular/core';
import {EVENTS} from '../mock-events';
//import {CONNECTION} from '../connection';

@Component({
  selector: 'app-eventpanel',
  templateUrl: './eventpanel.component.html',
  styleUrls: ['./eventpanel.component.css']
})
export class EventpanelComponent implements OnInit {

  events = EVENTS;

  constructor() { }

  ngOnInit() {
/*
    var mysql = require('mysql');
    alert("before create connect");
    var connection = mysql.createConnection({
      host:"gradtechjnjdev.cxohlepxhfmz.us-east-1.rds.amazonaws.com",
      user:"gradtechjnj_rw",
      password:"gradt3chjnjd3v",
      port: 3306
    });

    alert("after create connect");
    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }

      console.log('Connected to database.');
    });

    connection.end();
    */
  }

}
