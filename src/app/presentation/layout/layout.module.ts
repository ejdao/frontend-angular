import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { EdaComponentsModule } from '../../shared/components/components.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, LayoutComponent],
  imports: [EdaComponentsModule, CommonModule, AppRoutingModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
