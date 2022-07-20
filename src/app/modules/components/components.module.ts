import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardsAndBoxesComponent } from './cards-and-boxes/cards-and-boxes.component';

@NgModule({
  declarations: [ButtonsComponent, FormsComponent, CardsAndBoxesComponent],
  imports: [SharedModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
