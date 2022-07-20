import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EdaBoxModule } from 'src/app/shared/components/box/box.module';
import { EdaFieldsModule } from 'src/app/shared/fields/fields.module';
import { CardsAndBoxesComponent } from './cards-and-boxes.component';

describe('CardsAndBoxesComponent', () => {
  let component: CardsAndBoxesComponent;
  let fixture: ComponentFixture<CardsAndBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsAndBoxesComponent],
      imports: [EdaBoxModule, MatSnackBarModule, EdaFieldsModule, BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsAndBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
