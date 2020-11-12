import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-trending-news',
  templateUrl: './trending-news.component.html',
  styleUrls: ['./trending-news.component.less']
})
export class TrendingNewsComponent implements OnInit {

  news = [];
  newsItems = [];
  trending = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
      .subscribe(news => {
        this.newsItems = news;
        this.newsItems.sort((a,b) => b.shares - a.shares);
        for(let i=0; i<4; i++) {
          this.news.push(this.newsItems[i]);
        }
      })
  }
}
