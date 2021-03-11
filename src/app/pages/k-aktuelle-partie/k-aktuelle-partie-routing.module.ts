import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KAktuellePartieComponent } from './k-aktuelle-partie.component';


const routes: Routes = [{
  path: '',
  component: KAktuellePartieComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KAktuellePartieRoutingModule { }
