import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EdaModalComponent } from 'src/app/shared/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}
  /**
   * alert type confirm created with Material, subscribe
   * to get results.
   * @param title
   * @param content
   * @returns boolean
   */
  confirm(content: string, title: string = '') {
    const dialog = this.dialog.open(EdaModalComponent, {
      width: '250px',
      data: { title: title, content: content, tp: 'confirm' },
    });
    return dialog.afterClosed();
  }
  /**
   * simple alert for notifications created with Material,
   * subscribe to get results.
   * @param title
   * @param content
   */
  alert(content: string, title: string = ''): Observable<boolean> {
    const dialog = this.dialog.open(EdaModalComponent, {
      width: '250px',
      data: { title: title, content: content, tp: 'alert' },
    });
    return dialog.afterClosed();
  }
}
