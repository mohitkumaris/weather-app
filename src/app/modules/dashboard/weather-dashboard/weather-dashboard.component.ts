import {Component} from '@angular/core';
import { FacadeService } from 'src/app/shared/services/facade.service';
import {  Observable } from 'rxjs';
import { WeatherModel } from 'src/app/model/wether.model';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent  {

  iResult$ = new Observable<WeatherModel[]>();
  constructor(private readonly facadeService: FacadeService) {}

  showWeather(event) {
   const cityName = event.target.value.split(',')[0];
   const countryCode = event.target.value.split(',')[1];

   this.iResult$ = this.facadeService.getWeatherData(cityName, countryCode);
  }

}


