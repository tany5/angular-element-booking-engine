import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() width: number = 0;
  @Input() tagLine: string = 'Chauffeur Service Redefined';
  @Input() imageSrc: string = '';

  ASSET_PATH: string = environment.ASSET_PATH;
  constructor() {
    console.log('ASSET_PATH', this.ASSET_PATH);
  }
}
