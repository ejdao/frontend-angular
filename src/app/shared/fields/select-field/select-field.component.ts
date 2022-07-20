import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  Component,
  Optional,
  Input,
  Self,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NgControl } from '@angular/forms';
import {
  EDA_DEFAULT_APPEARANCE_FORM,
  validateEdaFormAppearance,
  validateEdaFormColor,
} from '../fields.common';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'eda-select-field',
  templateUrl: './select-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdaSelectField implements OnInit, OnDestroy, ControlValueAccessor {
  private _unsubscribe$ = new Subject<void>();

  @Input() placeholder: string = '';

  @Input() appearance: any = EDA_DEFAULT_APPEARANCE_FORM;

  @Input() color: string = 'primary';

  @Input() label: string = 'label';

  @Input() option: string = 'option';

  @Input() value: string = 'value';

  @Input() suggestions: any = [];

  public onChangeFn = (_: any) => {};

  public onTouchFn = (_: any) => {};

  public isInvalid: boolean = false;

  public isSubmitted: boolean = false;

  public disabled: boolean = false;

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
  }

  public writeValue(value: string): void {
    if (value === null) {
      this.isInvalid = false;
      this._cd.markForCheck();
    }
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchFn = fn;
  }

  public onChange(event: any): void {
    this.onChangeFn(event.target.value);
    if (this.control.touched) {
      this._onValidate();
    }
  }

  public setDisabledState(): void {
    this.disabled = true;
  }

  public onFocusOut() {
    this._onValidate();
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
