import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from  '@angular/fire/database';
import { environment } from '../environments/environment';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { TravelMenuComponent } from './travel-menu/travel-menu.component';
import { NewsMenuComponent } from './news-menu/news-menu.component';
import { MainNewsPortalComponent } from './main-news-portal/main-news-portal.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { LiveNewsMobileComponent } from './live-news-mobile/live-news-mobile.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { CategorizedNewsComponent } from './categorized-news/categorized-news.component';
import { TrendingNewsComponent } from './trending-news/trending-news.component';
import { TrendingNewsMainComponent } from './trending-news-main/trending-news-main.component';
import { CategorizedComponent } from './categorized/categorized.component';
import { FoodNewsComponent } from './food-news/food-news.component';
import { MainPortalComponent } from './main-portal/main-portal.component';
import { SportsComponent } from './sports/sports.component';
import { FooterComponent } from './footer/footer.component';
import { OtherNewsComponent } from './other-news/other-news.component';
import { TravelNewsComponent } from './travel-news/travel-news.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { GlobeComponent } from './globe/globe.component';
import { FormsModule } from '@angular/forms'; 
import { AgmCoreModule } from '@agm/core';

import { DraggableModule } from './draggable/draggable.module';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { MapViewComponent } from './map-view/map-view.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { FullScreenMapsComponent } from './full-screen-maps/full-screen-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuCardComponent,
    TravelMenuComponent,
    NewsMenuComponent,
    MainNewsPortalComponent,
    LiveNewsComponent,
    LiveNewsMobileComponent,
    AdvertiseComponent,
    CategorizedNewsComponent,
    TrendingNewsComponent,
    TrendingNewsMainComponent,
    CategorizedComponent,
    FoodNewsComponent,
    MainPortalComponent,
    SportsComponent,
    FooterComponent,
    OtherNewsComponent,
    TravelNewsComponent,
    WeatherPageComponent,
    GlobeComponent,
    DailyReportsComponent,
    WeatherCityComponent,
    MapViewComponent,
    FullScreenComponent,
    FullScreenMapsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    DraggableModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDF4WPYDQlh-dSfsOZyon3kDYw-afmef9o'
    }),
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
