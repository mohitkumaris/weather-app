import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConfig} from '../app-config';
import {shareReplay} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { WeatherModel } from 'src/app/model/wether.model';

@Injectable()
export class WeatherService {

  constructor(private readonly httpClient: HttpClient) { }

  getWeather(city: string): Observable<WeatherModel[]> {
       const url  = `${AppConfig.weatherUrl}${city}&units=metric&appid=${AppConfig.apiKey}`;
     return this.httpClient.get(url)
     .pipe(  map((res: any) => res.list.filter(f => f.dt_txt.includes('21:00:00'))),
            map( (res: any) => res.map(r => { const t = r;  return new WeatherModel( moment(t.dt_txt).format('DD MMMM'),
                                   t.main.temp_min, t.main.temp_max, t.main.humidity, t.weather[0].description); })),
                                   shareReplay(1));
     /* to cache the request.
     new subscriptions will NOT execute other HTTP requests but a cached value will be used
     */
  }
}
