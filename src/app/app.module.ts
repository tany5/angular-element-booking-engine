import { createCustomElement } from '@angular/elements';
import { NgModule, DoBootstrap, Injector, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingModule } from './booking/booking.module';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [AppComponent, NewsComponent],
  imports: [CommonModule, BrowserModule, FormsModule, HttpClientModule, BookingModule],
  providers: [],
  bootstrap: [], // originally it has AppComponent
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    const bookingWidget = createCustomElement(BookingComponent, {
      injector: this.injector,
    });
    customElements.define('booking-widget', bookingWidget);
  }
}
