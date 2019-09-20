import { Injectable, Injector } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';
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
       .getWeather(city)
       .pipe(
           map((res: any) => res.list.filter(f => f.dt_txt.includes('21:00:00'))),
           map( (res: any) => res.map(r => { const t = r;  return new WeatherModel( moment(t.dt_txt).format('DD MMMM'),
                                  t.main.temp_min, t.main.temp_max, t.main.humidity, t.weather[0].description); }))
       );
  }
}
