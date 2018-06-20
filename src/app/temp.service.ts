import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  defaultTempDate = '0';

  private tempDateSource = new BehaviorSubject(this.defaultTempDate);

  currentTempDate = this.tempDateSource.asObservable();

  constructor() { }

  changeTempDate(tempDate: string) {
    this.tempDateSource.next(tempDate);
  }
}
