import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  Optional,
  OnInit,
  Input,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroupDirective,
  FormControl,
  Validators,
  NgControl,
} from '@angular/forms';
import {
  EDA_DEFAULT_APPEARANCE_FORM,
  validateEdaFormAppearance,
  validateEdaFormColor,
} from '../fields.common';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'eda-money-field',
  templateUrl: './money-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdaMoneyField implements OnInit, OnDestroy, ControlValueAccessor {
  private _unsubscribe$ = new Subject<void>();

  @Input() placeholder: string = '';

  @Input() appearance: any = EDA_DEFAULT_APPEARANCE_FORM;

  @Input() color: string = 'primary';

  @Input() label: string = 'label';

  @Input() hasClearButton: boolean = true;

  public onChangeFn = (_: any) => {};

  public onTouchFn = (_: any) => {};

  public isInvalid: boolean = false;

  public isSubmitted: boolean = false;

  public required: boolean = false;

  public disabled: boolean = false;

  public value: string = '';

  constructor(
    @Self() @Optional() private _control: NgControl,
    @Optional() private _formGroupDirective: FormGroupDirective,
    private _cd: ChangeDetectorRef
  ) {
    if (_control) {
      this._control.valueAccessor = this;
    }
    if (_formGroupDirective) {
      _formGroupDirective.ngSubmit.pipe(takeUntil(this._unsubscribe$)).subscribe(() => {
        this.isSubmitted = true;
        _cd.markForCheck();
      });
    }
  }

  public ngOnInit(): void {
    this.color = validateEdaFormColor(this.color);
    this.appearance = validateEdaFormAppearance(this.appearance);
    this.control?.addValidators(Validators.pattern(/^[0-9.,$]/));
    const form: any = this.control;
    if (form._rawValidators) {
      form._rawValidators.map((r: any) => {
        if (r.name.includes('required')) {
          this.required = true;
        }
      });
    }
  }

  public writeValue(value: string): void {
    if (value === null) {
      this.isInvalid = false;
      this._cd.markForCheck();
    }
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchFn = fn;
  }

  public onChange(event: any): void {
    this.value = event.target.value;
    this.onChangeFn(event.target.value);
    if (this.control.touched) {
      this._onValidate();
    }
  }

  public setDisabledState(): void {
    this.disabled = true;
  }

  public onFocus(): void {
    if ([null, undefined, ''].indexOf(this.control.value) < 0) {
      const newVal = this.control.value
        .toString()
        .replace(/,/g, '')
        .replace(/ /g, '')
        .replace('$', '');
      this.value = newVal;
    }
    if ([0, '0'].indexOf(this.control.value) >= 0) {
      this.value = '';
    }
  }

  public onFocusout(): void {
    this.onTouchFn(true);
    if (this.control.valid) {
      if (Number(this.control.value != 0)) {
        if (Number(this.control.value)) {
          if (this.control.value.toString().includes('.')) {
            this.control.setValue(parseFloat(this.control.value).toFixed(2));
          }
          this.value = '$ ' + Intl.NumberFormat('en-US').format(Number(this.control.value));
        } else {
          const Split: string[] = this.control.value.split('.');
          const result: string = Split[0] + '.' + Split[1];
          this.control.setValue(parseFloat(result).toFixed(2));
          this.value = '$ ' + Intl.NumberFormat('en-US').format(Number(result));
        }
      } else {
        this.control.setValue(0);
      }
    }
    this._onValidate();
  }

  public onClearControl(): void {
    this.control.setValue('');
    this.value = '';
  }

  private _onValidate(): void {
    if (this.control.invalid) {
      this.isInvalid = true;
    } else {
      this.isInvalid = false;
    }
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  get control(): FormControl {
    return this._control?.control as FormControl;
  }

  get directive(): FormGroupDirective {
    return this._formGroupDirective as FormGroupDirective;
  }
}
