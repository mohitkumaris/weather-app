export class WeatherModel {

  date: string;
  minTemp: string;
  maxTemp: string;
  humidity: string;
  weather: string;

  constructor(date: string, minTemp: string, maxTemp: string, humidity: string, weather: string) {
       this.date = date;
       this.minTemp = minTemp;
       this.maxTemp = maxTemp;
       this.humidity = humidity;
       this.weather = weather;
     }
}

