import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {} from "googlemaps";
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.less']
})
export class GlobeComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  @ViewChild('map') maps: ElementRef;

  map: google.maps.Map;
  showFullScreen = false;
  translateX = 0;
  translate_X = 0;

  constructor(private _mapsService: MapsService) { }

  ngOnInit() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      center: {lat: 10, lng: -5},
      zoom: 1.5,
      gestureHandling: 'none',
      zoomControl: false,
      styles: [
     
        {
          "featureType": "all",
          "stylers": [
            { "color": "#ffffff" }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#075e88'},]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill', 
          stylers: [{color: '#075e88'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#075e88'}]
        }
      ]
    });
  }

  fullScreen() {
    this.showFullScreen = true;
    this._mapsService.setShowFullScreen(this.showFullScreen)
  }

  toLeft() {
    if(this.translate_X <= 60) {
      this.maps.nativeElement.style = "transform : translateX(-" + (this.translate_X+10) + "%)";
      this.translate_X = this.translate_X + 10;
      this.translateX = this.translate_X;
    }
  }

  toRight() {
    if(this.translateX >= 0) {
      this.maps.nativeElement.style = "transform : translateX(-" + (this.translateX-10) + "%)";
      this.translateX = this.translateX - 10;
      this.translate_X = this.translateX;
      console.log(this.translateX);
    }
  }

}
