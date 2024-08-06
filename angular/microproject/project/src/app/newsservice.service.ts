import { Injectable } from '@angular/core';
import { News } from './Model/news';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {
  url: string;
  newsArr: News[];
  news: News;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3004/news";
    this.news = new News();
    this.newsArr = [];
  }

  insertNews(news: News) {
    this.http.post<News>(this.url, news).subscribe();
    return "News Details Added";
  }

  updateNews(news: News) {
    this.http.put<News>(this.url + "/" + news.id, news).subscribe();
    return "News Details updated";
  }

  deleteNews(id: number) {
    this.http.delete<News>(this.url + "/" + id).subscribe();
  }

  findallNews() {
   return this.http.get<News[]>(this.url);
  }


  findNews(id: number) {
    return this.http.get<News>(this.url + "/" + id);
  }

}


