import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  report;

  constructor(private http: HttpClient) { }

  getWeather(city, country_code) {
    let url = "https://api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=8b84526eccd4307f0451d06c802f1165";
    //let url = "https://api.darksky.net/forecast/6905813f8d702c787d6431abfa9fb695/37.8267,-122.4233";
    this.http.get(url).subscribe(data =>
      this.report = data
      )
  }

  getReport() {
    return this.report;
  }
}
