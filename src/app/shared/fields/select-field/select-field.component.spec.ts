import { TestBed } from '@angular/core/testing';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EdaSelectField } from './select-field.component';

describe('EdaSelectField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaSelectField],
      imports: [MatFormFieldModule, MatOptionModule, MatSelectModule],
    }).compileComponents();
  });

  it('should create the eda-select-field component', () => {
    const fixture = TestBed.createComponent(EdaSelectField);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
