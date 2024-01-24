import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DataService],
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
