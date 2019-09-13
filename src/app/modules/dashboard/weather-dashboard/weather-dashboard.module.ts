import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardTablesRoutingModule} from './weather-dashboard-routing.module';
import {WeatherDashboardComponent} from './weather-dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    DashboardTablesRoutingModule
  ],
  declarations: [WeatherDashboardComponent]
})
export class WeatherDashboardModule {
}
