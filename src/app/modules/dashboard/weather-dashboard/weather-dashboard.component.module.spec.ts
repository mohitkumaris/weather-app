import {WeatherDashboardModule} from './weather-dashboard.module';

describe('DashboardTablesModule', () => {
  let dashboardTablesModule: WeatherDashboardModule;

  beforeEach(() => {
    dashboardTablesModule = new WeatherDashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardTablesModule).toBeTruthy();
  });
});
