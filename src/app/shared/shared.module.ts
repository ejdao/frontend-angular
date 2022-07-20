import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdaComponentsModule } from './components/components.module';
import { EdaFieldsModule } from './fields/fields.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [EdaComponentsModule, EdaFieldsModule],
  exports: [CommonModule, EdaComponentsModule, EdaFieldsModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
