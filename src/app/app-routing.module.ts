import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// лейзи, оптимизация и все такое...
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'catalog'
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then(
        (m) => m.CatalogModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
