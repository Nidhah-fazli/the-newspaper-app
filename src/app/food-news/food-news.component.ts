import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-food-news',
  templateUrl: './food-news.component.html',
  styleUrls: ['./food-news.component.less']
})
export class FoodNewsComponent implements OnInit {

  news = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
      .subscribe(news => {
        for(let i=0; i<news.length; i++) {
          if(news[i].category === "Food") {
            this.news.push(news[i]);
          }
        }
      })
  }

}
