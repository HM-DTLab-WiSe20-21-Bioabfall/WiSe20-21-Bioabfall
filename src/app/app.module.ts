import { GebietService } from './_services/gebiet.service';
import { AuftragService } from './_services/auftrag.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_guards/auth.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LandingComponent} from './landing/landing.component';
import {DesktopLayoutComponent} from './layout/desktop-layout/desktop-layout/desktop-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LandingComponent,
    DesktopLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],

  providers: [
    AuthGuard,
    AuthenticationService,
    AuftragService,
    GebietService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
