import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

import { Subject } from 'rxjs';
import * as _ from 'lodash';

import { LotteryComponent } from './lottery/lottery.component';
import { RailwayComponent } from './railway/railway.component';
import { TrainComponent } from './train/train.component';
import { SubStation } from './station/station.domain';

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
  title = 'train-travel';
  isActive = signal(false);
  isGoing = signal(false);
  isFinish = signal(false);

  time = 10000;

  lotterySubject = new Subject<void>();
  resetSubject = new Subject<void>();

  lottoList: SubStation[] = [];
  private lottoQueue: SubStation | null;

  constructor() {}

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
