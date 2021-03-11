import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KAuftragUbersichtRoutingModule } from './k-auftrag-ubersicht-routing.module';
import { KAuftragUbersichtComponent } from  './k-auftrag-ubersicht.component';

import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [KAuftragUbersichtComponent],
  imports: [
    CommonModule,
    KAuftragUbersichtRoutingModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule,
  ]
})
export class KAuftragUbersichtModule { }
