import { Component, OnInit } from '@angular/core';

import { Categorie } from '../shared/categorie.model';
import { CategorieService } from '..//shared/categorie.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  categories: Categorie[] = [];

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert('Erro ao carregar lista')
    )
  }

  deleteCategorie(categorie: Categorie){
    const mustDelete = confirm('Deseja realmente excluir este intem?');
    if(mustDelete){
      this.categorieService.detele(categorie.id).subscribe(
        () => this.categories = this.categories.filter(element => element != categorie), // MONTA A LISTA SEM O ELEMENTO DELETADO
        () => alert('Erro ao tentar excluir!')
      )
    }
  }

}
