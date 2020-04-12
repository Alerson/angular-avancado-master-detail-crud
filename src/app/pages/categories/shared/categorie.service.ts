import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Categorie }  from './categorie.model'
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiPath: string = 'api/categories';

  constructor(private http: HttpClient) { }

  // RETORNA TODAS AS CATEGORIAS
  getAll(): Observable<Categorie[]>{

    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )

  }

  // RETORNAR UMA CATEGORIA A PARTIR DE UM ID
  getById(id: number): Observable<Categorie>{

    const url = `${this.apiPath}/${id}`; // MONTO A URL PARA FAZER A CHAMADA A API NO BACK-END
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategorie)
    )

  }

  // CRIACAO DE UMA CATEGORIA
  create(categorie: Categorie): Observable<Categorie> {

    return this.http.post(this.apiPath, categorie).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategorie)
    )

  }

  // UPDATE CATEGORIA
  update(categorie: Categorie): Observable<Categorie> {

    const url = `${this.apiPath}/${categorie.id}`;
    return this.http.put(url, categorie).pipe(
      catchError(this.handleError),
      map(() => categorie)
    )

  }

  // EXCLUIR UMA CATEGORIA
  detele(id: number): Observable<any> {

    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )

  }

  // PRIVATE METHODS
  private jsonDataToCategories(jsonData: any[]): Categorie[] {
    const categories: Categorie[] = [];
    jsonData.forEach(element => categories.push(element as Categorie));
    return categories;
  }

  private jsonDataToCategorie(jsonData: any): Categorie {
    return jsonData as Categorie;
  }

  private handleError(error:any): Observable<any>{
    console.log('Erro na requisição => ', error);
    return throwError(error);
  }
}
