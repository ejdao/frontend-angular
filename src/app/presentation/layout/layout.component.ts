import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  public opened: boolean = false;
  public hidden: boolean = true;
  constructor(private _cd: ChangeDetectorRef) {}

  public ngOnInit(): void {
    if (localStorage.getItem('hideSidebar') !== null) {
      if (localStorage.getItem('hideSidebar') === 'true') {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    }
  }
  public onHideSidebar(event: boolean): void {
    this.hidden = event;
    this._cd.markForCheck();
  }
}
