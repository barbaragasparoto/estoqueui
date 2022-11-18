import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaestoqueRoutingModule } from './listaestoque-routing.module';
import { EstoqueComponent } from './estoque/estoque.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    CommonModule,
    ListaestoqueRoutingModule,
    MatTableModule
  ]
})
export class ListaestoqueModule { }
