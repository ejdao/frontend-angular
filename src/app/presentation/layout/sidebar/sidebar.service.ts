import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public toggle(): void {
    const sidebar: any = document.getElementById('sidebar');
    const wrapper: any = document.getElementById('wrapper');
    const toggleButtonOverBody: any = document.getElementById('toggle-button-over-body');
    sidebar?.classList.toggle('active');
    wrapper?.classList.toggle('active');
    toggleButtonOverBody?.classList.toggle('show-toggle-button-over-body');
  }
}
