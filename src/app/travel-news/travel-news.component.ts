import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-travel-news',
  templateUrl: './travel-news.component.html',
  styleUrls: ['./travel-news.component.less']
})
export class TravelNewsComponent implements OnInit {

  news = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
      .subscribe(news => {
        for(let i=0; i<news.length; i++) {
          if(news[i].category === "travel") {
            this.news.push(news[i]);
          }
        }
      })
  }

}
