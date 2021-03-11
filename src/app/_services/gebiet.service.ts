import { Injectable } from '@angular/core';

export interface AwmPartien {
  id: string;
  gebietname: string;
  strasse: string;
  hausnummer: string;
  tonnen: AwmTonne[];
}

export interface AwmTonne {
  id: string;
  volumen: number;
}


@Injectable()
export class GebietService {

    // das Datenobjekt
    data: AwmPartien[];

    constructor() {
      if (this.data == null) {
        this.loadArea();
      }
     }

     private loadArea() {
      // const gebiete = localStorage.getItem('awm.gebiete');
      // if (gebiete == null) {
          this.initData();
          this.saveArea();
      /* }
       else {
        this.data = JSON.parse(gebiete);
      } */
    }

    private saveArea() {
        localStorage.setItem('awm.gebiete', JSON.stringify(this.data));
    }

    private initData() {

      this.data =  [
            { id: 'p1', gebietname: 'Schwabing-Freimann 20.5', strasse: 'Herzogstrasse 86', hausnummer: '11',  tonnen: [
              { id: 't1', volumen: 120 },
              { id: 't2', volumen: 120 },
              { id: 't3', volumen: 120 },
            ]},
            
            { id: 'p1', gebietname: 'Bogenhausen 20.7',  strasse: 'Anzigerstrasse 14', hausnummer: '04',  tonnen: [
              { id: 't1', volumen: 120 },
              { id: 't2', volumen: 120 },
              { id: 't3', volumen: 120 },
            ]},
            { id: 'p1', gebietname:'Rammersdorf-Perlach 20.8', strasse: 'Langestrasse 459', hausnummer: '8',  tonnen: [
              { id: 't1', volumen: 120 },
              { id: 't2', volumen: 120 },
              { id: 't3', volumen: 120 },
            ]},
            { id: 'p1', gebietname: 'Maxvorstadt 20.9' ,strasse: 'Leopoldstrasse 61', hausnummer: '42',  tonnen: [
              { id: 't1', volumen: 120 },
              { id: 't2', volumen: 120 },
              { id: 't3', volumen: 120 },
            ]},
/*            { id: 'p1', strasse: 'Schellingstrasse 33', hausnummer: '50',  tonnen: [
               
              { id: 't1', volumen: 120 },
              { id: 't2', volumen: 120 },
              { id: 't3', volumen: 120 },
            ]}, */
            
           ]};


    getPartien() {
      return this.data;
    }
    
    getBestPartie(id: string){
      return this.data[id];
    }

}

