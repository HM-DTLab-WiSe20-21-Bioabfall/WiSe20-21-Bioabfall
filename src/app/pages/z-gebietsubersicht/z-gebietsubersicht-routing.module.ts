import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZGebietsubersichtComponent } from './z-gebietsubersicht.component';

const routes: Routes = [{ path: '', component: ZGebietsubersichtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZGebietsubersichtRoutingModule { }
