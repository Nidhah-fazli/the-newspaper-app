import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { WeatherCityComponent } from './weather-city/weather-city.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'weather', component: WeatherPageComponent },
  { path: 'weather-city/:city', component: WeatherCityComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
