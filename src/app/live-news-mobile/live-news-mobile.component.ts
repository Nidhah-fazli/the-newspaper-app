import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-live-news-mobile',
  templateUrl: './live-news-mobile.component.html',
  styleUrls: ['./live-news-mobile.component.less']
})
export class LiveNewsMobileComponent implements OnInit {

  items: Observable<any[]>;
  item: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/news', ref => ref.limitToLast(3)).valueChanges();
    this.item = db.object('item').valueChanges();
    this.item.forEach(one => {
      console.log("one", one);
    })
    
  }
  ngOnInit() {
  }

}
