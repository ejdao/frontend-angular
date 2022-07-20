import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ButtonsComponent, FormsComponent],
  imports: [SharedModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
