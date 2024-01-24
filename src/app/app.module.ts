import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(private injector: Injector) {}
  // ngDoBootstrap(appRef: ApplicationRef) {
  //   const NewsElement = createCustomElement(NewsComponent, {
  //     injector: this.injector,
  //   });
  //   // Register the custom element with the browser.
  //   customElements.define('news-widget', NewsElement);
  // }
}
