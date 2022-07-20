import { HostListener, ElementRef, Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[edaButton],[edaIconButton],[edaRaisedButton]',
})
export class EdaButtonDirective implements OnInit {
  /** predefined style : primary | accent | warn */
  @Input() color!: string;

  constructor(private _el: ElementRef) {}

  public ngOnInit(): void {
    let typeButton: string = '';
    if (this._el.nativeElement.attributes.hasOwnProperty('edaiconbutton')) {
      typeButton = 'icon-';
    }
    if (this._el.nativeElement.attributes.hasOwnProperty('edaraisedbutton')) {
      typeButton = 'raised-';
    }
    // Set styles to the element.
    this._el.nativeElement.classList.add(`eda-${typeButton}button`);
    // Set color to the element.
    if (['primary', 'accent', 'warn'].indexOf(this.color) >= 0) {
      this._el.nativeElement.classList.add(`eda-${typeButton}button-${this.color}`);
    }
  }

  @HostListener('click', ['$event']) onClick(event: any) {
    const button = this._el.nativeElement;
    const circle = document.createElement('span');
    circle.classList.add('eda-button-span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('eda-ripple');
    const ripple = button.getElementsByClassName('eda-ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  }
}
