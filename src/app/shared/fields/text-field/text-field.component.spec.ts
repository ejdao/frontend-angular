import { TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EdaTextField } from './text-field.component';

describe('EdaTextField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaTextField],
      imports: [MatFormFieldModule],
    }).compileComponents();
  });

  it('should create the eda-text-field component', () => {
    const fixture = TestBed.createComponent(EdaTextField);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
