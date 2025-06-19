import {
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

import * as _ from 'lodash';
import { DOCUMENT } from '@angular/common';

const GAP_SIZE = 8;
const BORDER_SIZE = 2;
const WINDOW_COUNT = 3;

@Directive({
  selector: '[appBaseTrainCarriage]',
  standalone: true,
})
export class BaseTrainCarriageDirective implements OnInit {
  
  isHead = input<boolean>(false);
  carriageBackground = input<string | null>(null);

  private elementRef = inject(ElementRef);
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);

  constructor() {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.classList.add('base-train-carriage');
    
    if (this.isHead()) {
      this.installChimney(element);
    }
    this.installWindow(element);
    this.installWheel(element);

    if (this.carriageBackground()){
      this.renderer.setStyle(element, 'background', this.carriageBackground());
    }
  }

  private appendStyles (element: HTMLElement, style: Partial<CSSStyleDeclaration>) {
    for (const key in style) {
      this.renderer.setStyle(element, key, _.get(style, key));
    }
  }

  private installWindow(container: HTMLElement) {
    // 車廂的寬度
    const width = container.offsetWidth;
    // 總體的間距寬度 => 目前窗戶與車體寬度為N, 窗戶之間的寬度為2N
    const totalGapWidth = GAP_SIZE * (1 + (WINDOW_COUNT - 1) * 2 + 1);
    // 所有窗戶的邊界寬度總和
    const totalBorderWidth = 2 * BORDER_SIZE * WINDOW_COUNT;
    // 車廂寬度扣除以上兩個寬度除以窗戶的數量後, 即是窗戶的寬度(整數)
    const itemWidth = Math.floor((width - totalGapWidth - totalBorderWidth) / WINDOW_COUNT);

    Array(WINDOW_COUNT).fill(undefined).forEach((_: undefined, index: number) => {
      // 窗戶的定位: 距離車體的距離 + (窗戶寬度 + 窗距 + 窗戶邊界) * 當前的index
      const left = GAP_SIZE + (itemWidth + 2 * GAP_SIZE + 2 * BORDER_SIZE) * index;
      const window = this.generateWindow({ left: `${left}px`, width: `${itemWidth}px`, height: `${itemWidth}px`});
      container.appendChild(window);
    })
  }

  private generateWindow(style: Partial<CSSStyleDeclaration>) {
    const window = this.document.createElement('div');
    this.renderer.addClass(window, 'window');
    this.appendStyles(window, style)
    return window;
  }

  private installWheel(container: HTMLElement) {
    const leftWheel = this.generateWheel('left');
    const rightWheel = this.generateWheel('right');
    container.appendChild(leftWheel);
    container.appendChild(rightWheel);
  }

  private generateWheel(className: string) {
    const wheel = this.document.createElement('div');
    this.renderer.addClass(wheel, `wheel`)
    this.renderer.addClass(wheel, className);
    return wheel; 
  }

  private installChimney(container: HTMLElement) {
    const chimney = this.document.createElement('div');
    this.renderer.addClass(chimney, 'chimney');
    container.appendChild(chimney);
    container.appendChild(this.generateSmoke());
  }

  private generateSmoke() {
    const smoke = this.document.createElement('div');
    this.renderer.addClass(smoke, 'smoke');
    return smoke;
  }
}
