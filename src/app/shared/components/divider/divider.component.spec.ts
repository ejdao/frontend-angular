import { TestBed } from '@angular/core/testing';
import { EdaDividerComponent } from './divider.component';

describe('EdaDividerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaDividerComponent],
    }).compileComponents();
  });

  it('should create the eda-divider component', () => {
    const fixture = TestBed.createComponent(EdaDividerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
