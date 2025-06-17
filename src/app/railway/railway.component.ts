import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-railway',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './railway.component.html',
  styleUrl: './railway.component.scss'
})
export class RailwayComponent {
  sleepers = Array(1000).fill(null);
}
