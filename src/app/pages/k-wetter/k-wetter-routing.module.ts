import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KWetterComponent} from './k-wetter.component';

const routes: Routes = [
  {
    path: '',
    component: KWetterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KWetterRoutingModule { }
