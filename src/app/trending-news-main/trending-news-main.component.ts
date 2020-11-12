import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-trending-news-main',
  templateUrl: './trending-news-main.component.html',
  styleUrls: ['./trending-news-main.component.less']
})
export class TrendingNewsMainComponent implements OnInit, AfterViewInit {

  @ViewChild('content') content :ElementRef ;
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

  ngAfterViewInit() {
    console.log("content:", this.content.nativeElement.querySelector('li'));
  }

}
