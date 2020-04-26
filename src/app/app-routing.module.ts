import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ARQUIVO DE CONFIGURACAO DE ROTAS PRINCIPAL
// path: 'categories' determina que todo inicio de URL comecara com 'categories'
const routes: Routes = [
  { 
    path: 'categories',
    loadChildren: ()=> import('./pages/categories/categories.module').then(c => c.CategoriesModule) 
  },
  {
    path: 'entries',
    loadChildren: ()=> import('./pages/entries/entries.module').then(e => e.EntriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
