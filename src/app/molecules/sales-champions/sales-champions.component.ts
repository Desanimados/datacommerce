import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { BackendService } from '../../services/backend.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-sales-champions',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  providers: [BackendService],
  templateUrl: './sales-champions.component.html',
  styleUrl: './sales-champions.component.scss'
})
export class SalesChampionsComponent implements OnInit {

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

  constructor(private readonly backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.getSales().pipe(retry(3)).subscribe(res => {
      this.salesChampions = res as any;
    })
  }
}
