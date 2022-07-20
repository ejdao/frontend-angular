import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private _sidebarService: SidebarService) {}

  public toggleSidebar(): void {
    this._sidebarService.toggle();
  }
}
