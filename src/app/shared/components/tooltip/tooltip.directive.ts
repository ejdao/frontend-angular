import { HostListener, ElementRef, Directive, OnDestroy, OnInit, Input } from '@angular/core';

enum positionsE {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

interface DOMRectI {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

@Directive({
  selector: '[edaTooltip]',
})
export class EdaTooltipDirective implements OnInit, OnDestroy {
  /** Message to be displayed in the tooltip. */
  @Input() edaTooltip: string = '';

  /** Position of the tooltip : top | left | bottom | right */
  @Input() edaTooltipPosition: string = 'bottom';

  /** Classes to add to the tooltip. */
  @Input() edaTooltipClass: string = '';

  /** Distance between element and tooltip. */
  @Input() edaTooltipPadding: number = 6;

  /** Add class with 'white-space: pre-line;' to the tooltip if it is true. */
  @Input() edaTooltipPreline: boolean = false;

  private _myPopup: any;

  constructor(private _el: ElementRef) {}

  public ngOnInit(): void {
    this._validateTooltipPosition();
  }

  /** Check if the edaTooltipPosition has a valid value. */
  private _validateTooltipPosition(): void {
    if (['top', 'bottom', 'left', 'right'].indexOf(this.edaTooltipPosition) < 0) {
      this.edaTooltipPosition = 'bottom';
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    // Show tooltip ONLY if has a value.
    if (['', undefined, null].indexOf(this.edaTooltip) < 0) {
      const DOMRect: DOMRectI = this._el.nativeElement.getBoundingClientRect();
      // Default values for pisitionsE.left.
      let x = DOMRect.left;
      let y = DOMRect.top;
      if (this.edaTooltipPosition === positionsE.top) {
        x = DOMRect.left + DOMRect.width / 2;
      }
      if (this.edaTooltipPosition === positionsE.bottom) {
        x = DOMRect.left + DOMRect.width / 2;
        y = DOMRect.top + DOMRect.height + this.edaTooltipPadding;
      }
      if (this.edaTooltipPosition === positionsE.right) {
        x = DOMRect.left + DOMRect.width + this.edaTooltipPadding;
      }
      this._GenerateTooltipPopup(x, y, DOMRect);
    }
  }

  /** Generate the popup that works as tooltip. */
  private _GenerateTooltipPopup(x: number, y: number, DOMRect: DOMRectI) {
    // Generate the popup.
    let popup = document.createElement('span');
    popup.innerHTML = this.edaTooltip;
    // Add classes to the popup.
    const prelineClass: string = this.edaTooltipPreline ? 'eda-tooltip-preline' : '';
    const classes = `eda-tooltip ${prelineClass} ${this.edaTooltipClass} }`;
    popup.setAttribute('class', classes);
    // Add popup to body.
    document.body.appendChild(popup);
    // Positioning the popup.
    if (this.edaTooltipPosition === positionsE.top) {
      popup.style.top = y - popup.clientHeight - this.edaTooltipPadding + 'px';
      popup.style.left = x - popup.clientWidth / 2 + 'px';
    }
    if (this.edaTooltipPosition === positionsE.bottom) {
      popup.style.top = y + 'px';
      popup.style.left = x - popup.clientWidth / 2 + 'px';
    }
    if (this.edaTooltipPosition === positionsE.left) {
      popup.style.top = y - (popup.clientHeight - DOMRect.height) / 2 + 'px';
      popup.style.left = x - popup.clientWidth - this.edaTooltipPadding + 'px';
    }
    if (this.edaTooltipPosition === positionsE.right) {
      popup.style.top = y - (popup.clientHeight - DOMRect.height) / 2 + 'px';
      popup.style.left = x + 'px';
    }
    // Assign popup to a class variable for later use.
    this._myPopup = popup;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Remove tooltip ONLY if it exist.
    if (['', undefined, null].indexOf(this.edaTooltip) < 0) {
      if (this._myPopup) {
        this._myPopup.remove();
      }
    }
  }

  @HostListener('click') onClick() {
    // Remove tooltip ONLY if it exist.
    if (['', undefined, null].indexOf(this.edaTooltip) < 0) {
      setTimeout(() => {
        if (this._myPopup) {
          this._myPopup.remove();
        }
      }, 100);
    }
  }

  public ngOnDestroy(): void {
    // Remove tooltip ONLY if it exist.
    if (this._myPopup && ['', undefined, null].indexOf(this.edaTooltip) < 0) {
      this._myPopup.remove();
    }
  }
}
