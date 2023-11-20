import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesByIntegrationComponent } from '../../molecules/sales-by-integration/sales-by-integration.component';
import { GridCardComponent } from '../../atoms/grid-card/grid-card.component';
import { SalesPerMonthComponent } from '../../molecules/sales-per-month/sales-per-month.component';
import { SalesChampionsComponent } from '../../molecules/sales-champions/sales-champions.component';
import { RecommendationsComponent } from '../../molecules/recommendations/recommendations.component';
import { LowRotationComponent } from '../../molecules/low-rotation/low-rotation.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    SalesByIntegrationComponent,
    GridCardComponent,
    SalesPerMonthComponent,
    SalesChampionsComponent,
    RecommendationsComponent,
    LowRotationComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
