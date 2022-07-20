import { TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EdaNumberField } from './number-field.component';

describe('EdaNumberField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaNumberField],
      imports: [MatFormFieldModule],
    }).compileComponents();
  });

  it('should create the eda-number-field component', () => {
    const fixture = TestBed.createComponent(EdaNumberField);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
