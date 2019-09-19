
 interface Deserializable {
  deserialize(input: any): this;
}

export class WeatherModel implements Deserializable {

  date: string;
  minTemp: string;
  maxTemp: string;
  humidity: string;
  weather: string;

  deserialize(input: any): this {
     Object.assign(this, input);
     return this;
  }
  constructor(date: string, minTemp: string, maxTemp: string, humidity: string, weather: string) {
       this.date = date;
       this.minTemp = minTemp;
       this.maxTemp = maxTemp;
       this.humidity = humidity;
       this.weather = weather;
     }
}

