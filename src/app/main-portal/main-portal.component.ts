import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-main-portal',
  templateUrl: './main-portal.component.html',
  styleUrls: ['./main-portal.component.less']
})
export class MainPortalComponent implements OnInit {

  news = [];
  selctedNews = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
      .subscribe(news => {
        // this.news = news;
        // console.log(this.news);
        // for(let i = 0; i < this.news.length; i++) {
        //   console.log("item", this.news[i].importance);
        //   if(this.news[i].importance === "high") {
        //     this.selctedNews.push(this.news[i]);
        //   }
        // }

        for(let i = 0; i < news.length; i++) {
          if(news[i].importance === "high") {
            this.news.push(news[i])
          }
        }

        for(let i=0; i<3; i++) {
          this.selctedNews.push(this.news[i])
        }
      })
  }

  sort(value) {
    for(let i=0; i<this.selctedNews.length; i++) {
      if(this.selctedNews[i] === value) {
        this.selctedNews[i] = this.selctedNews[0];
      }
    }
    this.selctedNews[0] = value;
  }

}
