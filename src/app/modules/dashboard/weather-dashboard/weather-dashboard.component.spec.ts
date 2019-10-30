import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherDashboardComponent} from './weather-dashboard.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { By } from '@angular/platform-browser';
import { MockComponent, MockedComponent, MockRender } from 'ng-mocks';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


fdescribe('WeatherDashboardComponent', () => {
  let component: WeatherDashboardComponent;
  let fixture: ComponentFixture<WeatherDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDashboardComponent, MockComponent(InputComponent)],
      providers: [HttpClient, FacadeService, WeatherService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function childComponents(): InputComponent[] {
    return fixture.debugElement
    .queryAll(By.directive(InputComponent))
    .map(el => el.componentInstance);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
