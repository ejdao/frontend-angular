import { TestBed } from '@angular/core/testing';
import { EdaButtonModule } from 'src/app/shared/components/button/button.module';
import { EdaIconModule } from 'src/app/shared/components/icon/icon.module';
import { ButtonsComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsComponent],
      imports: [EdaIconModule, EdaButtonModule],
    }).compileComponents();
  });

  it('should create the app-buttons component', () => {
    const fixture = TestBed.createComponent(ButtonsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
