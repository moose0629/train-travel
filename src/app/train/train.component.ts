import { Component } from '@angular/core';
import { BaseTrainDirective } from './base/base-train.directive';

@Component({
  selector: 'app-train',
  standalone: true,
  imports: [BaseTrainDirective],
  templateUrl: './train.component.html',
  styleUrl: './train.component.scss'
})
export class TrainComponent {

}
