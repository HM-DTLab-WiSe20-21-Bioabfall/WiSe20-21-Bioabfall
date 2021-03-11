import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { KAuftragUbersichtComponent } from './pages/k-auftrag-ubersicht/k-auftrag-ubersicht.component';
import { ZAuftragsDispRoutingModule } from './pages/z-auftrags-disp/z-auftrags-disp-routing.module';
import { ZAuftragsDispComponent } from './pages/z-auftrags-disp/z-auftrags-disp.component';
import { DesktopLayoutComponent } from './layout/desktop-layout/desktop-layout/desktop-layout.component';

const routes: Routes = [

  {
    path: 'app-layout',
    component: AppLayoutComponent,
    children: [

      {
        path: 'k-auftrag-ubersicht',
        loadChildren: () => import('./pages/k-auftrag-ubersicht/k-auftrag-ubersicht.module').then(m => m.KAuftragUbersichtModule)
      },
      {
        path: 'k-aktueller-auftrag',
        loadChildren: () => import('./pages/k-aktueller-auftrag/k-aktueller-auftrag.module').then(m => m.KAktuellerAuftragModule)
      },
      {
        path: 'k-wetter',
        loadChildren: () => import('./pages/k-wetter/k-wetter.module').then(m => m.KWetterModule)
      },
      {
        path: 'k-aktuelle-partie',
        loadChildren: () => import('./pages/k-aktuelle-partie/k-aktuelle-partie.module').then(m => m.KAktuellePartieModule)
      },
      {
        path: 'k-tonne-bewerten',
        loadChildren: () => import('./pages/k-tonne-bewerten/k-tonne-bewerten.module').then(m => m.KTonneBewertenModule)
      },
      
    ]
  },

  {
    path: 'desktop-layout',
    component: DesktopLayoutComponent,
    children: [
      {
        path: 'z-auftrags-disp',
        loadChildren: () => import('./pages/z-auftrags-disp/z-auftrags-disp.module').then(m => m.ZAuftragsDispModule)
      },
      {
        path: 'z-tonnen-ubersicht',
        loadChildren: () => import('./pages/z-tonnen-ubersicht/z-tonnen-ubersicht.module').then(m => m.ZTonnenUbersichtModule)
      },
      { path: 'z-gebietsubersicht', 
      loadChildren: () => import('./pages/z-gebietsubersicht/z-gebietsubersicht.module').then(m => m.ZGebietsubersichtModule) }
    ]
  },

  {
    path: '',
    component: LandingComponent,
    
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
