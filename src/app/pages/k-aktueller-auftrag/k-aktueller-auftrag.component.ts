import { AuftragService, AwmAuftrag } from './../../_services/auftrag.service';
import { Component, OnInit } from '@angular/core';
import { GebietService, AwmPartien } from 'src/app/_services/gebiet.service';



@Component({
  selector: 'app-k-aktueller-auftrag',
  templateUrl: './k-aktueller-auftrag.component.html',
  styleUrls: ['./k-aktueller-auftrag.component.scss']
})
export class KAktuellerAuftragComponent implements OnInit {

//  auftraege: AwmAuftrag[];
//  auftragService: AuftragService;
  partien: AwmPartien[];
  auftrag: string;
  gebietService: GebietService;
  auftragService: AuftragService;

  /*   constructor(aftrgService: AuftragService ) {
    this.auftragService = aftrgService;
   } */

  constructor(gbtService: GebietService, aftService: AuftragService ) {
  this.gebietService = gbtService;
  this.auftragService = aftService;
  }

  ngOnInit(): void {
    var id = localStorage.getItem('ID.auftrag');
    this.auftrag = this.auftragService.getBestAuftrag(id);

    this.partien = this.gebietService.getPartien();
//   this.auftraege = this.auftragService.getAuftraege();
    console.log(this.partien);
    
  }

  onClick(id: string){
    localStorage.setItem('ID.aktuell', id);
  }

}
