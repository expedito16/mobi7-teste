import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    VehicleListComponent
  ]
})
export class SharedModule { }
