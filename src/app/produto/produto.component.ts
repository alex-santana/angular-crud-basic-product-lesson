import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Produto } from '../model/produto';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  preserveWhitespaces: true
})
export class ProdutoComponent implements OnInit {

  displayedColumns: string[] = [ 'nome', 'desc', 'preco', 'acao'];
  produtoSource : Produto[];
  dataSource: Produto[];
  
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service.getProdutos()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      //this.isLoadingResults = false;
    }, err => {
      console.log(err);
      //this.isLoadingResults = false;
    });
  }

}
