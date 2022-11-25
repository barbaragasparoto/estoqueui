import { Component, OnInit } from '@angular/core';
import { tabelaestoque } from 'src/app/core/model'

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {

  listaestoque: tabelaestoque[] = [

{id: 1, nomeestoque: 'Sapatos'},
{id: 2, nomeestoque: 'Calças'},
{id: 3, nomeestoque: 'Camisetas'},
{id: 4, nomeestoque: 'Moletom'}

  ];
  displayedColumns: string[] = ['id', 'nomeestoque']

  constructor() { }

  ngOnInit(): void {
  }

}
