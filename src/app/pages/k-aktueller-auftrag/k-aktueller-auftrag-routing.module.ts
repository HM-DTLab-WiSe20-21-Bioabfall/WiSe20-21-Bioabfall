import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KAktuellerAuftragComponent} from './k-aktueller-auftrag.component'
const routes: Routes = [
  {
    path: '',
    component: KAktuellerAuftragComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KAktuellerAuftragRoutingModule { }
