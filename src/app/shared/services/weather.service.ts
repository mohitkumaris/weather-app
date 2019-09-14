import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConfig} from '../app-config';

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
   appConfig = new AppConfig();
  getWeather(cityCode: number) {
   //   return this.httpClient.get('https://samples.openweathermap.org/data/2.5/'
   //  + 'forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22').pipe();
     return this.httpClient.get(this.appConfig.weatherUrl + cityCode + '&appid=' + this.appConfig.apiKey);
  }
}
