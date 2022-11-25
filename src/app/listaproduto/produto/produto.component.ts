import { Component, OnInit } from '@angular/core';
import { tabelaproduto } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  listaproduto: tabelaproduto[] = [

{id: 1, nomeproduto: 'Tenis Vans'},
{id: 2, nomeproduto: 'Jeans'},
{id: 3, nomeproduto: 'Camiseta branca'},
{id: 4, nomeproduto: 'Moletom Rosa'}

  ];
  displayedColumns: string[] = ['id', 'nomeproduto']

  constructor() { }

  ngOnInit(): void {
  }

}
