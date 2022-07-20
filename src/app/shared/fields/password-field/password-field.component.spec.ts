import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { EdaPasswordField } from './password-field.component';

describe('EdaPasswordField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaPasswordField],
      imports: [MatFormFieldModule, MatIconModule, MatButtonModule],
    }).compileComponents();
  });

  it('should create the eda-password-field component', () => {
    const fixture = TestBed.createComponent(EdaPasswordField);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
