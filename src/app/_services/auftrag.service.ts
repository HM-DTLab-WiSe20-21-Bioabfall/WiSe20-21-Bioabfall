import { Injectable } from '@angular/core';


export interface AwmAuftrag {
  id: string;
  name: string;
  gebiet: AwmGebiet[];
}

export interface AwmGebiet {
  gebietId: string;
  partie: AwmPartien[];
}

export interface AwmPartien {
  partieId: string;
  strasse: string;
  hausnummer: Number;
  tonne: AwmTonnen[];
}

export interface AwmTonnen {
  tonnenId: string;
  volumen: number;
  defekt: boolean;
  bewertung: Bewertung[];
}

export interface Bewertung {
  bewertungId: string;
  status: number;   // 1 grün, 2 gelb, 3 rot
  note: string;
  date: string;
  checked: boolean;
}


@Injectable()
export class AuftragService {

    // das Datenobjekt
    data: AwmAuftrag[];

    constructor() {
      if (this.data == null) {
        this.loadArea();
      }
     }

     private loadArea() {
       // jedes Mal die Daten neu aufbauen,
       // eignet sich gut während des testens
      this.initData();
      this.saveArea();
      /*
      const gebiete = localStorage.getItem('awm.gebiete');
      if (gebiete == null) {
          this.initData();
          this.saveArea();
      }
      else {
        this.data = JSON.parse(gebiete);
      }
      */
    }

    private saveArea() {
        localStorage.setItem('awm.gebiete', JSON.stringify(this.data));
    }


    private initData() {

      this.data =  [
          { id: 'a1', name: 'Schwabing-Freimann 20.5 ', gebiet: [
            { gebietId: 'g1', partie: [
              { partieId: 'p1', strasse: 'hochschulstr.', hausnummer: 11, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
              { partieId: 'p2', strasse: 'kindergartenstr.', hausnummer: 3, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
              { partieId: 'p2', strasse: 'kindergartenstr.', hausnummer: 3, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
              { partieId: 'p2', strasse: 'kindergartenstr.', hausnummer: 3, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
              { partieId: 'p2', strasse: 'kindergartenstr.', hausnummer: 3, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
            ]},
          ]},

          { id: 'a2', name: 'Bogenhausen 20.7', gebiet: [
            { gebietId: 'g2', partie: [
              { partieId: 'p3', strasse: 'hochschulstr.', hausnummer: 11, tonne: [
                {tonnenId: 't3', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b2', status: 1, note: '', date:'22.12.2020', checked: false }
                ]},
              ]},{ partieId: 'p2', strasse: 'kindergartenstr.', hausnummer: 3, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
            ]},
          ]},

          { id: 'a3', name: 'Ramersdorf-Perlach 20.8', gebiet: [
            { gebietId: 'g3', partie: [
              { partieId: 'p4', strasse: 'hochschulstr.', hausnummer: 11, tonne: [
                {tonnenId: 't4', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b3', status: 1, note: '', date:'02.11.2020', checked: false }
                ]},
              ]},{ partieId: 'p2', strasse: 'kindergartenstr.', hausnummer: 3, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
            ]},
          ]},

          { id: 'a4', name: '--NEU-- Maxvorstadt 20.9', gebiet: [
            { gebietId: 'g4', partie: [
              { partieId: 'p4', strasse: 'hochschulstr.', hausnummer: 11, tonne: [
                {tonnenId: 't4', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b3', status: 1, note: '', date:'02.11.2020', checked: false }
                ]},
              ]}, 
              { partieId: 'p90', strasse: 'hochschulstr.', hausnummer: 11, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
              { partieId: 'p90', strasse: 'hochschulstr.', hausnummer: 11, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
              ]},
              { partieId: 'p90', strasse: 'hochschulstr.', hausnummer: 11, tonne: [
                {tonnenId: 't1', defekt: false, volumen: 120, bewertung: [
                  {bewertungId: 'b1', status: 1, note: '', date:'17.12.2020', checked: false }
                ]},
            ]},
          ]},
        ]},
        ];
    }

    getAuftraege() {
      return this.data;
    }

    // Für die erste Tonne --> 2 weitere hinzufügen
    getTonne1(id){
      return this.data[0].gebiet[0].partie[0].tonne[0];
    }

    getBestAuftrag(id: string){
      return this.data[id].name;
    }

  }

