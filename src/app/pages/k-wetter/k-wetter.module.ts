import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KWetterRoutingModule } from './k-wetter-routing.module';
import { KWetterComponent } from './k-wetter.component';


@NgModule({
  declarations: [KWetterComponent],
  imports: [
    CommonModule,
    KWetterRoutingModule,
  ]
})
export class KWetterModule { }
