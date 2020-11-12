import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient) { }

    private newsUrl = 'api/news';
    private allNewsUrl = 'api/allNews';
    private trendingNewsUrl = 'api/trendingNews';  // URL to web api

    getNews (): Observable<any[]> {
      return this.http.get<any[]>(this.newsUrl)
    }

    getTrendingNews(): Observable<any[]> {
      return this.http.get<any[]>(this.trendingNewsUrl);
    }

    getAllNews(): Observable<any[]> {
      return this.http.get<any[]>(this.allNewsUrl);
    }
}
