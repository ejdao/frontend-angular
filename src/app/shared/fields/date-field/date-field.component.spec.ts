import { TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EdaDateField } from './date-field.component';

describe('EdaDateField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaDateField],
      imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
    }).compileComponents();
  });

  it('should create the eda-date-field component', () => {
    const fixture = TestBed.createComponent(EdaDateField);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
