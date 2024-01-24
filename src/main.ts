import {createApplication} from '@angular/platform-browser';
import {appConfig} from './main.config';
import {createCustomElement} from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { NewsComponent } from './app/news/news.component';

(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  // Define Web Components
  const newsWidget = createCustomElement(NewsComponent, {injector: app.injector});
  customElements.define('news-widget', newsWidget);
})();