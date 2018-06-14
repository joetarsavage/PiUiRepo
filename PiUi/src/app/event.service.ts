import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {TempEvent} from './temp.event';
import {MotionEvent} from './motion.event';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class EventService {

  private tempEventUrl = 'http://34.239.113.101:8080/demo/temps';
  private motionEventUrl = 'http://34.239.113.101:8080/demo/motions';

  //private tempEventUrl = 'http://localhost:8080/demo/temps';
  //private motionEventUrl = 'http://localhost:8080/demo/motions';

  constructor(private http: HttpClient) { }

  getEvents (): Observable<MotionEvent[]> {
    return this.http.get<MotionEvent[]>(this.motionEventUrl);
  }

}
