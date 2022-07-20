import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EdaSlideToggleModule } from './slide-toggle/slide-toggle.module';
import { EdaExpansionModule } from './expansion/expansion.module';
import { EdaDividerModule } from './divider/divider.module';
import { EdaTooltipModule } from './tooltip/tooltip.module';
import { EdaButtonModule } from './button/button.module';
import { EdaIconModule } from './icon/icon.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EdaSlideToggleModule,
    EdaExpansionModule,
    EdaDividerModule,
    EdaTooltipModule,
    EdaButtonModule,
    EdaIconModule,
  ],
  exports: [
    EdaSlideToggleModule,
    EdaExpansionModule,
    EdaDividerModule,
    EdaTooltipModule,
    EdaButtonModule,
    EdaIconModule,
  ],
})
export class EdaComponentsModule {}
