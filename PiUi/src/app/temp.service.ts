import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TempEvent} from './temp.event';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  defaultTempId = '0';

  private tempSource = new BehaviorSubject(this.defaultTempId);

  currentTemp = this.tempSource.asObservable();

  constructor() { }

  changeTemp(tempId: string) {
    this.tempSource.next(tempId);
  }
}
