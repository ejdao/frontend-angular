import { AfterViewInit, ElementRef, Component, ViewChild, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { LANG } from '../fields.common';

@Component({
  selector: 'eda-error',
  templateUrl: './error.component.html',
})
export class EdaError implements AfterViewInit {
  @ViewChild('error') error: ElementRef | undefined;

  @Input() control!: FormControl;

  @Input() start!: FormControl;

  @Input() end!: FormControl;

  @Input() isDateField: boolean = false;

  public hasPatternError: boolean = false;

  public lang: string = LANG;

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.error?.nativeElement.classList.add('show');
    }, 1);
  }

  get required(): ValidationErrors {
    return this.control?.errors?.['required'];
  }

  get pattern(): ValidationErrors {
    return this.control?.errors?.['pattern'];
  }

  get maxlength(): ValidationErrors {
    return this.control?.errors?.['maxlength'];
  }

  get max(): ValidationErrors {
    return this.control?.errors?.['max'];
  }

  get minlength(): ValidationErrors {
    return this.control?.errors?.['minlength'];
  }

  get min(): ValidationErrors {
    return this.control?.errors?.['min'];
  }

  get email(): ValidationErrors {
    return this.control?.errors?.['email'];
  }
}
