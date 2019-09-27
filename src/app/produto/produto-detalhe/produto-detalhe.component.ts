import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: Produto = { id: '', nome: '', descricao: '', preco: null, data_atualizacao: null };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id']);
  }

  getProduto(id) {
    this.api.getProduto(id)
      .subscribe(data => {
        this.produto = data;
        console.log(this.produto);
        this.isLoadingResults = false;
      });
  }

  deleteProduto(id) {
    this.isLoadingResults = true;
    this.api.deleteProduto(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}