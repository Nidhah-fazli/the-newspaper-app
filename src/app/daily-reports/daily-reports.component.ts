import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.less']
})
export class DailyReportsComponent implements OnInit {

  @ViewChild('slide') slider: ElementRef;
  @ViewChild('temperature') temperature: ElementRef;

  @Input() selected;
  arrow:string;
  item: Observable<any[]>;
  cityName;

  constructor(private _Activatedroute: ActivatedRoute ,private db: AngularFireDatabase) { 
    this.item = this.db.list('/cities/'+this.cityName).valueChanges();
    this.item.subscribe(data => {
      for(let one of data) {
        if(one.id === 0) {
          this.selected = one;
          console.log("selected");
        }
      }
    });
  }

  ngOnInit() {
    
  }

  

  toLeft() {
    this.slider.nativeElement.style="transform: translateX(0)";
    console.log(this.slider.nativeElement.style);
  }
  toRight() {
    this.slider.nativeElement.style="transform: translateX(-36vw)";
    console.log(this.slider.nativeElement.style);
  }
}
