import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.scss']
})
export class ProdutoEditarComponent implements OnInit {
  id: String = '';
  productForm: FormGroup;
  nome: String = '';
  descricao: String = '';
  preco: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
   'nome' : [null, Validators.required],
   'descricao' : [null, Validators.required],
   'preco' : [null, Validators.required]
 });
 }

 getProduto(id) {
  this.api.getProduto(id).subscribe(data => {
    this.id = data.id;
    this.productForm.setValue({
      nome: data.nome,
      descricao: data.descricao,
      preco: data.preco
    });
  });
}

updateProduto(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateProduto(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/detalhe/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
