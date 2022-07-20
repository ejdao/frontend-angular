import { TestBed } from '@angular/core/testing';
import { EdaExpansionPanelComponent } from './expansion-panel.component';

describe('EdaExpansionPanelComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaExpansionPanelComponent],
    }).compileComponents();
  });

  it('should create the eda-expansion-panel component', () => {
    const fixture = TestBed.createComponent(EdaExpansionPanelComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
