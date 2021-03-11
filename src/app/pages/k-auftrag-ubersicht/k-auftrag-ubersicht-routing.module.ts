import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KAuftragUbersichtComponent} from './k-auftrag-ubersicht.component';
const routes: Routes = [
  {
    path: '',
    component: KAuftragUbersichtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KAuftragUbersichtRoutingModule { }
