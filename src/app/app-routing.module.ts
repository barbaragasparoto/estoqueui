import { EstoqueComponent } from './listaestoque/estoque/estoque.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: 'listaestoque', loadChildren: () => import('./listaestoque/listaestoque.module').then(m => m.ListaestoqueModule)
},


{
  path: '', pathMatch: 'full', redirectTo: 'listaestoque'
},

{
  path: 'listaproduto', loadChildren: () => import('./listaproduto/listaproduto.module').then(m => m.ListaprodutoModule)
},

{
  path: '', pathMatch: 'full', redirectTo: 'listaproduto'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
