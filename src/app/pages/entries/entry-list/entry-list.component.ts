import { Component, OnInit } from '@angular/core';

import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entryService.getAll().subscribe(
      entries => this.entries = entries,
      error => alert('Erro ao carregar lista')
    )
  }

  deleteEntry(entry: Entry){
    const mustDelete = confirm('Deseja realmente excluir este intem?');
    if(mustDelete){
      this.entryService.detele(entry.id).subscribe(
        () => this.entries = this.entries.filter(element => element != entry), // MONTA A LISTA SEM O ELEMENTO DELETADO
        () => alert('Erro ao tentar excluir!')
      )
    }
  }

}
