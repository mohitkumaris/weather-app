import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
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
export class WeatherDashboardComponent  implements AfterViewInit {

  @ViewChild('input')
  input: ElementRef;

  iResult$ = new Observable<WeatherModel[]>();
  iCity = '';
  public errorObject = null;

  constructor(private readonly facadeService: FacadeService) {}

  ngAfterViewInit() {

    fromEvent(this.input.nativeElement, events.keyup ).debounceTime(100)
    .subscribe(() => {
      this.iResult$ = this.facadeService.getWeatherData(this.iCity).pipe(
        catchError(err => {
          this.errorObject = err;
          return throwError(err);
        }));
    });
  }
}


