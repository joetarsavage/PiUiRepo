import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TempEvent} from './temp.event';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  defaultTempId = '2018-06-20 13:18:26';

  private tempIdSource = new BehaviorSubject(this.defaultTempId);

  currentTempId = this.tempIdSource.asObservable();

  constructor() { }

  changeTempId(tempDate: string) {
    this.tempIdSource.next(tempDate);
  }
}
