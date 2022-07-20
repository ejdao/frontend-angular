import { TestBed } from '@angular/core/testing';
import { EdaDividerModule } from '../../divider/divider.module';
import { EdaBoxContainerComponent } from '../container/container.component';
import { EdaBoxFormComponent } from './form.component';

describe('EdaBoxFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaBoxFormComponent, EdaBoxContainerComponent],
      imports: [EdaDividerModule],
    }).compileComponents();
  });

  it('should create the eda-box-form component', () => {
    const fixture = TestBed.createComponent(EdaBoxFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
