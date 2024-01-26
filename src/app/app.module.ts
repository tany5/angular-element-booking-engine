import { createCustomElement } from '@angular/elements';
import { NgModule, DoBootstrap, Injector, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NewsComponent],
  imports: [CommonModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [], // originally it has AppComponent
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    const newsWidget = createCustomElement(NewsComponent, {
      injector: this.injector,
    });
    customElements.define('news-widget', newsWidget);
  }
}
