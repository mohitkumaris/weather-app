import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherDashboardComponent} from './weather-dashboard.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

fdescribe('WeatherDashboardComponent', () => {
  let component: WeatherDashboardComponent;
  let fixture: ComponentFixture<WeatherDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDashboardComponent, InputComponent],
      providers: [HttpClient, WeatherService, FacadeService ],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
