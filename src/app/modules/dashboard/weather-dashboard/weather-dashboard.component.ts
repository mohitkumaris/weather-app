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


  constructor(private facadeService: FacadeService) {}
  data: {
    date: string,
    temp_min: string,
    temp_max: string,
    humidity: string,
    weather: string
  };

  result: Subscription;
  ngOnInit() {
   this.facadeService.getWeatherData(524901).subscribe((res) => {

    this.result =  res.list.map(element => {
     return { date: element.dt_txt,
      temp_min: element.main.humidity,
      temp_max: element.main.temp_max,
      humidity :  element.main.temp_min,
      weather: element.weather[0].description
      };
    });
    console.log(this.result);
   });
  }
  ngOnDestroy(): void {
    this.result.unsubscribe();
  }
}
