import { Component } from '@angular/core';
import { News } from './Model/news';
import { NewsserviceService } from './newsservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  news: News;
  result: string;
  newsArr: Observable<News[]>;
  flag: boolean;
  findflag: boolean;


  constructor(private service: NewsserviceService) {
    this.news = new News();
    this.result = " ";
    this.newsArr = new Observable<News[]>;
    this.flag = false;
    this.findflag = false;
  }

  insertNews(data: News) {
    this.service.insertNews(data);
  }
  findAll() {
    this.flag = true;
    this.findflag=false;
    this.newsArr = this.service.findallNews();
  }

  delete(id: number) {
    this.service.deleteNews(id);
  }

  find(id: number) {
    this.findflag = true;
    this.flag=false;
    this.service.findNews(id).subscribe((data) => {
      this.news = data;
    });

  }

  update(data:News){
    this.service.updateNews(data);
  }
}


