import { TestBed } from '@angular/core/testing';
import { EdaExpansionPanelHeaderComponent } from './expansion-panel-header.component';

describe('EdaExpansionPanelHeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaExpansionPanelHeaderComponent],
    }).compileComponents();
  });

  it('should create the eda-expansion-panel-header component', () => {
    const fixture = TestBed.createComponent(EdaExpansionPanelHeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
