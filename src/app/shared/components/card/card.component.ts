import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'eda-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdaCardComponent {
  @Input() class: string = '';

  @Input() hasTopLine: boolean = true;

  @Input() topLineClass: string = '';

  @Input() topLineColor: string = '';

  @Input() style: string = '';
}
