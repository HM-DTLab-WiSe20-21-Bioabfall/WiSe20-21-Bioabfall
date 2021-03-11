import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { IconOptions } from '@angular/material/icon';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';




interface TonnenUbersicht {
  Adresse: string;
  Gebiet: string;
  Bewertungscode: string;
  ZuletztBewertet: Date;
  Defekt: string;
  Kunde:string;
}

const ZULETZTBEWERTET: string[] = ['Green', 'Orange', 'Red'];
const GEBIET: string[] = [
  'Allach-Untermenzing', 'Altstadt-Lehel', 'Au-Haidhausen', 'Aubing-Lochhausen-Langwied', 'Berg am Laim',
  'Bogenhausen', 'Feldmoching-Hasenbergl', 'Hadern', 'Laim', 'Ludwigsvorstadt-Isarvorstadt',
  'Maxvorstadt', 'Milbertshofen-Am Hart', 'Moosach', 'Neuhausen-Nymphenburg','Obergiesing-Fasangarten',
  'Pasing-Obermenzing', 'Ramersdorf-Perlach', 'Schwabing-Freimann', 'Schwabing-West', 'Schwanthalerhöhe',
  'Sendling', 'Sendling-Westpark','Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln',
  'Trudering-Riem', 'Untergiesing-Harlaching'
];
const ADRESSE: string[] = [
  'Kirchenstr. 63', 'Römerstr. 02', 'Anzingerstr. 11', 'Leopoldstr. 21', 'Schellingstr. 33', 'Welfenstr. 6a'
]
const DEFEKT: string[] =['ja', 'nein']

@Component({
  selector: 'app-z-tonnen-ubersicht',
  templateUrl: './z-tonnen-ubersicht.component.html',
  styleUrls: ['./z-tonnen-ubersicht.component.scss']
})
export class ZTonnenUbersichtComponent implements OnInit {
  dataSource: MatTableDataSource<TonnenUbersicht>;
  ZTonnenUbersicht: TonnenUbersicht[];
  displayedColumns: string[] = ['select','Adresse', 'Bewertungscode','Kunde', 'Gebiet', 'ZuletztBewertet', 'Defekt'];
  selection = new SelectionModel<TonnenUbersicht>(true, []);
  GEBIET: string[] = [
  'Allach-Untermenzing', 'Altstadt-Lehel', 'Au-Haidhausen', 'Aubing-Lochhausen-Langwied', 'Berg am Laim',
  'Bogenhausen', 'Feldmoching-Hasenbergl', 'Hadern', 'Laim', 'Ludwigsvorstadt-Isarvorstadt',
  'Maxvorstadt', 'Milbertshofen-Am Hart', 'Moosach', 'Neuhausen-Nymphenburg','Obergiesing-Fasangarten',
  'Pasing-Obermenzing', 'Ramersdorf-Perlach', 'Schwabing-Freimann', 'Schwabing-West', 'Schwanthalerhöhe',
  'Sendling', 'Sendling-Westpark','Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln',
  'Trudering-Riem', 'Untergiesing-Harlaching'
];
Stellplatz: string[]=[
  '0-1000', '1000-2000', '2000-3000', '3000-4000', '4000-5000'
]
Kunde: string[] =[
  'ABC', 'DEF', 'GHI', 'JKL','MNO', 'PQR', 'STU', 'VWX', 'YZ'
]

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // erstelle 100 Mülltonnenstellen
   const tonnenstellen = Array.from({length: 100}, (_, k) => erstelleneuetonnenstelle(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(tonnenstellen);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TonnenUbersicht): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Adresse + 1}`;
  }

  button_rechnung_openDialog() {
      // TODO: hier muss jetzt noch Code rein, mit dem der Dilaog geöffnet wird
  }
}
  /** erstellt zufällige Inhalt für jede tonnenstelle . */
function erstelleneuetonnenstelle(Anzahl: number):   TonnenUbersicht {
  const Gebiet = GEBIET[Math.round(Math.random() * (GEBIET.length - 1))];
  const Adresse = ADRESSE[Math.round(Math.random() * (ADRESSE.length - 1))];

  return {
   // anzahl: anzahl.toString(),
    //Anzahl: Math.round(Math.random() * 6).toString(),
    Adresse: Adresse,
    Gebiet: Gebiet,
    //Bewertungscode: Math.round(Math.random() * 100000).toString(), /** erstellt zufälliges Bewertungs-Code. */
    Bewertungscode: ZULETZTBEWERTET[Math.round(Math.random() * (ZULETZTBEWERTET.length - 1))], /** erstellt zufällige Farbe. */
    ZuletztBewertet: new Date(new Date(2020,1,1).getTime() + Math.random()*0.1 * (new Date(2020,30,12).getTime() - new Date(2020,1,1).getTime())),
    Defekt: DEFEKT[Math.round(Math.random() * (DEFEKT.length - 1))], /** erstellt zufällige Defekt. */
    Kunde: Math.round(Math.random() * 10000).toString()
  };
}


export class Dialog_Rechnung {

  constructor(public dialog: MatDialog) {}

  button_rechnung_openDialog(): void {
    const dialogRef = this.dialog.open(Dialog_Rechnung_Popup, {
      width: "350px",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: "z-tonnen-ubersicht-dialog-rechnung-popup",
  templateUrl: "./z-tonnen-ubersicht-dialog-rechnung-popup.html"
  })

  export class Dialog_Rechnung_Popup {
  constructor(public dialogRef: MatDialogRef<Dialog_Rechnung_Popup>) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}



