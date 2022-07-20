import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Component,
  ViewChild,
  Optional,
  OnInit,
  Input,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'eda-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdaSlideToggleComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') inputViewChild: ElementRef | undefined;

  @Input() color: string = 'primary';

  public onChangeFn = (_: any) => {};

  public onTouchFn = (_: any) => {};

  public disabled: boolean = false;

  public value: boolean = false;

  constructor(@Self() @Optional() private _control: NgControl, private _cd: ChangeDetectorRef) {
    if (_control) {
      this._control.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
    if (['primary', 'accent', 'warn'].indexOf(this.color) < 0) {
      this.color = 'primary';
    }
    if (this.control.disabled) {
      this.disabled = true;
    }
  }

  public writeValue(): void {
    if (this.control?.value === true) {
      this.value = true;
      this.onChangeFn(true);
    } else {
      this.value = false;
      this.onChangeFn(false);
    }
    this._cd.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchFn = fn;
  }

  public setDisabledState(): void {
    this.disabled = true;
  }

  public onChange(): void {
    if (this.control.value) {
      this.value = false;
      this.onChangeFn(false);
    } else {
      this.value = true;
      this.onChangeFn(true);
    }
  }

  public clickOnToggleContent(): void {
    this.inputViewChild?.nativeElement.click();
  }

  get control(): FormControl {
    return this._control.control as FormControl;
  }
}
