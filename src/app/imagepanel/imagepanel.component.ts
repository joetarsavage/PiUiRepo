import { Component, OnInit, Input } from '@angular/core';
import {EventService} from '../event.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-imagepanel',
  templateUrl: './imagepanel.component.html',
  styleUrls: ['./imagepanel.component.css']
})
export class ImagepanelComponent implements OnInit {

  @Input('selectedEvent') id: number;

  constructor() {}

  ngOnInit() {
    var self = this;
    $(document).ready(function(){
      $('h2').bind("DOMSubtreeModified",function(){
        $.ajax({
          url: 'http://34.239.113.101:8080/demo/getImageById/' + self.id,
          success:function(data){
            $('#pic').attr("src","data:image/jpeg;base64," + data);
          }
        });
      });
    });
  }

}