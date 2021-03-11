import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from './desktop-layout.component';
import { DesktopLayoutRoutingModule } from './desktop-layout-routing.module';


import { AppModule } from 'src/app/app.module'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [DesktopLayoutComponent],
  imports: [
    CommonModule,
    DesktopLayoutRoutingModule,
    AppModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    RouterModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    ],

})
export class DesktopLayoutModule { }
