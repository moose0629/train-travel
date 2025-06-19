import { Component } from '@angular/core';
import { BaseTrainCarriageDirective } from './base/base-train-carriage.directive';

@Component({
  selector: 'app-train',
  standalone: true,
  imports: [BaseTrainCarriageDirective],
  templateUrl: './train.component.html',
  styleUrl: './train.component.scss'
})
export class TrainComponent {

}
