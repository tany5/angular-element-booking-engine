import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit, OnDestroy {
  @Input() tagLine: string = '';
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  public getScreenWidth: number;
  setImageSrc: string = '';
  constructor() {
    this.getScreenWidth = window.innerWidth;
    this.setImageUrl(this.getScreenWidth);
  }
  ngOnInit(): void {}

  setImageUrl(width: number) {
    if (width > 600) {
      this.setImageSrc = `${environment.ASSET_PATH}/assets/images/banner/roldrive-booking-background.svg`;
    } else {
      this.setImageSrc = `${environment.ASSET_PATH}/assets/images/banner/roldrive-booking-background-mobile.webp`;
    }
  }

  searchBooking() {
    console.log('searching');
    this.onSearch.emit('searching');
  }

  ngOnDestroy(): void {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.setImageUrl(this.getScreenWidth);
  }
}
