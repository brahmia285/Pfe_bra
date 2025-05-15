import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';

const routes: Routes = [
  {
    path: 'analytics',
    component: AnalyticsDashboardComponent
  },
  {
    path: 'management',
    component: ManagementDashboardComponent
  },
  {
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
