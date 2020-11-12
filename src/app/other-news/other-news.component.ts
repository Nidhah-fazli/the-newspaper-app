import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-other-news',
  templateUrl: './other-news.component.html',
  styleUrls: ['./other-news.component.less']
})
export class OtherNewsComponent implements OnInit {
  news = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
      .subscribe(news => {
        for(let i=0; i<news.length; i++) {
          if(news[i].category === "other") {
            this.news.push(news[i]);
          }
        }
      })
  }
}
