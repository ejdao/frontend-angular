import { TestBed } from '@angular/core/testing';
import { EdaCardComponent } from './card.component';

describe('EdaCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaCardComponent],
    }).compileComponents();
  });

  it('should create the eda-card component', () => {
    const fixture = TestBed.createComponent(EdaCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
