import { Injectable, Injector } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { WeatherModel } from 'src/app/model/wether.model';


@Injectable()
export class FacadeService {

  private  _functionName =  {
    'GetWeatherData' : ' getWeatherData'
  };

  private _weatherService: WeatherService;
  public get weatherService(): WeatherService {
    if (!this._weatherService) {
      this._weatherService = this.injector.get(WeatherService);
    }
    return this._weatherService;
  }
  constructor(private injector: Injector) { }

   getWeatherData(city: string): Observable<WeatherModel[]> {
       return this.weatherService
       .getWeather(city);
  }
}
