import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaprodutoRoutingModule } from './listaproduto-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ListaprodutoRoutingModule,
    MatTableModule
  ]
})
export class ListaprodutoModule { }


