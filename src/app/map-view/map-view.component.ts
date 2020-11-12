import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {} from "googlemaps";
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MapsService } from '../services/maps.service';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.less']
})
export class MapViewComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  @ViewChild('slider') slider: any;
  @ViewChild('options') options: any;

  showFullScreen;
  zoom: number = 4;
  map: google.maps.Map;
  latitude = 40.881832;
  longitude = -67.623177;
  citynames = new Array(3);
  citydays = new Array(3);
  cityData = [];
  temperature = true;
  wind = false;
  i = 0;
  option = false;
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  value = 0;
  play = true;
  interval;
  icon1 = {
    url: '../../assets/marker/group-27.svg',
    scaledSize: new google.maps.Size(200, 40),
    origin: new google.maps.Point(-3,2)
  }
  icon2 = {
    url: '../../assets/marker/group-7.svg',
    scaledSize: new google.maps.Size(200, 40),
    origin: new google.maps.Point(-3,2)
  }

  constructor(private _mapsService: MapsService, private _cityService:CityService) { }

  markers = [
	  {
		  lat: 41.881832,
		  lng: -87.623177,
		  label: "Chicago",
		  draggable: true
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: "Germany",
		  draggable: false
	  },
	  {
		  lat: 28.0290,
		  lng: 1.6667,
		  label: "Algeria",
		  draggable: true
	  }
  ]

  ngOnInit() {
  }

  showFull() {
    this.showFullScreen = true;
    this._mapsService.setShowFullScreen(this.showFullScreen)
  }

  onInput() {
    this.value = this.slider.nativeElement.value;
  }

  playPause() {
    if (this.play) {
      this.play =false;
      setTimeout(()=> {
        this.cityData = this._cityService.getCityNames();
      }, 500);

      setTimeout(()=> {
        let x = 0;
        for (let days of this.cityData) {
          this.citynames[x] = days[0].name;
          this.citydays[x] = [];
          x++;
        }
        let i = 0;
        for (let days of this.cityData) {
          
          for (let j = 0; j < 7; j++) {
            for (let k = 0; k < 24; k++) {
              this.citydays[i].push(days[j].data[k])
            }
          }
          i++;
          
        }
      }, 1000);

      
      setTimeout(()=> {
        console.log("cityname",this.citynames[0])

        this.interval = setInterval(() => {
          if (this.i >= 168){
            this.i = 0;
            this.value = this.i;
            for(let i = 0; i < 3; i++) {
              if (this.wind) {
                this.markers[i].label = this.citynames[i] + String(this.citydays[i][this.value].apparentTemperature) + " "
                 + String(this.citydays[i][this.value].windSpeed);
              } else {
                this.markers[i].label = this.citynames[i] + String(this.citydays[i][this.value].apparentTemperature);
              }
            }
          } else {
            this.value = this.i++;
            for(let i = 0; i < 3; i++) {
              if (this.wind) {
                this.markers[i].label = this.citynames[i] + String(this.citydays[i][this.value].apparentTemperature) + " "
                 + String(this.citydays[i][this.value].windSpeed);
              } else {
                this.markers[i].label = this.citynames[i] + String(this.citydays[i][this.value].apparentTemperature);
              }
            }
          }
        }, 100);
    },1500);
    }else {
      this.play = true;
      clearInterval(this.interval);
    }
  } 

  closeOptions() {
    if(this.option) {
      this.options.nativeElement.style = "display: none";
    }
    if(!this.option) {
      this.options.nativeElement.style = "display: block";
    }
    this.option = !this.option;

  }
}
