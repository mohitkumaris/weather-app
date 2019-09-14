import {Component, OnInit, OnDestroy} from '@angular/core';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { Subscription } from 'rxjs';
import moment from 'moment';
@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {

  textValue: string;
  result: Subscription;

  constructor(private facadeService: FacadeService) {}


  ngOnInit() {}
  ngOnDestroy(): void {
    this.result.unsubscribe();
  }
  showWeather(event) {
   const cityName = event.target.value.split(',')[0];
   const countryCode = event.target.value.split(',')[1];
   console.log(cityName, countryCode.toUpperCase());
   this.facadeService.getWeatherData(cityName, countryCode.toUpperCase()).subscribe((res) => {
    console.log(res);
    this.result =  res.list.map(element => {
     return { date: element.dt_txt,
      temp_min: element.main.temp_min,
      temp_max: element.main.temp_max,
      humidity :  element.main.humidity,
      weather: element.weather[0].description
      };
    }).filter((f) => {
     return f.date.includes('21:00:00');
    }).map((r) => {
      return {
        date: moment(r.date).format('DD MMMM'),
      temp_min: r.temp_min,
      temp_max: r.temp_max,
      humidity :  r.humidity,
      weather: r.weather
      };
    });
   });
}

}

