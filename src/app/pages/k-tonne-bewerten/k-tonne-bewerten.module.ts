import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KTonneBewertenRoutingModule } from './k-tonne-bewerten-routing.module';
import { KTonneBewertenComponent } from './k-tonne-bewerten.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
  declarations: [KTonneBewertenComponent],
  imports: [
    CommonModule,
    KTonneBewertenRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    MatButtonToggleModule,
  ]
})
export class KTonneBewertenModule { }
