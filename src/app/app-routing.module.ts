import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ARQUIVO DE CONFIGURACAO DE ROTAS PRINCIPAL
// path: 'categories' determina que todo inicio de URL comecara com 'categories'
const routes: Routes = [
  { 
    path: 'categories',
    loadChildren: ()=> import('./pages/categories/categories.module').then(c => c.CategoriesModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
