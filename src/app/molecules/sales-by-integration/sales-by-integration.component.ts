import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { BackendService } from '../../services/backend.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-sales-by-integration',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  providers: [BackendService],
  templateUrl: './sales-by-integration.component.html',
  styleUrl: './sales-by-integration.component.scss'
})
export class SalesByIntegrationComponent implements OnInit {
  salesByIntegration: any = [];
  showLegend: boolean = true;
  showLabels: boolean = true;
  colorScheme: Color = {
    name: "Vendas",
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#f53d2d', '#fff159', '#2bc4c3', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(readonly backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.getChannels().pipe(retry(3)).subscribe(res => {
      this.salesByIntegration = res;
    })
  }
}
