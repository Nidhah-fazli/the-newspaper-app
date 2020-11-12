import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-categorized-news',
  templateUrl: './categorized-news.component.html',
  styleUrls: ['./categorized-news.component.less']
})
export class CategorizedNewsComponent implements OnInit {

  news;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(news => this.news = news)
  }

}
