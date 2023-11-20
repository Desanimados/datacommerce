import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-card.component.html',
  styleUrl: './grid-card.component.scss'
})
export class GridCardComponent {
  @Input() title: string;
}
