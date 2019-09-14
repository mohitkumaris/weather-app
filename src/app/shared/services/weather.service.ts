import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConfig} from '../app-config';
import {shareReplay} from 'rxjs/operators';

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
   appConfig = new AppConfig();
  getWeather(city: string, countrycode: string) {
     return this.httpClient.get(this.appConfig.weatherUrl + city + ',' + countrycode + '&units=metric' + '&appid=' + this.appConfig.apiKey)
     .pipe(shareReplay(1));
     /* to cache the request.
     new subscriptions will NOT execute other HTTP requests but a cached value will be used
     */
  }
}
