import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemCardComponent} from "./components/item-card/item-card.component";

const routes: Routes = [
  {path: '', redirectTo: 'item/ELC0200000696'},
  {path: 'item/:article', component: ItemCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
