import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  articles: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.get().subscribe((data: any) => {
      console.log(data);
      this.articles = data?.articles;
    });
  }
}
