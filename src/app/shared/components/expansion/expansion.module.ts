import { NgModule } from '@angular/core';
import { EdaExpansionPanelHeaderComponent } from './expansion-panel-header.component';
import { EdaExpansionPanelComponent } from './expansion-panel.component';
import { EdaAccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    EdaExpansionPanelHeaderComponent,
    EdaExpansionPanelComponent,
    EdaAccordionComponent,
  ],
  exports: [EdaExpansionPanelHeaderComponent, EdaExpansionPanelComponent, EdaAccordionComponent],
})
export class EdaExpansionModule {}
