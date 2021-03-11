import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KAktuellerAuftragRoutingModule } from './k-aktueller-auftrag-routing.module';
import {KAktuellerAuftragComponent} from './k-aktueller-auftrag.component'

import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [KAktuellerAuftragComponent],
  imports: [
    CommonModule,
    KAktuellerAuftragRoutingModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule,
  ]
})
export class KAktuellerAuftragModule { }
