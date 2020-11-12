import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

interface Days {
  day: string;
  date: string;
  data;
}

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.less']
})

export class WeatherCityComponent implements OnInit {

  @ViewChild('slide') slider: ElementRef;
  @ViewChild('slide1') slider1: ElementRef;
  @ViewChildren("li") li: QueryList<any>

  cityName;
  selectedDay;
  lists = [];
  item: Observable<any[]>;
  cities: Observable<any[]>;
  city = [];
  items = [];
  weekDays = [{day:"Today", date:"19"}, {day:"Tuesday", date:"20"},{day:"Wednesday", date:"21"},
  {day:"Thursday", date:"22"}, {day:"Friday", date:"23"}, {day:"Saturday", date:"24"}, 
  {day:"Sunday", date:"25"}];
  weekdays: {day: string, date: string}[];
  selectedOne:object;

  constructor(private _Activatedroute: ActivatedRoute ,private db: AngularFireDatabase) {
   }

  
  ngOnInit() {
    
    this._Activatedroute.params.subscribe(params => { 
      this.cityName = params['city'];
    })
    this.item = this.db.list('/cities/'+this.cityName).valueChanges();
    this.item.subscribe(data => {
      for (let one of data) {
        this.items.push(one);
        if(one.id === 0) {
          this.selectedOne = one;
          this.selectedDay = this.weekDays[0];
        }
      }
    });

    this.cities = this.db.list('/cities').valueChanges();
    this.cities.subscribe(data => {
      for (let one of data) {
        this.city.push(one);
      }
    });

  } 

 
  toLeft() {
    this.slider.nativeElement.style="transform: translateX(0)";
    this.slider1.nativeElement.style="transform: translateX(0)";
  }
  toRight() {
    this.slider.nativeElement.style="transform: translateX(-36vw)";
    this.slider1.nativeElement.style="transform: translateX(-36vw)";
  }

  onSelect(one) {
    this.selectedOne = one;
    let i = 0;
    this.item.subscribe(data => {
      for(let item of data) {
        if (item.id == one.id) {
          break;
        }else {
          i++;
        }
      }
      this.selectedDay = this.weekDays[i];
      // this.lists[i].nativeElement.style.transform = "scale(1.3) translate(0, -5vw)";
    })    
  }
}
