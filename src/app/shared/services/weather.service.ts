import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConfig} from '../app-config';
import {shareReplay} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private readonly httpClient: HttpClient) { }

  getWeather(city: string): Observable<any> {
       const url  = `${AppConfig.weatherUrl}${city}&units=metric&appid=${AppConfig.apiKey}`;
     return this.httpClient.get(url)
     .pipe(shareReplay(1));
     /* to cache the request.
     new subscriptions will NOT execute other HTTP requests but a cached value will be used
     */
  }
}
