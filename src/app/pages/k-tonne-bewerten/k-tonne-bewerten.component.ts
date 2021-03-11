import { Component, OnInit } from '@angular/core';
import { GebietService, AwmPartien } from 'src/app/_services/gebiet.service';

@Component({
  selector: 'app-k-tonne-bewerten',
  templateUrl: './k-tonne-bewerten.component.html',
  styleUrls: ['./k-tonne-bewerten.component.scss']
})
export class KTonneBewertenComponent implements OnInit {
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
}