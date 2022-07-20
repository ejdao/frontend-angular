import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  public opened: boolean = false;

  public hidden: boolean = true;

  constructor(private _cd: ChangeDetectorRef, private _title: Title) {}

  public ngOnInit(): void {
    this._title.setTitle('FrontendAngular | Dashboard');
    if (localStorage.getItem('hideSidebar') !== null) {
      if (localStorage.getItem('hideSidebar') === 'true') {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    }
  }

  public ngAfterViewInit(): void {
    document.getElementById('body')?.classList.add('layout');
  }

  public onHideSidebar(event: boolean): void {
    this.hidden = event;
    this._cd.markForCheck();
  }

  public ngOnDestroy(): void {
    document.getElementById('body')?.classList.remove('layout');
  }
}
