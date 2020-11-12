import { Component, OnInit } from '@angular/core';
import { MapsService } from './services/maps.service';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor(  private _mapsService: MapsService , private _mainService: MainService) {
  }
  show: boolean = false; 
  mapShow = false;

  ngOnInit() {
    this._mapsService.getShowFullScreen().
      subscribe(data =>
        this.mapShow = data
      );
  }

  toggleShow() {
    this.show = ! this.show;
    this._mainService.setShow(this.show);
  }
}
