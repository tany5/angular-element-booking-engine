import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit, OnDestroy {
  public getScreenWidth: any;
  public getScreenHeight: any;
  setImageSrc: string = '';
  constructor() {
    this.getScreenWidth = window.innerWidth;
    this.setImageUrl(this.getScreenWidth);
  }
  ngOnInit(): void {}

  setImageUrl(width: number) {
    if (width > 600) {
      this.setImageSrc = '/assets/images/banner/roldrive-booking-background.svg';
    } else {
      this.setImageSrc =
        `/assets/images/banner/roldrive-booking-background-mobile.webp`;
    }
  }

  ngOnDestroy(): void {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.setImageUrl(this.getScreenWidth);
  }
}
