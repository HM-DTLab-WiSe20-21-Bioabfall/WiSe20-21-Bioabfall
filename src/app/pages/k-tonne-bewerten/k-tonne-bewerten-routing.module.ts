import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KTonneBewertenComponent } from './k-tonne-bewerten.component';

const routes: Routes = [
  {
    path: '',
    component: KTonneBewertenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KTonneBewertenRoutingModule { }
