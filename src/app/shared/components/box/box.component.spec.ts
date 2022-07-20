import { TestBed } from '@angular/core/testing';
import { EdaBoxComponent } from './box.component';
import { EdaBoxContainerComponent } from './container/container.component';

describe('EdaBoxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaBoxComponent, EdaBoxContainerComponent],
    }).compileComponents();
  });

  it('should create the eda-box component', () => {
    const fixture = TestBed.createComponent(EdaBoxComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
