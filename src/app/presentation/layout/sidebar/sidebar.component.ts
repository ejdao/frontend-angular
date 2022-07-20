import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
  EventEmitter,
  Component,
  Output,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SidebarService } from './sidebar.service';
import { MOBILE_RESOLUTION, SIDENAV, TOP_INFO } from 'src/app/app.navigation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./scss/sidebar.scss', './scss/sidebar.extras.scss', './scss/sidebar.sidenav.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit {
  @Input() opened: boolean = false;

  @Input() hidden: boolean = false;

  @Output() hideSidebarEvent: EventEmitter<boolean> = new EventEmitter();

  public hideSidebar: FormControl = new FormControl(true);

  public sidebarHidden: boolean = false;

  public topInfo = TOP_INFO;

  public sideNav = SIDENAV;

  constructor(private _sidebarService: SidebarService, private _cd: ChangeDetectorRef) {
    this.hideSidebar.valueChanges.subscribe(value => {
      localStorage.setItem('hideSidebar', `${value}`);
      this.hideSidebarEvent.emit(value);
    });
  }

  public ngAfterViewInit(): void {
    this.hideSidebar.setValue(this.hidden);
    if (this.opened) {
      this._sidebarService.toggle();
    }
    const sidebar: any = document.getElementById('sidebar');
    if (sidebar.classList.contains('mid-hidden') && !sidebar.classList.contains('active')) {
      this.sidebarHidden = true;
    }
    this._subscribeToToggleButton();
    this._addRippleEffectToLinks();
  }

  public toggleSidebar(): void {
    this._sidebarService.toggle();
  }

  private _addRippleEffectToLinks(): void {
    const buttons: any = document.getElementById('sidenav')?.getElementsByTagName('button');
    for (const button of buttons) {
      button.addEventListener('click', (event: any) => {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        circle.classList.add('sidenav');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
          ripple.remove();
        }
        button.appendChild(circle);
      });
    }
  }

  private _subscribeToToggleButton(): void {
    const sidebar: any = document.getElementById('sidebar');
    const toggleButton: any = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', () => {
      if (screen.width > MOBILE_RESOLUTION) {
        if (sidebar.classList.contains('active')) {
          this.sidebarHidden = false;
        } else {
          this.sidebarHidden = true;
        }
        this._cd.markForCheck();
      }
    });
  }
}
