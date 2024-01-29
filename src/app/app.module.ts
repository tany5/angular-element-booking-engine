import { createCustomElement } from '@angular/elements';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingModule } from './booking/booking.module';
import { BookingComponent } from './booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, FormsModule, HttpClientModule, BookingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [], // originally it has AppComponent
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const bookingWidget = createCustomElement(BookingComponent, {
      injector: this.injector,
    });
    customElements.define('booking-widget', bookingWidget);
  }
}
