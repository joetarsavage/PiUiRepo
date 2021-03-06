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

  private tempEventUrl = 'http://54.210.23.150:8080/events/temps';
  private tempEventByDateUrl = 'http://54.210.23.150:8080/events/getTempByDate/';
  private motionEventUrl = 'http://54.210.23.150:8080/events/motions';

  constructor(private http: HttpClient) { }

  getEvents (): Observable<MotionEvent[]> {
    return this.http.get<MotionEvent[]>(this.motionEventUrl);
  }
  /*getImageById(id: string): Observable<string>{
    return this.http.get<string>(this.imageUrl + id);
  }*/

  getTempByDate(date: string): Observable<TempEvent> {
    return this.http.get<TempEvent>(this.tempEventByDateUrl + date);
  }

  getAllTemps(): Observable<TempEvent[]> {
    return this.http.get<TempEvent[]>(this.tempEventUrl);
  }
}
