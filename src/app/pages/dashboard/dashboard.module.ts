import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AnalyticsDashboardComponent,
    ManagementDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class DashboardModule { }
