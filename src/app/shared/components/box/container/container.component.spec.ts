import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EdaIconModule } from 'src/app/shared/components/icon/icon.module';
import { EdaBoxContainerComponent } from './container.component';

describe('EdaBoxContainerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaBoxContainerComponent],
      imports: [EdaIconModule, MatDialogModule, MatSnackBarModule, MatMenuModule],
    }).compileComponents();
  });

  it('should create the eda-box-container component', () => {
    const fixture = TestBed.createComponent(EdaBoxContainerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
