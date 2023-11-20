import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { salesChampions } from './sales.mock';

@Component({
  selector: 'app-sales-champions',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './sales-champions.component.html',
  styleUrl: './sales-champions.component.scss'
})
export class SalesChampionsComponent {

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Produtos';
  legendTitle: string = "Canal";
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Vendas';
  animations: boolean = true;
  salesChampions: any[] = [];


  colorScheme: Color = {
    name: "Vendas",
    selectable: false,
    group: ScaleType.Quantile,
    domain: ['#f53d2d', '#fff159', '#2bc4c3', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, {salesChampions})
  }
}
