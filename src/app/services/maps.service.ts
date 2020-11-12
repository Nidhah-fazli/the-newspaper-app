import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  show:boolean;
  private showFull = new BehaviorSubject <boolean>(this.show);

  constructor() { }

  setShowFullScreen(show) {
    this.show = show;
    this.showFull.next(this.show);
  }

  getShowFullScreen(): Observable<boolean> {
    return this.showFull.asObservable();
  }

}
