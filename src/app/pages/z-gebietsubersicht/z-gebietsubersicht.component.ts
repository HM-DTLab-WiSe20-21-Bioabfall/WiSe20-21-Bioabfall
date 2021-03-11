import { AfterViewInit, Component, OnInit,ElementRef, ViewChild } from '@angular/core';

const GEBIET: string[] = [];

@Component({
  selector: 'app-z-gebietsubersicht',
  templateUrl: './z-gebietsubersicht.component.html',
  styleUrls: ['./z-gebietsubersicht.component.scss']
})


export class ZGebietsubersichtComponent implements OnInit , AfterViewInit {
  GEBIET: string[] = [
    'Allach-Untermenzing', 'Altstadt-Lehel', 'Au-Haidhausen', 'Aubing-Lochhausen-Langwied', 'Berg am Laim',
    'Bogenhausen', 'Feldmoching-Hasenbergl', 'Hadern', 'Laim', 'Ludwigsvorstadt-Isarvorstadt', 
    'Maxvorstadt', 'Milbertshofen-Am Hart', 'Moosach', 'Neuhausen-Nymphenburg','Obergiesing-Fasangarten',
    'Pasing-Obermenzing', 'Ramersdorf-Perlach', 'Schwabing-Freimann', 'Schwabing-West', 'Schwanthalerhöhe',
    'Sendling', 'Sendling-Westpark','Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln', 
    'Trudering-Riem', 'Untergiesing-Harlaching'
  ];
  
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

map: google.maps.Map;

  lat = 48.13823028408155;
  lng = 11.577828063431086;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 14,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    
  });
  constructor() { }
  ngAfterViewInit() {this.mapInitializer();
  }
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }
 
  ;

  
  ngOnInit(): void {
  }

}
