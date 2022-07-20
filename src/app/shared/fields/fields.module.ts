import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EdaDateRangeField } from './date-range-field/date-range-field.component';
import { EdaPasswordField } from './password-field/password-field.component';
import { EdaSelectField } from './select-field/select-field.component';
import { EdaNumberField } from './number-field/number-field.component';
import { EdaMoneyField } from './money-field/money-field.component';
import { EdaDateField } from './date-field/date-field.component';
import { EdaTextField } from './text-field/text-field.component';
import { ErrorEqualsPipe } from './error/error-equals.pipe';
import { ErrorMsgPipe } from './error/error.msg.pipe';
import { EdaError } from './error/error.component';

@NgModule({
  declarations: [
    EdaDateRangeField,
    EdaPasswordField,
    EdaSelectField,
    EdaNumberField,
    EdaMoneyField,
    EdaTextField,
    EdaDateField,
    ErrorEqualsPipe,
    ErrorMsgPipe,
    EdaError,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    EdaDateRangeField,
    EdaPasswordField,
    EdaNumberField,
    EdaSelectField,
    EdaMoneyField,
    EdaTextField,
    EdaDateField,
  ],
})
export class EdaFieldsModule {}
