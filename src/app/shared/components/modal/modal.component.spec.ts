import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EdaModalComponent } from './modal.component';

describe('EdaModalComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdaModalComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  it('should create the eda-modal component', () => {
    const fixture = TestBed.createComponent(EdaModalComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
