import { Component, DestroyRef, effect, inject, input, signal } from '@angular/core';
import { finalize, first, interval, Subject, take, tap } from 'rxjs';
import STATIONS from '../station/station.data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UtilService } from '../service/util.service';
import { MainStation, SubStation } from '../station/station.domain';
import * as _ from 'lodash';


@Component({
  selector: 'app-lottery',
  standalone: true,
  imports: [],
  templateUrl: './lottery.component.html',
  styleUrl: './lottery.component.scss'
})
export class LotteryComponent {
  lotterySubject = input<Subject<void>>();
  resetSubject = input<Subject<void>>();
  /**
   * The temporary result update time
   */
  period = input<number>(100);
  /**
   * The waiting lottery time
   */
  time = input<number>(5000);
  
  destroyRef = inject(DestroyRef);
  utilSrv = inject(UtilService);

  stations = _.flatten(STATIONS.map((station) => (station as MainStation).subStations));
  onLotterying = signal<SubStation | null>(null);
  result = signal<SubStation | null>(null);


  constructor() {}

  ngOnInit() {
    this.lotterySubject()?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.lottery());
    this.resetSubject()?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.result.set(null));
  }

  private lottery() {
    this.result.set(null);
    interval(this.period())
      .pipe(
        take(this.time()/this.period()),
        finalize(() => {
          this.result.set(this.utilSrv.randomMember(this.stations));
          this.onLotterying.set(null);
        })
      ).subscribe(() => {
        this.onLotterying.set(this.utilSrv.randomMember(this.stations));
      }) 
  }
}
