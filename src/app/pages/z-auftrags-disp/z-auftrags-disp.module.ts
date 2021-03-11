import { ZAuftragsDispComponent } from './z-auftrags-disp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import { ZAuftragsDispRoutingModule } from './z-auftrags-disp-routing.module';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])


@NgModule({
  declarations: [ZAuftragsDispComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    ZAuftragsDispRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    FlexLayoutModule
  ]
})
export class ZAuftragsDispModule { }
