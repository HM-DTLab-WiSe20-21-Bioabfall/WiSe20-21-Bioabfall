import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZAuftragsDispComponent } from './z-auftrags-disp.component';

const routes: Routes = [
{
  path:'',
  component: ZAuftragsDispComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZAuftragsDispRoutingModule { }
