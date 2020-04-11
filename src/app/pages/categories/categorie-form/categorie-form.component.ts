import { Component, OnInit, AfterContentChecked } from '@angular/core';

// OBJETOS NECESSARIO PARA TRABALHAR COM EDIÇÃO DE FORMULÁRIOS
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms'

// OBJETOS RESPONSÁVEI POR GERENCIAR AS ROTAS
import { ActivatedRoute, Router } from '@angular/router'

import { switchMap } from 'rxjs/operators'

import { Categorie } from '../shared/categorie.model';
import { CategorieService } from '../shared/categorie.service';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit, AfterContentChecked {

  // DECLARAÇÃO DE VARIAVEIS
  currentAction:string;
  categorieForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  categorie: Categorie = new Categorie();

  constructor(
    private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  // AÇÕES QUE SERÃO EXECUTADAS NO MOMENTO EM QUE O COMPONENTE FOR SOLICITADO
  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategorieForm();
    this.loadCategorie();
  }

  // EM ALGUNS MOMENTOS DURANTE O PROCESSAMENTO DA PAGINA ESSE METODO É CHAMADO
  ngAfterContentChecked(){
    this.setPageTitle();
  }

  // PRIVATE METHODS

  // VERIFICA O TIPO DE AÇÃO QUE O USUÁRIO QUER EXECUTAR (EDIÇÃO OU INSERÇÃO)
  private setCurrentAction() {
    if (this.route.snapshot.url[0].path == 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  // CONSTROI UMA CATEGORIA USANDO O FORMBUILDER
  private buildCategorieForm() {
    this.categorieForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    })
  }

  // BUSCAR A CATEGORIA PELO ID
  private loadCategorie() {
    if (this.currentAction == 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.categorieService.getById(+params.get('id')))
      ).subscribe(
        (categorie) => {
          this.categorie = categorie;
          this.categorieForm.patchValue(this.categorie) // SETA TODOS OS ATRIBUTOS DA CATEGORIA BUSCADA NO FORMULÁRIO CRIADO NO BUILD
        },
        (error) => alert('Ocorreu algum erro ao tentar executar a ação de busca')
      )
    }
  }

  // SETA A CATEGORIA QUE ESTIVER SENDO EDITADA
  private setPageTitle() {
    if (this.currentAction == 'new') {
      this.pageTitle = 'Cadastro de nova Categoria'
    } else {
      const categorieName = this.categorie.name || ''
      this.pageTitle = 'Editando categoria: ' + categorieName;
    }
  }

}
