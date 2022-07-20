import { Component } from '@angular/core';

@Component({
  selector: 'eda-icon',
  template: `<span class="material-icons"><ng-content></ng-content></span>`,
})
export class EdaIconComponent {}
