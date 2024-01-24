import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  apiKey: string = 'e821e0dc2e2b4e018a2c45e5a08f3699';
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`
    );
  }
}
