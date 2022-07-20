import { TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EdaDateRangeField } from './date-range-field.component';

describe('EdaDateRangeField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaDateRangeField],
      imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
    }).compileComponents();
  });

  it('should create the eda-date-range-field component', () => {
    const fixture = TestBed.createComponent(EdaDateRangeField);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
