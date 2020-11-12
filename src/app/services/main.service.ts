import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  show:boolean;
  private showFull = new BehaviorSubject <boolean>(this.show);

  constructor() { }

  setShow(show) {
    this.show = show;
    this.showFull.next(this.show);
  }

  getShow(): Observable<boolean> {
    return this.showFull.asObservable();
  }

}
