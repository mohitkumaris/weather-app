import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WeatherDashboardComponent} from './weather-dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '',
        component: WeatherDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTablesRoutingModule {
}
