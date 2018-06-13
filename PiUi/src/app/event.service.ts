import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {Event} from './event';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class EventService {

  private eventUrl = 'http://localhost:8080/demo/all';

  constructor(private http: HttpClient) { }

  getEvents (): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl);
  }

}
