import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';

const routes: Routes = [
  {path:'', component: ProdutoComponent},
  {path:'detalhe/:id',component: ProdutoDetalheComponent },
  {path:'novo', component: ProdutoNovoComponent},
  {path:'editar/:id', component: ProdutoEditarComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
