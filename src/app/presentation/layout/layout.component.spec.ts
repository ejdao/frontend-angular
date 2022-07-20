import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { EdaComponentsModule } from '../../shared/components/components.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('LayoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent, FooterComponent, HeaderComponent, SidebarComponent],
      imports: [AppRoutingModule, EdaComponentsModule],
    }).compileComponents();
  });

  it('should create the layout', () => {
    const fixture = TestBed.createComponent(LayoutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
