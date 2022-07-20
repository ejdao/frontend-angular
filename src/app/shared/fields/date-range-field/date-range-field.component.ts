import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  EDA_DEFAULT_APPEARANCE_FORM,
  validateEdaFormAppearance,
  validateEdaFormColor,
} from '../fields.common';

@Component({
  selector: 'eda-date-range-field',
  templateUrl: './date-range-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdaDateRangeField implements OnInit {
  @Input() startPlaceholder: string = 'Inicio';

  @Input() endPlaceholder: string = 'Fin';

  @Input() appearance: any = EDA_DEFAULT_APPEARANCE_FORM;

  @Input() color: string = 'primary';

  @Input() label: string = 'label';

  @Input() start!: FormControl;

  @Input() end!: FormControl;

  public required: boolean = false;

  public ngOnInit(): void {
    this.color = validateEdaFormColor(this.color);
    this.appearance = validateEdaFormAppearance(this.appearance);
    const start: any = this.start;
    const end: any = this.end;
    if (start._rawValidators) {
      start._rawValidators.map((r: any) => {
        if (r.name.includes('required')) {
          this.required = true;
        }
      });
    }
    if (end._rawValidators) {
      end._rawValidators.map((r: any) => {
        if (r.name.includes('required')) {
          this.required = true;
        }
      });
    }
  }
}
