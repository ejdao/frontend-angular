import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'eda-divider',
  template: `
    <div
      [class]="'eda-divider ' + class + (color === 'light' ? ' eda-divider-light' : '')"
      [style]="style"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdaDividerComponent {
  /** predefined style : light | dark */
  @Input() color: string = 'dark';

  @Input() style: string = '';

  @Input() class: string = '';
}
