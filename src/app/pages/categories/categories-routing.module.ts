import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTACAO DOS COMPONENTES QUE DEFINEM AS ROTAS
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';

// CONFIGURANDO AS ROTAS DAS URLs
// path:'' aponta para categories/
// path:'new' aponta para categories/new
// path:':id/edit' aponta para categories/:id/edit
const routes: Routes = [
  { path: '', component: CategorieListComponent },
  { path: 'new', component: CategorieFormComponent },
  { path: ':id/edit', component: CategorieFormComponent }
];


// imports: [RouterModule.forChild(routes)] - GERANDO AS ROTAS DEFINIDAS ACIMA EM ROUTES
// exports: [RouterModule] - EXPORTANDO AS ROTAS GERADAS PARA OS COMPONENTES DE 'CATEGORIES'
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }