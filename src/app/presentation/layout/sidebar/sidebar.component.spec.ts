import { TestBed } from '@angular/core/testing';
import { EdaDividerModule } from 'src/app/shared/components/divider/divider.module';
import { EdaExpansionModule } from 'src/app/shared/components/expansion/expansion.module';
import { EdaSlideToggleModule } from 'src/app/shared/components/slide-toggle/slide-toggle.module';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [EdaExpansionModule, EdaSlideToggleModule, EdaDividerModule],
    }).compileComponents();
  });

  it('should create the sidebar', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
