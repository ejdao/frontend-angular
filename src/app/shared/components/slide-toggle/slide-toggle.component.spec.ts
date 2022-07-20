import { TestBed } from '@angular/core/testing';
import { EdaSlideToggleComponent } from './slide-toggle.component';

describe('EdaSlideToggleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaSlideToggleComponent],
    }).compileComponents();
  });

  it('should create the eda-slide-toggle component', () => {
    const fixture = TestBed.createComponent(EdaSlideToggleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
