import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KAktuellePartieRoutingModule } from './k-aktuelle-partie-routing.module';
import { KAktuellePartieComponent } from './k-aktuelle-partie.component';

import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [KAktuellePartieComponent],
  imports: [
    CommonModule,
    KAktuellePartieRoutingModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule,
  ]
})
export class KAktuellePartieModule { }
