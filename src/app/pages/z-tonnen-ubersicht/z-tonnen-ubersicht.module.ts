import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZTonnenUbersichtComponent } from './z-tonnen-ubersicht.component';
import { ZTonnenUbersichtRoutingModule } from './z-tonnen-ubersicht-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [ZTonnenUbersichtComponent],
  imports: [
    CommonModule, 
    ZTonnenUbersichtRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    RouterModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
  ]
})
export class ZTonnenUbersichtModule { }
