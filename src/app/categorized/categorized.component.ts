import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-categorized',
  templateUrl: './categorized.component.html',
  styleUrls: ['./categorized.component.less']
})
export class CategorizedComponent implements OnInit {

  news;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(news => this.news = news)
  }


}
