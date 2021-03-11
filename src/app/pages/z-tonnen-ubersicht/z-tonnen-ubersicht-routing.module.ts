import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZTonnenUbersichtComponent } from './z-tonnen-ubersicht.component';

const routes: Routes = [
  {
    path:'',
    component: ZTonnenUbersichtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZTonnenUbersichtRoutingModule { }
