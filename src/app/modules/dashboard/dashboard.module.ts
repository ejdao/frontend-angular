import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdaComponentsModule } from 'src/app/shared/components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, EdaComponentsModule, DashboardRoutingModule],
})
export class DashboardModule {}
