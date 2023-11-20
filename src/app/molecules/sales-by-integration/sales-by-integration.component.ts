import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { salesByIntegration } from './sales.mock';

@Component({
  selector: 'app-sales-by-integration',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './sales-by-integration.component.html',
  styleUrl: './sales-by-integration.component.scss'
})
export class SalesByIntegrationComponent {
  salesByIntegration: any = [];
  showLegend: boolean = true;
  showLabels: boolean = true;
  colorScheme: Color = {
    name: "Vendas",
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#f53d2d', '#fff159', '#2bc4c3', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { salesByIntegration });
  }
}
