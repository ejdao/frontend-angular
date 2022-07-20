import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EdaDividerModule } from '../divider/divider.module';
import { EdaButtonModule } from '../button/button.module';
import { EdaBoxContainerComponent } from './container/container.component';
import { EdaBoxFormComponent } from './form/form.component';
import { EdaBoxComponent } from './box.component';

@NgModule({
  declarations: [EdaBoxContainerComponent, EdaBoxFormComponent, EdaBoxComponent],
  imports: [
    MatProgressBarModule,
    ReactiveFormsModule,
    EdaDividerModule,
    EdaButtonModule,
    CommonModule,
  ],
  exports: [EdaBoxContainerComponent, EdaBoxFormComponent, EdaBoxComponent],
})
export class EdaBoxModule {}
