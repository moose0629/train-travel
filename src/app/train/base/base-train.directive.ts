import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  BASE_REM_UNIT,
  CHIMNEY_LAYOUT,
  ITEM_BORDER_SIZE,
  ITEM_SIZE,
  ITEM_SPACE,
  LEFT_SPACE,
  SMOKE_LAYOUT,
  WHEEL_LAYOUT,
  WINDOW_LAYOUT,
} from '../service/train.domain';

import * as _ from 'lodash';
import { DOCUMENT } from '@angular/common';

const BASE_UNIT = BASE_REM_UNIT;

@Directive({
  selector: '[appBaseTrain]',
  standalone: true,
})
export class BaseTrainDirective implements OnInit {
  windowCount = input<number>(3);

  hasWindow = input<boolean>(false);
  hasChimney = input<boolean>(false);
  carriageBackground = input<string | null>(null);

  private elementRef = inject(ElementRef);
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  private cd = inject(ChangeDetectorRef);

  constructor() {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.classList.add('base-train-carriage');

    if (this.hasWindow()) {
      this.installWindow(element);
    }
    this.installWheel(element);

    if (this.carriageBackground()){
      this.renderer.setStyle(element, 'background', this.carriageBackground());
    }

    if (this.hasChimney()) {
      this.installChimney(element);
    }
  }

  private appendStyles (element: HTMLElement, style: Partial<CSSStyleDeclaration>) {
    for (const key in style) {
      this.renderer.setStyle(element, key, _.get(style, key));
    }
  }

  private getScale(size: number | undefined): string {
    return _.isNil(size) ? 'auto' : `${size}${BASE_UNIT}`;
  }

  private installWindow(container: HTMLElement) {
    // console.log(`container width: ${container.offsetWidth}`);
    Array(this.windowCount())
      .fill(undefined)
      .forEach((_: undefined, index: number) => {
        const window = this.generateWindow({
          left: this.getScale(
            LEFT_SPACE + // 最左側
            index * (ITEM_SIZE) + // 前一個物件的寬度
            (index === 0 ? 0 : index * ITEM_SPACE) // 與前一個物件的間距
          )
        });
        container.appendChild(window);
      });
    this.cd.markForCheck();
  }

  private generateWindow(style: Partial<CSSStyleDeclaration>) {
    const carriageWindow = this.document.createElement('div');
    const layout = WINDOW_LAYOUT;
    let extendStyle = {
      ...style,
      position: 'absolute',
      top: this.getScale(layout!.top),
      width: this.getScale(layout.width),
      height: this.getScale(layout.height),
      border: `${this.getScale(ITEM_BORDER_SIZE)} solid #fff`,
      background: '#88c',
      borderRadius: `${this.getScale(ITEM_BORDER_SIZE * 2)}`,
    };
    this.appendStyles(carriageWindow, extendStyle);
    return carriageWindow;
  }

  private installWheel(container: HTMLElement) {
    const layout = WHEEL_LAYOUT;
    const leftWheel = this.generateWheel({left: this.getScale(layout.left)});
    const rightWheel = this.generateWheel({right: this.getScale(layout.right)});
    container.appendChild(leftWheel);
    container.appendChild(rightWheel);
  }

  private generateWheel(style: Partial<CSSStyleDeclaration>) {
    const wheel = this.document.createElement('div');
    const layout = WHEEL_LAYOUT;
    let extendStyle = {
      ...style,
      position: 'absolute',
      bottom: this.getScale(layout.bottom),
      width:  this.getScale(layout.width),
      height: this.getScale(layout.height),
      background: '#333',
      borderRadius: '50%',
    };
    this.appendStyles(wheel, extendStyle);
    return wheel;
  }

  private installChimney(container: HTMLElement) {
    const chimney = this.document.createElement('div');
    const layout = CHIMNEY_LAYOUT;
    this.appendStyles(chimney, {
      position: 'absolute',
      top: this.getScale(layout.top),
      right: this.getScale(layout.right),
      width: this.getScale(layout.width),
      height: this.getScale(layout.height),
      background: '#333',
      borderRadius: this.getScale(ITEM_BORDER_SIZE),
    })

    container.appendChild(chimney);
    container.appendChild(this.generateSmoke());
  }

  private generateSmoke() {
    const smoke = this.document.createElement('div');
    smoke.classList.add('chimney-smoke');
    const layout = SMOKE_LAYOUT;
    this.appendStyles(smoke, {
      position: 'absolute',
      top: this.getScale(layout.top),
      right: this.getScale(layout.right),
      width: this.getScale(layout.width),
      height: this.getScale(layout.height),
      background: '#ccc',
      borderRadius: '50%',
    });
    return smoke;
  }
}
