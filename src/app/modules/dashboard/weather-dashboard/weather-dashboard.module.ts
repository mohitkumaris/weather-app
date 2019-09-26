import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {DashboardTablesRoutingModule} from './weather-dashboard-routing.module';
import {WeatherDashboardComponent} from './weather-dashboard.component';
import { InputComponent } from 'src/app/components/input/input.component';



@NgModule({
  imports: [
    CommonModule,
    DashboardTablesRoutingModule,
    FormsModule
  ],
  declarations: [WeatherDashboardComponent, InputComponent]
})
export class WeatherDashboardModule {
}
