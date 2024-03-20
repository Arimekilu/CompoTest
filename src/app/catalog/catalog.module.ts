import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import {CatalogService} from "./catalog.service";



@NgModule({
  declarations: [
    ItemCardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CatalogService]
})
export class CatalogModule { }
