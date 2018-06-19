import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TempEvent} from './temp.event';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  defaultTempId = '0';

  private tempIdSource = new BehaviorSubject(this.defaultTempId);

  currentTempId = this.tempIdSource.asObservable();

  constructor() { }

  changeTempId(tempId: string) {
    console.log('get temp called service');

    this.tempIdSource.next(tempId);
  }
}
