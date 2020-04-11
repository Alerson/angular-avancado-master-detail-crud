import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';

// REPARAR OS MODULOS IMPORTADOS, POIS AQUI ESTA O MODULO QUE ESTA DEFINIDO AS ROTAS (URLs)
@NgModule({
  declarations: [CategorieListComponent, CategorieFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }