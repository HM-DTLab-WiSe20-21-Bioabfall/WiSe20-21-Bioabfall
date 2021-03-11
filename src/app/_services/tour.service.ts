import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface AwmTour {
  name: string;
  location: AwmLocation;
  tons: AwmTon[];
}

export interface AwmLocation {
  address: string;
  number: string;
  lastPick: string;
  remarks: string;
}

export interface AwmTon {
  type: string;
  id: string;
  label: string;
  checked: boolean;
  picks: PickHistory[];
}

export interface PickHistory {
  date: string;
  state: string;
}

@Injectable()
export class TourService {
    constructor() { }

    init() {
        var tour = {
            name: "Gebiet 001",
            location: {
              address: "Hochschulstrasse 5",
              number: 12345,
              lastPick: "12.10.2019",
              remarks: "Tonnen hinter Hecke"
            },
            tons: [
              {
                type: "BIO 120L",
                id: "278362789",
                label: "Familie Maier",
                /* num: "first", */
                checked: false,
                picks: [
                  {
                    date: "20.04.2019",
                    state: "in Ordnung",
                  },
                  {
                    date: "13.10.2019",
                    state: "verunreinigt"
                  },
                ]
              },
              {
                type: "BIO 120L",
                id: "9837244",
                label: "Familie Müller",
               /*  num:"second", */
                checked: false,
                picks: [
                  {
                    date: "20.04.2019",
                    state: "in Ordnung"
                  },
                  {
                    date: "13.10.2019",
                    state: "in Ordnung"
                  },
                ]
              },
              {
                type: "BIO 120L",
                id: "278362786",
                label: "Familie Maier",
               /*  num:"third", */
                checked: false,
                picks: [
                  {
                    date: "20.04.2019",
                    state: "in Ordnung"
                  },
                  {
                    date: "13.10.2019",
                    state: "verunreinigt"
                  },
                ]
              },

            ]
          };

          this.saveTour(tour);
          return tour;
    }

    getTour() {
        var tour = localStorage.getItem('tour');
        if (tour == null) {
            return this.init();
        }
        return JSON.parse(tour);
    }

    saveTour(tour) {
        localStorage.setItem('tour', JSON.stringify(tour));
    }

    tonChecked(tonId) {
        console.log("Tonne geprüft: " + tonId);
        var tour = this.getTour();

        for (let ton of tour.tons) {
            if (ton.id == tonId) {
                ton.checked = true;
            }
        }
        this.saveTour(tour);
    }
}

