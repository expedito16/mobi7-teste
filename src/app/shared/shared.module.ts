import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


//Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {CdkTableModule} from '@angular/cdk/table';
import { VehicleService } from './vehicle-list/vehicle.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    CdkTableModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    VehicleListComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR' },
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
