import {Component, OnInit, OnDestroy} from '@angular/core';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { Subscription, Subject } from 'rxjs';
import * as moment from 'moment';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {

  textValue: string;
  unSubscribe$ = new  Subject();
  iResult = [];
  constructor(private facadeService: FacadeService) {}


  ngOnInit() {}
  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
  showWeather(event) {
   const cityName = event.target.value.split(',')[0];
   const countryCode = event.target.value.split(',')[1];

  this.facadeService.getWeatherData(cityName, countryCode.toUpperCase())
   .pipe(
      takeUntil(this.unSubscribe$)
   )
   .subscribe((res: any) => {
      this.iResult = res.list.filter((f) => {
        return f.dt_txt.includes('21:00:00');
       })
       .map((r) => {
         return {
           date: moment(r.dt_txt).format('DD MMMM'),
         temp_min: r.main.temp_min,
         temp_max: r.main.temp_max,
         humidity :  r.main.humidity,
         weather: r.weather[0].description
         };
       });

   }, (error) => console.log('Some error in service'));
  }
}


