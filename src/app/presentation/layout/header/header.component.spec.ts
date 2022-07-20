import { TestBed } from '@angular/core/testing';
import { EdaIconModule } from 'src/app/shared/components/icon/icon.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [EdaIconModule],
    }).compileComponents();
  });

  it('should create the header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
