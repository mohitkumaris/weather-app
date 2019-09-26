import {Component, ViewChild, AfterViewInit, ElementRef, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { FacadeService } from 'src/app/shared/services/facade.service';
import {  Observable, throwError  } from 'rxjs';
import { WeatherModel } from 'src/app/model/wether.model';
import {fromEvent} from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import { catchError } from 'rxjs/operators';
import { events } from 'src/app/shared/app-config';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent  implements AfterViewInit, OnInit {

  iResult$ = new Observable<WeatherModel[]>();
  CData: string;
  public errorObject = null;

  constructor(private readonly facadeService: FacadeService) {}

  ngAfterViewInit() {

   /* fromEvent(this.input.nativeElement, events.keyup ).debounceTime(100)
    .subscribe(() => {
      this.iResult$ = this.facadeService.getWeatherData(this.iCity).pipe(
        catchError(err => {
          this.errorObject = err;
          return throwError(err);
        }));
    }); */

    this.showWeather(this.CData);
  }

  ngOnInit(): void {}
  showWeather(city) {
    this.iResult$ = this.facadeService.getWeatherData(city).
    debounceTime(100).
    pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      }));
  }

}


