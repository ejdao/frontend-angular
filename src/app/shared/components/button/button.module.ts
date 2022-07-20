import { NgModule } from '@angular/core';
import { EdaButtonDirective } from './button.directive';

@NgModule({
  declarations: [EdaButtonDirective],
  exports: [EdaButtonDirective],
})
export class EdaButtonModule {}
