import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './UI/banner/banner.component';

@NgModule({
  declarations: [BookingComponent, BannerComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [BookingComponent],
})
export class BookingModule {}
