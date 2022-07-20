import { TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EdaMoneyField } from './money-field.component';

describe('EdaMoneyField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaMoneyField],
      imports: [MatFormFieldModule],
    }).compileComponents();
  });

  it('should create the eda-money-field component', () => {
    const fixture = TestBed.createComponent(EdaMoneyField);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
