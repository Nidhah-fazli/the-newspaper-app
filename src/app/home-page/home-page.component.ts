import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  show;

  constructor(private _mainService: MainService) {}

  ngOnInit() {
    this._mainService.getShow().subscribe(data =>
      this.show = data
      );
  }

  

  
}
