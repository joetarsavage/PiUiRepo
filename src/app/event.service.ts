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
  private tempEventByDateUrl = 'http://34.239.113.101:8080/demo/getTempByDate/';
  private motionEventUrl = 'http://34.239.113.101:8080/demo/motions';
  //private imageUrl = 'http://34.239.113.101:8080/demo/getImageById/';

  //private tempEventUrl = 'http://localhost:8080/demo/temps';
  //private motionEventUrl = 'http://localhost:8080/demo/motions';
  //private imageUrl = 'http://localhost:8080/demo/getImageById/';

  constructor(private http: HttpClient) { }

  getEvents (): Observable<MotionEvent[]> {
    return this.http.get<MotionEvent[]>(this.motionEventUrl);
  }
  /*getImageById(id: string): Observable<string>{
    return this.http.get<string>(this.imageUrl + id);
  }*/

  getTempByDate(date: string): Observable<TempEvent> {
    console.log('get temp http called');

    return this.http.get<TempEvent>(this.tempEventByDateUrl + date);

  }

  getAllTemps(): Observable<TempEvent[]>{
    return this.http.get<TempEvent[]>(this.tempEventUrl);
  }
}