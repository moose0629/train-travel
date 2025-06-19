import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

import { fromEvent, map, startWith, Subject } from 'rxjs';
import * as _ from 'lodash';

import { LotteryComponent } from './lottery/lottery.component';
import { RailwayComponent } from './railway/railway.component';
import { TrainComponent } from './train/train.component';
import { SubStation } from './station/station.domain';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButton,
    LotteryComponent,
    RailwayComponent,
    TrainComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  destoryRef = inject(DestroyRef);

  isActive = signal(false);
  isGoing = signal(false);
  isFinish = signal(false);
  isPortrait = signal(false);

  time = 10000;

  lotterySubject = new Subject<void>();
  resetSubject = new Subject<void>();

  lottoList: SubStation[] = [];
  private lottoQueue: SubStation | null;

  constructor() {}

  ngOnInit() {
    fromEvent(window, 'orientationchange').pipe(
      startWith(null), // Emit initial orientation
      map(() => this.getOrientation()),
      takeUntilDestroyed(this.destoryRef),
    ).subscribe((value) => {
      this.isPortrait.set(value);
    })
  }

  private getOrientation(): boolean {
    return window.screen.orientation.type.indexOf('portrait') > -1;
  }

  start() {
    if (!this.isActive()) {
      this.lotterySubject.next();
      this.isActive.set(true);
      this.isGoing.set(true);
      setTimeout(() => {
        this.isFinish.set(true);
      }, this.time);
    }
  }

  reset() {
    this.isGoing.set(false);
    this.isActive.set(false);
    this.isFinish.set(false);
    this.resetSubject.next();
    if (this.lottoQueue) this.lottoList.push(this.lottoQueue);
    this.lottoQueue = null;
  }

  onLottoChange(value: SubStation) {
    this.lottoQueue = value;
  }
}
