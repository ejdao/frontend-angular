import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdaSlideToggleModule } from './slide-toggle/slide-toggle.module';
import { EdaExpansionModule } from './expansion/expansion.module';
import { EdaDividerModule } from './divider/divider.module';
import { EdaTooltipModule } from './tooltip/tooltip.module';
import { EdaButtonModule } from './button/button.module';
import { EdaIconModule } from './icon/icon.module';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    EdaSlideToggleModule,
    EdaExpansionModule,
    EdaDividerModule,
    EdaTooltipModule,
    EdaButtonModule,
    EdaIconModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    EdaSlideToggleModule,
    EdaExpansionModule,
    EdaDividerModule,
    EdaTooltipModule,
    EdaButtonModule,
    EdaIconModule,
  ],
})
export class EdaComponentsModule {}
