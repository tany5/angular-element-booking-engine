import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './UI/button/button.component';
import { ParagraphComponent } from './typography/paragraph/paragraph.component';
import { TitleComponent } from './typography/title/title.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ParagraphComponent,
    TitleComponent,
  ],
  imports: [CommonModule],
  exports: [ButtonComponent, TitleComponent],
})
export class SharedModule {}
