import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public userName: string = 'HENRY OF WEAPONS';

  constructor(
    private _sidebarService: SidebarService,
    private _modal: ModalService,
    private _toast: ToastService
  ) {}

  public toggleSidebar(): void {
    this._sidebarService.toggle();
  }

  public onLogout(): void {
    this._modal.confirm('do you really want to log out?', 'sure?').subscribe(value => {
      if (value) {
        this._toast.notification('session ended');
      }
    });
  }

  public changeStyle(): void {
    document.getElementById('body')?.classList.toggle('gcm-theme');
  }
}
