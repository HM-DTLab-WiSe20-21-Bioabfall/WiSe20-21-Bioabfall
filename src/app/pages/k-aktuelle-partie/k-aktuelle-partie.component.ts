import { Component, OnInit } from '@angular/core';
import { GebietService, AwmPartien } from 'src/app/_services/gebiet.service';


@Component({
  selector: 'app-k-aktuelle-partie',
  templateUrl: './k-aktuelle-partie.component.html',
  styleUrls: ['./k-aktuelle-partie.component.scss']
})
export class KAktuellePartieComponent implements OnInit {
  gebiete: AwmPartien;
  gebietService: GebietService;
  id: string;

  constructor(gbtService: GebietService) {
    this.gebietService = gbtService;
    
   }

  ngOnInit(): void {
    var id = localStorage.getItem('ID.aktuell');
    this.gebiete = this.gebietService.getBestPartie(id);
  }

  onClick(id: string){
    localStorage.setItem('ID.aktuell', id);
  }

}
