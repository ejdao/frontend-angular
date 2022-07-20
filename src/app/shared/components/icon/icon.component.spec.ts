import { TestBed } from '@angular/core/testing';
import { EdaIconComponent } from './icon.component';

describe('EdaIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaIconComponent],
    }).compileComponents();
  });

  it('should create the eda-icon component', () => {
    const fixture = TestBed.createComponent(EdaIconComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
