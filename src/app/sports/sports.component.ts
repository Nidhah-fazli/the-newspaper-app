import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.less']
})
export class SportsComponent implements OnInit {

  news = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
      .subscribe(news => {
        for(let i=0; i<news.length; i++) {
          if(news[i].category === "sports") {
            this.news.push(news[i]);
          }
        }
      })
  }

}
