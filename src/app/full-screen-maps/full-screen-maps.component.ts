import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MapsService } from '../services/maps.service';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-full-screen-maps',
  templateUrl: './full-screen-maps.component.html',
  styleUrls: ['./full-screen-maps.component.less']
})
export class FullScreenMapsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  @ViewChild('slider') slider: any;

  showFullScreen;

  map: google.maps.Map;
  latitude = 40.881832;
  longitude = -67.623177;
  citynames;
  citydays;
  cityData = [];
  i = 0;
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  value = 0;
  valueChange = new BehaviorSubject <number>(this.value);
  labelvalue;
  Popup;
  popup;
  play = true;
  interval;

  constructor(private _mapsService: MapsService, private _cityService:CityService) { }

  ngOnInit() {

    

    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      center: {lat: this.latitude, lng: this.longitude},
      zoom: 4,
      zoomControl: false,
      fullscreenControl: false
    });
    
    this.definePopupClass();
    this.popUp();
      
    this.valueChange.subscribe(data =>
      this.labelvalue = data);
  }

  close() {
    this.showFullScreen = false;
    this._mapsService.setShowFullScreen(this.showFullScreen)
  }

  onInput() {
    this.value = this.slider.nativeElement.value;
  }

  playPause() {
    if (this.play) {
      this.play =false;

      setTimeout(()=> {
      this.citynames = this._cityService.getCityNames();
      }, 1000);
      
      setTimeout(() => {
      this.citydays = this._cityService.getCityDays(this.citynames[0]);
      },1000);

      setTimeout(() => {
        for (let i = 0; i < this.citydays.length; i++) {
          for (let j = 0; j < this.citydays[i].data.length; j++)
          this.cityData.push(this.citydays[i].data[j]);
        }
      }, 1500);

      this.interval = setInterval(() => {
        if (this.i >= 100){
          this.i = 0;
          this.value = this.i;
        } else {
          this.value = this.i++;
        }
      }, 100);
      this.valueChange.next(this.value);
    }else {
      this.play = true;
      clearInterval(this.interval);
    }
  } 

  definePopupClass() {
    /**
     * A customized popup on the map.
     * @param {!google.maps.LatLng} position
     * @param {!Element} content
     * @constructor
     * @extends {google.maps.OverlayView}
     */
    this.Popup = function(position, content) {
      this.position = position;
  
      content.classList.add('popup-bubble-content');
  
      var pixelOffset = document.createElement('div');
      pixelOffset.classList.add('popup-bubble-anchor');
      pixelOffset.appendChild(content);
  
      this.anchor = document.createElement('div');
      this.anchor.classList.add('popup-tip-anchor');
      this.anchor.appendChild(pixelOffset);
  
      // Optionally stop clicks, etc., from bubbling up to the map.
      this.stopEventPropagation();
    };
    // NOTE: google.maps.OverlayView is only defined once the Maps API has
    // loaded. That is why Popup is defined inside initMap().
    this.Popup.prototype = Object.create(google.maps.OverlayView.prototype);
  
    /** Called when the popup is added to the map. */
    this.Popup.prototype.onAdd = function() {
      this.getPanes().floatPane.appendChild(this.anchor);
    };
  
    /** Called when the popup is removed from the map. */
    this.Popup.prototype.onRemove = function() {
      if (this.anchor.parentElement) {
        this.anchor.parentElement.removeChild(this.anchor);
      }
    };
  
    /** Called when the popup needs to draw itself. */
    this.Popup.prototype.draw = function() {
      var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
      console.log(divPosition, "POsition")

      // Hide the popup when it is far out of view.
      var display = 
          Math.abs(divPosition.x) < 500 && Math.abs(divPosition.y) < 500 ?
          'block' :
          'none';
      
      if (display === 'block') {
        this.anchor.style.left = divPosition.x + 'vw';
        this.anchor.style.top = divPosition.y + 'vw';
      }
      if (this.anchor.style.display !== display) {
        this.anchor.style.display = display;
      }
    };
  
    /** Stops clicks/drags from bubbling up to the map. */
    this.Popup.prototype.stopEventPropagation = function() {
      var anchor = this.anchor;
      anchor.style.cursor = 'auto';
  
      ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
       'pointerdown']
          .forEach(function(event) {
            anchor.addEventListener(event, function(e) {
              e.stopPropagation();
            });
          });
    };
  }

  popUp() {
    this.popup = new this.Popup(
      new google.maps.LatLng(41.881, -87.623),
      document.getElementById('content'));
    this.popup.setMap(this.map);
  }

  

}
