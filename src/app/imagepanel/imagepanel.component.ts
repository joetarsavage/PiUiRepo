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
      $('#imageH2').bind("DOMSubtreeModified",function(){
        $("#loading").show();
        $("#pic").hide();
        $.ajax({
          url: 'http://54.210.23.150:8080/events/getImageById/' + self.id,
          success:function(data){
            $("#loading").hide();
            $('#pic').show().attr("src","data:image/jpeg;base64," + data);
          }
        });
      });
    });
  }

}
