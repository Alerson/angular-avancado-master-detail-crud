import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Entry } from './entry.model'
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private apiPath: string =  'api/entries';

  constructor(private http: HttpClient) { }

    // RETORNA TODAS AS ENTRIES
    getAll(): Observable<Entry[]>{

      return this.http.get(this.apiPath).pipe(
        catchError(this.handleError),
        map(this.jsonDataToEntries)
      )
  
    }
  
    // RETORNAR UMA ENTRY A PARTIR DE UM ID
    getById(id: number): Observable<Entry>{
  
      const url = `${this.apiPath}/${id}`; // MONTO A URL PARA FAZER A CHAMADA A API NO BACK-END
      return this.http.get(url).pipe(
        catchError(this.handleError),
        map(this.jsonDataToEntry)
      )
  
    }
  
    // CRIACAO DE UMA ENTRY
    create(entry: Entry): Observable<Entry> {
  
      return this.http.post(this.apiPath, entry).pipe(
        catchError(this.handleError),
        map(this.jsonDataToEntry)
      )
  
    }
  
    // UPDATE ENTRY
    update(entry: Entry): Observable<Entry> {
  
      const url = `${this.apiPath}/${entry.id}`;
      return this.http.put(url, entry).pipe(
        catchError(this.handleError),
        map(() => entry)
      )
  
    }
  
    // EXCLUIR UMA ENTRY
    detele(id: number): Observable<any> {
  
      const url = `${this.apiPath}/${id}`;
      return this.http.delete(url).pipe(
        catchError(this.handleError),
        map(() => null)
      )
  
    }
  
    // PRIVATE METHODS
    private jsonDataToEntries(jsonData: any[]): Entry[] {
      const entries: Entry[] = [];

      jsonData.forEach(element => {
        const entry = Object.assign(new Entry(), element);
        entries.push(entry);
      });

      return entries;
    }
  
    private jsonDataToEntry(jsonData: any): Entry {
      return Object.assign(new Entry(), jsonData);
    }
  
    private handleError(error:any): Observable<any>{
      console.log('Erro na requisição => ', error);
      return throwError(error);
    }

}
