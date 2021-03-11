import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZGebietsubersichtRoutingModule } from './z-gebietsubersicht-routing.module';
import { ZGebietsubersichtComponent } from './z-gebietsubersicht.component';
import {  MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [ZGebietsubersichtComponent],
  imports: [
    CommonModule,
    ZGebietsubersichtRoutingModule,
    MatOptionModule,
    MatSelectModule,
    
  ]
})
export class ZGebietsubersichtModule { }
