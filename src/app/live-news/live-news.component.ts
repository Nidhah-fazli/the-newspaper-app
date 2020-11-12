import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-live-news',
  templateUrl: './live-news.component.html',
  styleUrls: ['./live-news.component.less']
})
export class LiveNewsComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/news', ref => ref.limitToLast(3)).valueChanges(); 
  }

  ngOnInit() {
  }

}
