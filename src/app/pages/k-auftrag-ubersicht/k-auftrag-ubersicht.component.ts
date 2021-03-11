import { AuftragService, AwmAuftrag } from './../../_services/auftrag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k-auftrag-ubersicht',
  templateUrl: './k-auftrag-ubersicht.component.html',
  styleUrls: ['./k-auftrag-ubersicht.component.scss']
})
export class KAuftragUbersichtComponent implements OnInit {
  id: string;
  auftraege: AwmAuftrag[];
  auftragService: AuftragService;

  constructor(aftrgService: AuftragService ) {
    this.auftragService = aftrgService;
   }

  ngOnInit(): void {
    this.auftraege = this.auftragService.getAuftraege();
    console.log(this.auftraege);
  }


  onClick(id: string){
    localStorage.setItem('ID.auftrag', id);
  }

}
