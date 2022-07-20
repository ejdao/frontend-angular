import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'eda-box-container',
  templateUrl: './container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdaBoxContainerComponent {
  @Input() class: string = '';

  @Input() style: string = '';
}
