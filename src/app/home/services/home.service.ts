import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HomeService {

  private arrowSource = new BehaviorSubject(false);
  currentArrow = this.arrowSource.asObservable();

  constructor() { }

  actionArrow(action: boolean) {
    this.arrowSource.next(action);
  }
}
