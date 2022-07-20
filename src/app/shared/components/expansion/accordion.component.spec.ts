import { TestBed } from '@angular/core/testing';
import { EdaAccordionComponent } from './accordion.component';

describe('EdaAccordionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaAccordionComponent],
    }).compileComponents();
  });

  it('should create the eda-accordion component', () => {
    const fixture = TestBed.createComponent(EdaAccordionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
