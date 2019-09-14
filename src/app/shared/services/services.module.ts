import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';
import { FacadeService } from './facade.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WeatherService,
    FacadeService
  ]
})
export class ServicesModule { }
