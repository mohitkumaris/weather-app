import { Injectable, Injector } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';

@Injectable()
export class FacadeService {

  private _weatherService: WeatherService;
  public get weatherService(): WeatherService {
    if(!this._weatherService) {
      // tslint:disable-next-line: deprecation
      this._weatherService = this.injector.get(WeatherService);
    }
    return this._weatherService;
  }
  constructor(private injector: Injector) { }

  getWeatherData(cityCode: number): Observable<any> {
   return this.weatherService.getWeather(cityCode);
  }
}
