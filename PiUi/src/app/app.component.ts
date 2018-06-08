import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pi UI';
  ngOnInit() {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host:"gradtechjnjdev.cxohlepxhfmz.us-east-1.rds.amazonaws.com",
      user:"gradtechjnj_rw",
      password:"gradt3chjnjd3v",
      port:3306
    });

    connection.connect(function(err){
      if(err){
        alert("Error: " + err.stack);
        return;
      }
      alert("Connected");
    });

    connection.end();

  }
}
