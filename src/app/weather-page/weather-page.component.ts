import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.less']
})
export class WeatherPageComponent implements OnInit {

  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {
  }

  onClick() {
    let city = "London";
    let country_code = "us";
    this.weatherService.getWeather(city, country_code);
  }

}
