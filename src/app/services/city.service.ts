import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities: Observable<any[]>;
  cityDays = [];
  cityNames = [];

  constructor(private db: AngularFireDatabase) { 
    this.cities = this.db.list('/cities').valueChanges();
  }

  getCityNames() {
    this.cities.subscribe(data => {
      for(let city of data) {
        this.cityNames.push(city);
      }
    })
    return this.cityNames;
  }

  getCityDays(cityname) {
    this.db.list('/cities/'+cityname).valueChanges()
      .subscribe(data => {
        for(let i = 0; i < data.length; i++) {
          this.cityDays.push(data[i]);
        }
      })
      return this.cityDays;
    
  }
}
