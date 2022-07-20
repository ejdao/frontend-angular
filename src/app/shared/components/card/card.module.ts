import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdaCardComponent } from './card.component';

@NgModule({
  declarations: [EdaCardComponent],
  imports: [CommonModule],
  exports: [EdaCardComponent],
})
export class EdaCardModule {}
