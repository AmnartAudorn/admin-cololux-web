import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SalesRatioComponent } from './dashboard-components/sales-ratio/sales-ratio.component';
import { TopSellingComponent } from './dashboard-components/top-selling/top-selling.component';
import { TopCardsComponent } from './dashboard-components/top-cards/top-cards.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard' }],
    },
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    RouterModule,
    CanvasJSAngularChartsModule,
  ],
  declarations: [
    DashboardComponent,
    SalesRatioComponent,
    TopSellingComponent,
    TopCardsComponent,
  ],
})
export class DashboardModule {}
