import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { EdaComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [EdaComponentsModule, CommonModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
